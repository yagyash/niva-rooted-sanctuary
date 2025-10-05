import { useState } from "react";
import { X } from "lucide-react";
import villaExterior from "@/assets/villa-exterior.png";
import poolNight from "@/assets/pool-night.png";
import courtyardNight from "@/assets/courtyard-night.jpg";
import bedroom from "@/assets/bedroom.jpg";
import bathroom from "@/assets/bathroom.jpg";
import bedroomWindow from "@/assets/bedroom-window.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: villaExterior, alt: "Villa Exterior" },
    { src: poolNight, alt: "Pool at Night" },
    { src: courtyardNight, alt: "Courtyard at Night" },
    { src: bedroom, alt: "Bedroom Interior" },
    { src: bathroom, alt: "Bathroom with Natural Elements" },
    { src: bedroomWindow, alt: "Bedroom View" },
  ];

  return (
    <section id="gallery" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Experience Niva
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-earth cursor-pointer group aspect-[4/3]"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-foreground/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-background hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <X size={40} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-full object-contain rounded-lg shadow-warm"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
