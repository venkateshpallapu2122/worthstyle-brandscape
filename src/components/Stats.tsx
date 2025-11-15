import { useEffect, useRef, useState } from "react";
import { Award, Globe, ShoppingBag, Users } from "lucide-react";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ partners: 0, eco: 0, countries: 0, certifications: 0 });
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

  // Animated counter effect
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const targets = { partners: 100, eco: 100, countries: 50, certifications: 2 };
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuad = (t: number) => t * (2 - t);
      const easedProgress = easeOutQuad(progress);

      setCounts({
        partners: Math.floor(targets.partners * easedProgress),
        eco: Math.floor(targets.eco * easedProgress),
        countries: Math.floor(targets.countries * easedProgress),
        certifications: Math.floor(targets.certifications * easedProgress),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [isVisible]);

  const stats = [
    {
      icon: Users,
      value: `${counts.partners}+`,
      label: "B2B Partners",
      color: "text-accent"
    },
    {
      icon: ShoppingBag,
      value: `${counts.eco}%`,
      label: "Eco-Certified Materials",
      color: "text-green-600"
    },
    {
      icon: Globe,
      value: `${counts.countries}+`,
      label: "Countries Served",
      color: "text-accent"
    },
    {
      icon: Award,
      value: `${counts.certifications}`,
      label: "Global Certifications",
      color: "text-green-600"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Certified Sustainable Excellence
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Our commitment to eco-friendly manufacturing has earned global certifications and B2B partnerships worldwide
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
                <div className="font-heading text-4xl font-bold mb-2 text-foreground">
                  {stat.value}
                </div>
                <div className="text-foreground/70 font-medium">
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
