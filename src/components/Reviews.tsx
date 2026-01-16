import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Priya Sharma",
    date: "March 2025",
    rating: 5,
    text: "An absolutely magical stay! The mountain views from the terrace are breathtaking. The earthy architecture and peaceful surroundings made it the perfect getaway from city life.",
    location: "Mumbai"
  },
  {
    name: "Rajesh & Meera",
    date: "February 2025",
    rating: 5,
    text: "Niva is truly where the earth still breathes. We loved the rustic charm, the open courtyard, and the warm hospitality. A hidden gem near Udaipur!",
    location: "Delhi"
  },
  {
    name: "Amit Patel",
    date: "January 2025",
    rating: 5,
    text: "Perfect blend of nature and comfort. The village-inspired interiors are beautiful, and waking up to mountain views was a dream. Highly recommend for anyone seeking tranquility.",
    location: "Ahmedabad"
  },
  {
    name: "Sarah & James",
    date: "December 2024",
    rating: 5,
    text: "We came all the way from London and Niva exceeded our expectations. The peaceful atmosphere, authentic Rajasthani experience, and stunning location made our trip unforgettable.",
    location: "London, UK"
  }
];

const Reviews = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 px-4 bg-secondary/20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="font-serif text-4xl md:text-5xl text-foreground mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Guest Reviews
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Hear from those who have experienced the serenity of Niva
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 20px 40px hsl(9 54% 58% / 0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <Card className="bg-card/80 backdrop-blur border-primary/10 h-full">
                <CardContent className="p-6">
                  <motion.div 
                    className="flex items-center gap-1 mb-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {[...Array(review.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Star className="w-5 h-5 fill-primary text-primary" />
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  <p className="text-foreground/90 mb-4 font-body leading-relaxed">
                    "{review.text}"
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-primary/10">
                    <div>
                      <p className="font-semibold text-foreground">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.location}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground font-body">
            Want to share your experience?{" "}
            <motion.a 
              href="https://www.instagram.com/niva_therootedheaven" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline transition-all inline-block"
              whileHover={{ scale: 1.05 }}
            >
              Tag us on Instagram
            </motion.a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
