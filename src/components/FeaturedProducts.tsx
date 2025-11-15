import { useState, useEffect, useRef } from "react";
import athleisureLifestyle from "@/assets/athleisure-lifestyle.jpg";
import productCollection from "@/assets/product-collection.jpg";
import workoutStyle from "@/assets/workout-style.jpg";
import streetAthleisure from "@/assets/street-athleisure.jpg";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FeaturedProducts = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  
  const categories = [
    {
      title: "Active Collection",
      description: "Performance wear that moves with you",
      image: workoutStyle,
      delay: 0
    },
    {
      title: "Street Style",
      description: "Casual comfort meets urban elegance",
      image: streetAthleisure,
      delay: 100
    },
    {
      title: "Essential Basics",
      description: "Timeless pieces for everyday wear",
      image: productCollection,
      delay: 200
    },
    {
      title: "Lifestyle Edit",
      description: "Curated looks for modern living",
      image: athleisureLifestyle,
      delay: 300
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover athleisure collections designed for your active lifestyle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-medium transition-all duration-500 cursor-pointer ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${category.delay}ms` }}
              onClick={() => navigate('/contact')}
            >
              <div className="aspect-[3/4] relative">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                <h3 className="font-heading text-2xl font-bold mb-2">
                  {category.title}
                </h3>
                <p className="text-sm opacity-90 mb-4">
                  {category.description}
                </p>
                <div className="flex items-center text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-accent">Shop Now</span>
                  <ArrowRight className="ml-2 h-4 w-4 text-accent" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
          <Button
            size="lg"
            className="gradient-gold hover:opacity-90 transition-smooth text-primary font-semibold shadow-gold hover:scale-105"
            onClick={() => navigate('/contact')}
          >
            View All Collections
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
