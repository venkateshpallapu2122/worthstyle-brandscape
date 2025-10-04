import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";
import aboutImage from "@/assets/about-team.jpg";
import athleisureLifestyle from "@/assets/athleisure-lifestyle.jpg";

const About = () => {
  const values = [
    {
      title: "Innovation",
      description: "Constantly pushing boundaries to deliver cutting-edge fashion solutions"
    },
    {
      title: "Quality",
      description: "Uncompromising commitment to excellence in every product we create"
    },
    {
      title: "Sustainability",
      description: "Building a better future through responsible and ethical practices"
    },
    {
      title: "Customer First",
      description: "Your satisfaction and style aspirations drive everything we do"
    }
  ];

  const milestones = [
    { year: "2015", event: "Worthstyle Founded" },
    { year: "2017", event: "Reached 100K Customers" },
    { year: "2019", event: "Expanded to 25 Countries" },
    { year: "2021", event: "Launched Sustainability Initiative" },
    { year: "2023", event: "Awarded Best Fashion Brand" },
    { year: "2024", event: "1M+ Products Sold" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                {/* About Worthstyle */}
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Redefining athleisure excellence through innovation, performance, and an unwavering commitment to quality and style.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Founded in 2015, Worthstyle emerged from a simple yet powerful vision: to create an athleisure brand that seamlessly blends performance, style, and everyday comfort.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  What started as a small team passionate about active lifestyles has grown into a global athleisure brand serving customers in over 50 countries. Our journey has been marked by continuous innovation in fabric technology, unwavering commitment to quality, and a deep understanding of modern, active living.
                </p>
                <p className="text-lg text-muted-foreground">
                  Today, Worthstyle stands at the forefront of athleisure excellence, creating versatile pieces that transition effortlessly from workout to everyday life, setting new standards in the industry.
                </p>
              </div>
              <div className="animate-scale-in">
                <img
                  src={aboutImage}
                  alt="Our Team"
                  className="rounded-2xl shadow-medium w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide every decision we make
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-smooth animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle2 className="h-12 w-12 text-accent mb-4" />
                  <h3 className="font-heading text-xl font-semibold mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Key milestones that shaped Worthstyle
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-accent/30" />

                {/* Timeline items */}
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center mb-12 animate-fade-in ${
                      index % 2 === 0 ? "justify-start" : "justify-end"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div
                      className={`w-5/12 ${
                        index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                      }`}
                    >
                      <div className="bg-card rounded-lg p-6 shadow-soft hover:shadow-medium transition-smooth">
                        <div className="font-heading text-2xl font-bold text-accent mb-2">
                          {milestone.year}
                        </div>
                        <div className="text-lg">{milestone.event}</div>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
