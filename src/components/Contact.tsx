import { MapPin, Mail, Phone, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Contact = () => {
  const contactItems = [
    {
      icon: MapPin,
      label: "Location",
      content: (
        <>
          Near Morwaniya Village<br />
          Udaipur, Rajasthan
        </>
      ),
    },
    {
      icon: Mail,
      label: "Email",
      content: (
        <a
          href="mailto:info@nivaheaven.com"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          info@nivaheaven.com
        </a>
      ),
    },
    {
      icon: Phone,
      label: "Phone",
      content: (
        <a
          href="tel:+919876543210"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          +91 98765 43210
        </a>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="contact" className="py-20 px-4 bg-background overflow-hidden">
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
            Get in Touch
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-primary mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-card p-8 rounded-3xl shadow-earth relative overflow-hidden"
              whileHover={{ boxShadow: "0 20px 40px hsl(9 54% 58% / 0.15)" }}
              transition={{ duration: 0.3 }}
            >
              {/* Decorative gradient */}
              <motion.div 
                className="absolute -top-10 -right-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <motion.h3 
                className="text-2xl font-semibold mb-6 text-foreground relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Contact Details
              </motion.h3>

              <motion.div 
                className="space-y-6 relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {contactItems.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-4"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <item.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <div>
                      <p className="font-medium text-foreground mb-1">{item.label}</p>
                      <div className="text-muted-foreground">{item.content}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                className="mt-8 pt-8 border-t border-border relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="font-medium text-foreground mb-4">Follow Us</p>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full rounded-xl"
                    asChild
                  >
                    <a
                      href="https://www.instagram.com/niva_therootedheaven"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Instagram className="w-5 h-5" />
                      @niva_therootedheaven
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div 
            className="h-[500px] rounded-3xl overflow-hidden shadow-earth"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ boxShadow: "0 20px 40px hsl(9 54% 58% / 0.15)" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.3384824!2d73.5876!3d24.7438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e59fa4d4b857%3A0x9d6e8c7e3b8f4d3a!2sNear%20Morwaniya%2C%20Udaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Niva Location Map"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
