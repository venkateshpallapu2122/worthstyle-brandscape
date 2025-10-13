import { Leaf, Award, Recycle, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Sustainability = () => {
  const materials = [
    "100% Cotton",
    "Cotton Fleece (Premium Grade)",
    "Organic Cotton",
    "Organic Hemp",
    "Organic Bamboo",
    "TENCEL™ Lyocell"
  ];

  const certifications = [
    {
      icon: Award,
      title: "OEKO-TEX® STANDARD 100",
      description: "All fabrics tested for harmful substances and certified safe for skin contact"
    },
    {
      icon: Leaf,
      title: "GOTS Certified",
      description: "Global Organic Textile Standard ensuring organic production and ethical labor practices"
    }
  ];

  const commitments = [
    {
      icon: Recycle,
      title: "Sustainable Sourcing",
      description: "Ethically sourced raw materials with minimal environmental impact"
    },
    {
      icon: Heart,
      title: "Slow Fashion",
      description: "Durable construction supporting longevity and reducing waste"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-4">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="eco-badge">Our Commitment to Planet Earth</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Sustainability Woven Into Every Fiber
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At Worthstyle, sustainability isn't just a buzzword—it's the foundation of everything we create. 
            We're committed to crafting premium athleisure using certified, eco-conscious materials that protect both you and the planet.
          </p>
        </div>

        {/* Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <Card key={index} className="border-2 border-green-200 shadow-eco animate-scale-in hover:shadow-xl transition-smooth">
              <CardContent className="p-8">
                <cert.icon className="h-16 w-16 text-green-600 mb-4" />
                <h3 className="font-heading text-2xl font-bold mb-3">{cert.title}</h3>
                <p className="text-muted-foreground">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Eco-Friendly Materials */}
        <div className="bg-card rounded-2xl p-8 sm:p-12 shadow-medium mb-16 animate-fade-in">
          <h3 className="font-heading text-2xl font-bold mb-6 text-center">
            Eco-Friendly Materials We Use
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {materials.map((material, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg bg-green-50 border border-green-200 hover:border-green-400 transition-smooth"
              >
                <Leaf className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="font-medium text-sm">{material}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sustainability Commitments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {commitments.map((commitment, index) => (
            <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth animate-fade-in">
              <CardContent className="p-8">
                <commitment.icon className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="font-heading text-xl font-bold mb-3">{commitment.title}</h3>
                <p className="text-muted-foreground">{commitment.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-gradient-eco rounded-2xl p-12 text-white text-center">
          <h3 className="font-heading text-3xl font-bold mb-8">Our Environmental Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-lg opacity-90">Eco-Certified Materials</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Zero</div>
              <div className="text-lg opacity-90">Harmful Chemicals</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Minimal</div>
              <div className="text-lg opacity-90">Carbon Footprint</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
