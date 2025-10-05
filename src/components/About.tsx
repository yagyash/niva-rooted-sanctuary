import { Home, Mountain, Users, Sparkles } from "lucide-react";

const About = () => {
  const features = [
    { icon: Home, text: "3 Spacious Bedrooms" },
    { icon: Mountain, text: "Stunning Mountain Views" },
    { icon: Users, text: "Open Courtyard & Terrace" },
    { icon: Sparkles, text: "Village-Inspired Interiors" },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Welcome to Niva
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nestled in the serene mountains near Morwaniya village, Udaipur, Niva is a tranquil escape 
            where Rajasthani heritage meets modern comfort. Our villa is a celebration of earthy architecture, 
            natural materials, and the timeless beauty of mountain living.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-2xl shadow-earth text-center hover:shadow-warm transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <p className="text-foreground font-medium">{feature.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-earth">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
            A Sanctuary of Peace
          </h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Niva – The Rooted Heaven is more than a homestay; it's a journey back to simplicity. 
              Every corner of our villa tells a story of tradition, crafted with local stone, wood, 
              and the warmth of Rajasthani hospitality.
            </p>
            <p>
              Wake up to breathtaking mountain vistas, unwind in our thoughtfully designed spaces, 
              and reconnect with nature in its purest form. Whether you seek solitude or a peaceful 
              retreat with loved ones, Niva offers an experience rooted in authenticity and tranquility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
