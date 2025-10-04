import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, TrendingUp, Users, Star } from "lucide-react";

const Achievements = () => {
  const awards = [
    {
      title: "Best Fashion Brand 2023",
      organization: "Global Fashion Awards",
      year: "2023",
      description: "Recognized for excellence in design and customer satisfaction"
    },
    {
      title: "Sustainability Leader",
      organization: "Green Fashion Council",
      year: "2023",
      description: "Leading the industry in sustainable and ethical practices"
    },
    {
      title: "Innovation Excellence Award",
      organization: "Tech Fashion Summit",
      year: "2022",
      description: "Pioneering technology integration in fashion retail"
    },
    {
      title: "Customer Choice Award",
      organization: "Fashion Retail Association",
      year: "2022",
      description: "Highest customer satisfaction rating in the industry"
    },
    {
      title: "E-commerce Excellence",
      organization: "Digital Commerce Awards",
      year: "2021",
      description: "Outstanding digital shopping experience and innovation"
    },
    {
      title: "Fastest Growing Brand",
      organization: "Business Fashion Magazine",
      year: "2021",
      description: "Exceptional growth and market expansion"
    }
  ];

  const achievements = [
    {
      icon: Users,
      title: "500K+ Happy Customers",
      description: "Building lasting relationships with fashion enthusiasts worldwide"
    },
    {
      icon: TrendingUp,
      title: "300% Revenue Growth",
      description: "Consistent year-over-year growth since inception"
    },
    {
      icon: Star,
      title: "4.9/5 Customer Rating",
      description: "Maintaining exceptional quality and service standards"
    },
    {
      icon: Award,
      title: "25+ Industry Awards",
      description: "Recognition from leading fashion and business organizations"
    }
  ];

  const partners = [
    "Vogue Magazine",
    "Fashion Week International",
    "StyleHub Inc.",
    "Luxe Collective",
    "Elite Stores",
    "Global Fashion Federation"
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
                Our Achievements
              </h1>
              <p className="text-lg sm:text-xl opacity-90">
                Celebrating milestones and recognition that reflect our commitment to excellence
              </p>
            </div>
          </div>
        </section>

        {/* Key Achievements */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
                Key Milestones
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Numbers that showcase our growth and impact
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
                Awards & Recognition
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Honored by leading organizations in fashion and business
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
                Trusted Partners
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Collaborating with industry leaders to deliver excellence
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
