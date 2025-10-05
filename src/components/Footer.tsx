import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-serif font-bold">
            Niva – The Rooted Heaven
          </h3>
          <p className="text-background/80">
            Where the Earth Still Breathes
          </p>

          <div className="flex justify-center gap-4 pt-4">
            <a
              href="https://www.instagram.com/niva_therootedheaven"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>

          <div className="pt-8 border-t border-background/20">
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} Niva – The Rooted Heaven. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
