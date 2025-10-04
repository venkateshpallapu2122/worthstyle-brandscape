import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Fitness Influencer",
      company: "@FitWithSarah",
      text: "Worthstyle athleisure is my go-to for everything - workouts, errands, meetings. The quality and style are unmatched. These pieces truly perform.",
      rating: 5
    },
    {
      name: "Michael Chen",
      position: "Yoga Studio Owner",
      company: "Urban Flow Yoga",
      text: "We exclusively stock Worthstyle for our retail section. The comfort, durability, and style resonate perfectly with our community's needs.",
      rating: 5
    },
    {
      name: "Emma Williams",
      position: "Corporate Wellness Director",
      company: "TechCorp Inc.",
      text: "Worthstyle perfectly bridges the gap between professional and active. Our team loves the versatility - office to gym seamlessly.",
      rating: 5
    },
    {
      name: "David Martinez",
      position: "Marathon Runner",
      company: "Elite Athletics",
      text: "Finally, athleisure that performs like activewear and looks like premium fashion. Worthstyle gets it right on both fronts.",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What Our Partners Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from industry leaders who trust Worthstyle for excellence
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-medium p-8 sm:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <Quote className="absolute top-8 left-8 h-16 w-16 text-accent/20" />

            {/* Testimonial Content */}
            <div className="relative z-10 animate-fade-in">
              <p className="text-xl sm:text-2xl text-foreground mb-8 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-heading text-xl font-semibold mb-1">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-muted-foreground">
                    {testimonials[currentIndex].position}
                  </div>
                  <div className="text-sm text-accent font-medium mt-1">
                    {testimonials[currentIndex].company}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevTestimonial}
                    className="hover:bg-accent hover:text-primary transition-smooth"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextTestimonial}
                    className="hover:bg-accent hover:text-primary transition-smooth"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-accent"
                    : "w-2 bg-accent/30 hover:bg-accent/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
