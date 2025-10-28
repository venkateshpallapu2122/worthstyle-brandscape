import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Clock } from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Fashion Designer",
      department: "Design",
      location: "Hyderabad, India",
      type: "Full-time",
      description: "Lead design initiatives and create innovative sustainable athleisure collections that define eco-conscious trends."
    },
    {
      title: "E-commerce Manager",
      department: "Digital",
      location: "Bangalore, India",
      type: "Full-time",
      description: "Drive online growth strategy and optimize B2B customer shopping experience."
    },
    {
      title: "Brand Marketing Specialist",
      department: "Marketing",
      location: "Mumbai, India",
      type: "Full-time",
      description: "Develop and execute marketing campaigns that elevate sustainable athleisure brand presence."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Hyderabad, India",
      type: "Full-time",
      description: "Define eco-friendly product strategy and work cross-functionally to deliver exceptional sustainable results."
    },
    {
      title: "Customer Experience Lead",
      department: "Customer Success",
      location: "Delhi, India",
      type: "Full-time",
      description: "Champion B2B customer satisfaction and build lasting partnerships with sustainable brands."
    },
    {
      title: "Supply Chain Analyst",
      department: "Operations",
      location: "Chennai, India",
      type: "Full-time",
      description: "Optimize eco-friendly supply chain operations and ensure seamless sustainable delivery."
    }
  ];

  const benefits = [
    "Competitive salary and equity",
    "Comprehensive health coverage",
    "Flexible work arrangements",
    "Professional development budget",
    "Generous PTO and holidays",
    "Team building events",
    "Wellness programs",
    "Employee discounts"
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
                Join Our Team
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8">
                Be part of a dynamic team that's shaping the future of fashion and lifestyle.
              </p>
              <Button
                size="lg"
                className="gradient-gold hover:opacity-90 transition-smooth text-primary font-semibold shadow-gold"
                onClick={() => document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Open Positions
              </Button>
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
                  Why Worthstyle?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Join a culture of innovation, collaboration, and growth
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-card rounded-xl p-8 shadow-soft">
                  <h3 className="font-heading text-xl font-semibold mb-4">
                    Innovation First
                  </h3>
                  <p className="text-muted-foreground">
                    Work on cutting-edge projects that push the boundaries of fashion technology and redefine industry standards.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-8 shadow-soft">
                  <h3 className="font-heading text-xl font-semibold mb-4">
                    Growth Opportunities
                  </h3>
                  <p className="text-muted-foreground">
                    Accelerate your career with mentorship programs, learning resources, and opportunities to take on new challenges.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-8 shadow-soft">
                  <h3 className="font-heading text-xl font-semibold mb-4">
                    Collaborative Environment
                  </h3>
                  <p className="text-muted-foreground">
                    Work with talented individuals from diverse backgrounds in a supportive and inclusive workplace.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-8 shadow-soft">
                  <h3 className="font-heading text-xl font-semibold mb-4">
                    Work-Life Balance
                  </h3>
                  <p className="text-muted-foreground">
                    Enjoy flexible schedules, remote work options, and a culture that values your wellbeing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
                  Benefits & Perks
                </h2>
                <p className="text-lg text-muted-foreground">
                  We invest in our team's success and wellbeing
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-card rounded-lg p-4 shadow-soft animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
                  Open Positions
                </h2>
                <p className="text-lg text-muted-foreground">
                  Find your next opportunity with Worthstyle
                </p>
              </div>

              <div className="space-y-6">
                {openPositions.map((position, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-smooth animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="font-heading text-2xl font-semibold mb-2">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-2">
                            <Briefcase size={16} />
                            <span>{position.department}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin size={16} />
                            <span>{position.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock size={16} />
                            <span>{position.type}</span>
                          </div>
                        </div>
                      </div>
                      <Button
                        className="gradient-gold hover:opacity-90 transition-smooth mt-4 lg:mt-0"
                        onClick={() => window.location.href = '/contact'}
                      >
                        Apply Now
                      </Button>
                    </div>
                    <p className="text-muted-foreground">
                      {position.description}
                    </p>
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

export default Careers;
