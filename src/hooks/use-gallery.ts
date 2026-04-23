// src/hooks/use-gallery.ts
import { useState, useEffect } from 'react';

export interface GalleryMedia {
  id: string;
  url: string;
  alt: string;
  type: 'image' | 'video';
  uploadedAt: Date;
}

const API_BASE = import.meta.env.VITE_API_BASE || 'https://wedding-api.knhxptn.workers.dev';
console.log('API Base URL:', API_BASE);

export const useGallery = () => {
  const [media, setMedia] = useState<GalleryMedia[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch media from API
  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await fetch(`${API_BASE}/api/media`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch media');
        }

        const data = await response.json();
        
        if (data.success && Array.isArray(data.media)) {
          const formattedMedia = data.media.map((item: any) => ({
            id: item.id,
            url: item.url,
            alt: item.alt,
            type: item.type,
            uploadedAt: new Date(item.uploadedAt),
          }));
          
          setMedia(formattedMedia);
          setError(null);
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load gallery media';
        setError(errorMessage);
        console.error('Error fetching gallery:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, []);

  const addMedia = async (file: File, title: string, type: 'image' | 'video'): Promise<GalleryMedia | null> => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('title', title);
      formData.append('type', type);

      const response = await fetch(`${API_BASE}/api/media/upload`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Upload failed');
      }

      const data = await response.json();
      
      if (data.success && data.media) {
        const newMedia: GalleryMedia = {
          id: data.media.id,
          url: data.media.url,
          alt: data.media.alt,
          type: data.media.type,
          uploadedAt: new Date(data.media.uploadedAt),
        };

        setMedia(prev => [newMedia, ...prev]);
        return newMedia;
      }
      
      return null;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to upload media';
      setError(errorMessage);
      console.error('Error uploading media:', err);
      return null;
    }
  };

  const removeMedia = async (id: string): Promise<boolean> => {
    try {
      const response = await fetch(`${API_BASE}/api/media/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete media');
      }

      setMedia(prev => prev.filter(item => item.id !== id));
      return true;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to delete media';
      setError(errorMessage);
      console.error('Error deleting media:', err);
      return false;
    }
  };

  const images = media.filter(item => item.type === 'image');
  const videos = media.filter(item => item.type === 'video');

  return {
    media,
    images,
    videos,
    loading,
    error,
    addMedia,
    removeMedia
  };
};