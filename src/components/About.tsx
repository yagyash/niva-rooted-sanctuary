import { Bed, Bath, Sofa, Waves, TreePine, Flame } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const features = [
    { icon: Bed, text: "2 Spacious Bedrooms" },
    { icon: Sofa, text: "Cozy Living Room" },
    { icon: Bath, text: "Attached Bathroom" },
    { icon: Waves, text: "Swimming Pool" },
    { icon: TreePine, text: "Lush Garden" },
    { icon: Flame, text: "Private Bonfire Area" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-20 px-4 bg-secondary/30 overflow-hidden">
      <div className="max-w-6xl mx-auto">
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
            Welcome to Niva
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Nestled in the serene mountains near Morwaniya village, Udaipur, Niva is a tranquil escape 
            where Rajasthani heritage meets modern comfort. Our villa is a celebration of earthy architecture, 
            natural materials, and the timeless beauty of mountain living.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 40px hsl(9 54% 58% / 0.2)",
                transition: { duration: 0.3 }
              }}
              className="bg-card p-6 rounded-2xl shadow-earth text-center cursor-pointer"
            >
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <feature.icon className="w-8 h-8 text-primary" />
              </motion.div>
              <p className="text-foreground font-medium">{feature.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="bg-card rounded-3xl p-8 md:p-12 shadow-earth relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Decorative gradient */}
          <motion.div 
            className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          <motion.h3 
            className="text-2xl md:text-3xl font-semibold mb-6 text-foreground relative z-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            A Sanctuary of Peace
          </motion.h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Niva – The Rooted Heaven is more than a homestay; it's a journey back to simplicity. 
              Every corner of our villa tells a story of tradition, crafted with local stone, wood, 
              and the warmth of Rajasthani hospitality.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Wake up to breathtaking mountain vistas, unwind in our thoughtfully designed spaces, 
              and reconnect with nature in its purest form. Whether you seek solitude or a peaceful 
              retreat with loved ones, Niva offers an experience rooted in authenticity and tranquility.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
