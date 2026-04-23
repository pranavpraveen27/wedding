import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Upload, Loader2, Lock, Trash2, LogOut } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useGallery } from '@/hooks/use-gallery';

// Password for admin access - Change this in production!
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'wedding2026';

const AdminPanel = () => {
  // Authentication state
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  // Media state
  const [photoTitle, setPhotoTitle] = useState('');
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [uploadingPhoto, setUploadingPhoto] = useState(false);

  const [videoTitle, setVideoTitle] = useState('');
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [uploadingVideo, setUploadingVideo] = useState(false);

  const { images, videos, addMedia, removeMedia } = useGallery();

  // ============ Authentication ============
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setPassword('');
      toast({
        title: "Success",
        description: "Admin access granted!",
      });
    } else {
      toast({
        title: "Access Denied",
        description: "Incorrect password.",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
    setPassword('');
  };

  // ============ Photo Upload ============
  const handlePhotoFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Photo must be under 10MB",
          variant: "destructive",
        });
        return;
      }
      setPhotoFile(file);
    }
  };

  const handleUploadPhoto = async () => {
    if (!photoFile) {
      toast({
        title: "No file selected",
        description: "Please select a photo to upload.",
        variant: "destructive",
      });
      return;
    }

    if (!photoTitle.trim()) {
      toast({
        title: "No title",
        description: "Please enter a photo title.",
        variant: "destructive",
      });
      return;
    }

    setUploadingPhoto(true);
    try {
      const result = await addMedia(photoFile, photoTitle, 'image');
      
      if (result) {
        setPhotoFile(null);
        setPhotoTitle('');

        toast({
          title: "Success",
          description: "Photo uploaded successfully!",
        });
      } else {
        toast({
          title: "Upload failed",
          description: "Failed to upload photo. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Upload error:', error);
      toast({
        title: "Upload failed",
        description: error instanceof Error ? error.message : "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setUploadingPhoto(false);
    }
  };

  // ============ Video Upload ============
  const handleVideoFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 100 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Video must be under 100MB",
          variant: "destructive",
        });
        return;
      }
      setVideoFile(file);
    }
  };

  const handleUploadVideo = async () => {
    if (!videoFile) {
      toast({
        title: "No file selected",
        description: "Please select a video to upload.",
        variant: "destructive",
      });
      return;
    }

    if (!videoTitle.trim()) {
      toast({
        title: "No title",
        description: "Please enter a video title.",
        variant: "destructive",
      });
      return;
    }

    setUploadingVideo(true);
    try {
      const result = await addMedia(videoFile, videoTitle, 'video');
      
      if (result) {
        setVideoFile(null);
        setVideoTitle('');

        toast({
          title: "Success",
          description: "Video uploaded successfully!",
        });
      } else {
        toast({
          title: "Upload failed",
          description: "Failed to upload video. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Upload error:', error);
      toast({
        title: "Upload failed",
        description: error instanceof Error ? error.message : "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setUploadingVideo(false);
    }
  };

  const handleDeleteMedia = async (id: string, type: 'image' | 'video') => {
    const success = await removeMedia(id);
    if (success) {
      toast({
        title: "Success",
        description: `${type === 'image' ? 'Photo' : 'Video'} deleted successfully!`,
      });
    } else {
      toast({
        title: "Error",
        description: `Failed to delete ${type === 'image' ? 'photo' : 'video'}.`,
        variant: "destructive",
      });
    }
  };

  // ============ Login UI ============
  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 to-pink-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="w-5 h-5" />
              Admin Access
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoFocus
                />
              </div>
              <Button type="submit" className="w-full">
                Access Admin Panel
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  // ============ Admin Dashboard ============
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Wedding Admin Panel</h1>
          <Button
            variant="outline"
            onClick={handleLogout}
            className="flex items-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>

        <Tabs defaultValue="photos" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="photos">Photos ({images.length})</TabsTrigger>
            <TabsTrigger value="videos">Videos ({videos.length})</TabsTrigger>
          </TabsList>

          {/* ========== PHOTOS TAB ========== */}
          <TabsContent value="photos" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Upload Photos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="photo-title">Photo Title</Label>
                  <Input
                    id="photo-title"
                    placeholder="e.g., Ceremony Moments"
                    value={photoTitle}
                    onChange={(e) => setPhotoTitle(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="photo-file">Select Photo (Max 10MB)</Label>
                  <Input
                    id="photo-file"
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoFileChange}
                  />
                  {photoFile && (
                    <p className="text-sm text-gray-600">
                      Selected: {photoFile.name}
                    </p>
                  )}
                </div>

                <Button
                  onClick={handleUploadPhoto}
                  disabled={uploadingPhoto || !photoFile}
                  className="w-full"
                >
                  {uploadingPhoto ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Photo
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Photo Gallery Grid */}
            {images.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Uploaded Photos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {images.map((photo) => (
                      <div key={photo.id} className="border rounded-lg overflow-hidden group">
                        <div className="relative bg-gray-200 aspect-square overflow-hidden">
                          <img
                            src={photo.url}
                            alt={photo.alt}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => handleDeleteMedia(photo.id, 'image')}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="p-3">
                          <p className="font-semibold text-sm">{photo.alt}</p>
                          <p className="text-xs text-gray-500">
                            {photo.uploadedAt.toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* ========== VIDEOS TAB ========== */}
          <TabsContent value="videos" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Upload Videos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="video-title">Video Title</Label>
                  <Input
                    id="video-title"
                    placeholder="e.g., Wedding Highlights"
                    value={videoTitle}
                    onChange={(e) => setVideoTitle(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="video-file">Select Video (Max 100MB)</Label>
                  <Input
                    id="video-file"
                    type="file"
                    accept="video/*"
                    onChange={handleVideoFileChange}
                  />
                  {videoFile && (
                    <p className="text-sm text-gray-600">
                      Selected: {videoFile.name} ({(videoFile.size / 1024 / 1024).toFixed(2)}MB)
                    </p>
                  )}
                </div>

                <Button
                  onClick={handleUploadVideo}
                  disabled={uploadingVideo || !videoFile}
                  className="w-full"
                >
                  {uploadingVideo ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Video
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Videos List */}
            {videos.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Uploaded Videos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {videos.map((video) => (
                      <div
                        key={video.id}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-1">
                          <p className="font-semibold">{video.alt}</p>
                          <p className="text-sm text-gray-500">
                            {video.uploadedAt.toLocaleDateString()}
                          </p>
                        </div>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDeleteMedia(video.id, 'video')}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;
