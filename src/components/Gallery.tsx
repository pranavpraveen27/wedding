import { useState } from "react";
import { X, Download, Play } from "lucide-react";
import Ornament from "./Ornament";
import { useGallery } from "@/hooks/use-gallery";

const Gallery = () => {
  const { images, videos, loading, error } = useGallery();
  const [active, setActive] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  // Combine images and videos for display
  console.log(images, 'Fetched images count');
  console.log(videos, 'Fetched videos count');
  const allMedia = [...images, ...videos];
  console.log(allMedia, 'Combined media count');
  console.log(allMedia.map(m => m.url), 'Media URLs1');
console.log(allMedia.length, 'Media count2');
  // Show placeholder gallery if no media or loading/error
  // if (loading || error || allMedia.length === 0) {
  //   const placeholders = [
  //     { id: '1', bg: 'from-primary/20 to-primary/10' },
  //     { id: '2', bg: 'from-primary/10 to-primary/20' },
  //     { id: '3', bg: 'from-primary/15 to-primary/25' },
  //     { id: '4', bg: 'from-primary/25 to-primary/15' },
  //     { id: '5', bg: 'from-primary/20 to-primary/10' },
  //     { id: '6', bg: 'from-primary/10 to-primary/20' },
  //   ];

  //   return (
  //     <section id="gallery" className="py-24 md:py-32 bg-gradient-soft">
  //       <div className="container">
  //         <div className="text-center mb-16 reveal">
  //           <p className="font-small-caps text-xs text-primary mb-4">Memories</p>
  //           <h2 className="font-display italic text-4xl md:text-6xl text-foreground mb-6">
  //             Our Story in Frames
  //           </h2>
  //           <Ornament />
  //           <p className="mt-6 font-body text-muted-foreground text-sm">
  //             {loading ? 'Loading memories...' : error ? 'Error loading gallery' : 'No photos yet. Upload from admin panel.'}
  //           </p>
  //         </div>

  //         <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] md:auto-rows-[200px] gap-3 md:gap-4 max-w-6xl mx-auto">
  //           {placeholders.map((ph, i) => (
  //             <div
  //               key={ph.id}
  //               className={`reveal relative overflow-hidden rounded-sm bg-gradient-to-br ${ph.bg} border border-border/50`}
  //               style={{ transitionDelay: `${i * 60}ms` }}
  //             >
  //               <div className="w-full h-full flex items-center justify-center">
  //                 <svg className="w-8 h-8 text-primary/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  //                 </svg>
  //               </div>
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     </section>
  //   );
  // }

  return (
    <section id="gallery" className="py-24 md:py-32 bg-gradient-soft">
      <div className="container">
        <div className="text-center mb-16 reveal">
          <p className="font-small-caps text-xs text-primary mb-4">Memories</p>
          <h2 className="font-display italic text-4xl md:text-6xl text-foreground mb-6">
            Our Story in Frames
          </h2>
          <Ornament />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] md:auto-rows-[200px] gap-3 md:gap-4 max-w-6xl mx-auto">
          {allMedia.map((item, i) => (
            <div
              key={item.id}
              className={`reveal relative overflow-hidden rounded-sm group`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {item.type === 'image' ? (
                <>
                  {console.log(item.url, 'Rendering image URL')}
                  <img
                    src={item.url}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  />
                  {/* <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/15 transition-colors duration-500" /> */}
                  <div className="absolute inset-2 border border-primary/0 group-hover:border-primary/40 transition-colors duration-500 rounded-sm" />
                  <button
                    onClick={() => {
                      const imageIndex = images.findIndex(img => img.id === item.id);
                      setActive(imageIndex);
                    }}
                    className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Download image"
                  >
                    <Download size={16} />
                  </button>
                  <button
                    onClick={() => {
                      const imageIndex = images.findIndex(img => img.id === item.id);
                      setActive(imageIndex);
                    }}
                    className="absolute inset-0 w-full h-full"
                    aria-label="View full size"
                  />
                </>
              ) : (
                <>
                  <video
                    src={item.url}
                    className="w-full h-full object-cover"
                    muted
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => e.currentTarget.pause()}
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <button
                    onClick={() => {
                      const videoIndex = videos.findIndex(vid => vid.id === item.id);
                      setActiveVideo(videoIndex);
                    }}
                    className="absolute inset-0 w-full h-full"
                    aria-label="Play video"
                  />
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Image Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[90] bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in-slow"
          onClick={() => setActive(null)}
        >
          <button
            onClick={() => setActive(null)}
            className="absolute top-6 right-6 text-background hover:text-primary-glow transition-colors"
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <button
            onClick={() => {
              const link = document.createElement('a');
              link.href = images[active].url;
              link.download = `wedding-photo-${images[active].id}.jpg`;
              link.click();
            }}
            className="absolute top-6 right-20 text-background hover:text-primary-glow transition-colors"
            aria-label="Download image"
          >
            <Download size={28} />
          </button>
          <img
            src={images[active].url}
            alt={images[active].alt}
            className="max-w-full max-h-[88vh] object-contain rounded-sm shadow-gold animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Video Lightbox */}
      {activeVideo !== null && (
        <div
          className="fixed inset-0 z-[90] bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in-slow"
          onClick={() => setActiveVideo(null)}
        >
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 text-background hover:text-primary-glow transition-colors"
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <video
            src={videos[activeVideo].url}
            controls
            autoPlay
            className="max-w-full max-h-[88vh] rounded-sm shadow-gold animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
