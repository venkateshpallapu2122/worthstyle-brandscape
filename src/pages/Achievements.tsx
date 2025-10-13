import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, TrendingUp, Users, Star } from "lucide-react";

const Achievements = () => {
  const awards = [
    {
      title: "OEKO-TEX® STANDARD 100",
      organization: "OEKO-TEX International",
      year: "2018",
      description: "All fabrics tested for harmful substances and certified safe for human skin contact"
    },
    {
      title: "GOTS Certification",
      organization: "Global Organic Textile Standard",
      year: "2020",
      description: "Certified organic production, ethical labor practices, and environmentally responsible manufacturing"
    },
    {
      title: "Sustainable B2B Partner Award",
      organization: "Green Fashion Council",
      year: "2023",
      description: "Leading B2B manufacturer in sustainable and ethical athleisure practices"
    },
    {
      title: "Eco-Innovation Excellence",
      organization: "Sustainable Textile Alliance",
      year: "2023",
      description: "Pioneering use of organic cotton, bamboo, hemp & TENCEL™ in athleisure"
    },
    {
      title: "Zero Harmful Chemicals",
      organization: "Environmental Safety Board",
      year: "2022",
      description: "100% elimination of harmful substances in production process"
    },
    {
      title: "Ethical Manufacturing Award",
      organization: "Fair Trade Federation",
      year: "2022",
      description: "Recognized for ethical labor practices and fair wage standards"
    }
  ];

  const achievements = [
    {
      icon: Users,
      title: "100+ B2B Partners",
      description: "Building lasting partnerships with sustainable businesses worldwide"
    },
    {
      icon: TrendingUp,
      title: "100% Eco-Certified",
      description: "All materials OEKO-TEX® & GOTS certified for sustainability"
    },
    {
      icon: Star,
      title: "Zero Harmful Chemicals",
      description: "Maintaining exceptional safety and environmental standards"
    },
    {
      icon: Award,
      title: "2 Global Certifications",
      description: "Recognition from leading environmental and textile organizations"
    }
  ];

  const partners = [
    "OEKO-TEX International",
    "Global Organic Textile",
    "Sustainable Alliance",
    "Fair Trade Federation",
    "Green Fashion Council",
    "Eco Textile Network"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center text-primary-foreground animate-fade-in-up">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Certifications & Impact
              </h1>
              <p className="text-lg sm:text-xl opacity-90">
                Our commitment to sustainable excellence recognized by global certification bodies
              </p>
            </div>
          </div>
        </section>

        {/* Key Achievements */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
                Sustainability Milestones
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Metrics that showcase our environmental commitment and impact
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={index}
                    className="bg-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-smooth text-center animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold mb-3">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
                Certifications & Recognition
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Certified by leading global organizations in sustainability and textiles
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-8 shadow-soft hover:shadow-gold transition-smooth animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                    <Award className="h-8 w-8 text-accent" />
                  </div>
                  <div className="text-sm text-accent font-semibold mb-2">
                    {award.year}
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-2">
                    {award.title}
                  </h3>
                  <div className="text-sm text-muted-foreground mb-3">
                    {award.organization}
                  </div>
                  <p className="text-muted-foreground">
                    {award.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
                Certification Partners
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Collaborating with global leaders in sustainable textile standards
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-6 shadow-soft hover:shadow-medium transition-smooth flex items-center justify-center text-center animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="font-heading text-sm font-semibold text-muted-foreground">
                    {partner}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Achievements;
