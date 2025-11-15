import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-athleisure-cotton.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Sustainable Eco-Friendly Athleisure Collection - OEKO-TEX & GOTS Certified"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="mb-4">
            <span className="eco-badge">🌱 OEKO-TEX® & GOTS Certified</span>
          </div>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Sustainable Athleisure
            <span className="block text-accent">
              For Conscious Living
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 max-w-2xl">
            Premium eco-friendly athleisure crafted from organic cotton, bamboo, hemp & TENCEL™. Performance meets planet-conscious design for B2B partners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="gradient-eco hover:opacity-90 transition-smooth text-white font-semibold shadow-eco"
              onClick={() => window.location.href = '/contact'}
            >
              Partner With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-smooth"
              onClick={() => window.location.href = '/about'}
            >
              Our Sustainability Story
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
