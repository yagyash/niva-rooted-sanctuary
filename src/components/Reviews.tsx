import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Guest Reviews
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from those who have experienced the serenity of Niva
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <Card 
              key={index} 
              className="bg-card/80 backdrop-blur border-primary/10 hover:shadow-warm transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 fill-primary text-primary" 
                    />
                  ))}
                </div>
                
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
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground font-body">
            Want to share your experience?{" "}
            <a 
              href="https://www.instagram.com/niva_therootedheaven" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline transition-all"
            >
              Tag us on Instagram
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
