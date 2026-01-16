import { Instagram } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-2xl font-serif font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Niva – The Rooted Heaven
          </motion.h3>
          <motion.p 
            className="text-background/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Where the Earth Still Breathes
          </motion.p>

          <motion.div 
            className="flex justify-center gap-4 pt-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://www.instagram.com/niva_therootedheaven"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors p-2 rounded-full bg-background/10"
              aria-label="Instagram"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Instagram size={24} />
            </motion.a>
          </motion.div>

          <motion.div 
            className="pt-8 border-t border-background/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} Niva – The Rooted Heaven. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
