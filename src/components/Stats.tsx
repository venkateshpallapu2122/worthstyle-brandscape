import { useEffect, useRef, useState } from "react";
import { Award, Globe, ShoppingBag, Users } from "lucide-react";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: Users,
      value: "500K+",
      label: "Happy Customers",
      color: "text-accent"
    },
    {
      icon: ShoppingBag,
      value: "1M+",
      label: "Products Sold",
      color: "text-accent"
    },
    {
      icon: Globe,
      value: "50+",
      label: "Countries Served",
      color: "text-accent"
    },
    {
      icon: Award,
      value: "25+",
      label: "Industry Awards",
      color: "text-accent"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Trusted by Active Lifestyles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our commitment to quality athleisure has made us the preferred choice for modern, active individuals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`bg-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-all duration-500 text-center ${
                  isVisible ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                  <Icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className="font-heading text-4xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
