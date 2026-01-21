import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import villaExterior from "@/assets/villa-exterior.png";
import terraceSunset from "@/assets/terrace-sunset.png";
import masterBedroom from "@/assets/master-bedroom.png";
import bedroomStone from "@/assets/bedroom-stone.png";
import bedroomCozy from "@/assets/bedroom-cozy.png";
import bedroomWarm from "@/assets/bedroom-warm.png";
import bathroom from "@/assets/bathroom.png";
import livingRoom from "@/assets/living-room.png";
import diningArea from "@/assets/dining-area.png";
import bedroomMirror from "@/assets/bedroom-mirror.png";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: villaExterior, alt: "Villa Exterior" },
    { src: terraceSunset, alt: "Terrace at Sunset" },
    { src: masterBedroom, alt: "Master Bedroom" },
    { src: bedroomStone, alt: "Stone Accent Bedroom" },
    { src: bathroom, alt: "Spa Bathroom" },
    { src: livingRoom, alt: "Living Room" },
    { src: diningArea, alt: "Dining Area" },
    { src: bedroomCozy, alt: "Cozy Bedroom" },
    { src: bedroomWarm, alt: "Warm Bedroom" },
    { src: bedroomMirror, alt: "Bedroom with Mirror" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="gallery" className="py-20 px-4 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Experience Niva
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-primary mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={imageVariants}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-2xl shadow-earth cursor-pointer group aspect-[4/3] bg-muted"
              onClick={() => image.src && setSelectedImage(image.src)}
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.p
                className="absolute bottom-4 left-4 text-background font-medium text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {image.alt}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox with Enhanced Animation */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-foreground/95 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-4 right-4 text-background hover:text-primary transition-colors z-10"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={40} />
            </motion.button>
            <motion.img
              src={selectedImage}
              alt="Gallery preview"
              className="max-w-full max-h-full object-contain rounded-lg shadow-warm"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateY: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
