import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Award, Users } from "lucide-react";
import { Link } from "wouter";

const values = [
  {
    icon: CheckCircle,
    title: "Accuracy",
    description: "We maintain the highest standards of precision in all our financial services."
  },
  {
    icon: Target,
    title: "Reliability",
    description: "Consistent, dependable service you can count on for your business needs."
  },
  {
    icon: Award,
    title: "Expertise", 
    description: "Certified professionals with extensive experience in accounting and tax services."
  },
  {
    icon: Users,
    title: "Client Focus",
    description: "Personalized solutions tailored to meet your specific business requirements."
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Header Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About Finexact Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your trusted partner in financial management, tax compliance, and accounting solutions.
            </p>
          </div>
        </section>

        {/* Company Description */}
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Who We Are
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-xl leading-relaxed mb-6">
                  Finexact Solutions provides professional bookkeeping, tax services, and customized 
                  accounting software solutions to help businesses stay financially organized, compliant, and efficient.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  We understand that managing your business finances can be complex and time-consuming. 
                  That's why we offer comprehensive financial services designed to streamline your 
                  accounting processes, ensure regulatory compliance, and provide you with the insights 
                  needed to make informed business decisions.
                </p>
                <p className="text-lg leading-relaxed">
                  Our team of certified professionals brings years of experience in accounting, tax 
                  preparation, and financial management. We work closely with each client to understand 
                  their unique needs and provide tailored solutions that support their business growth and success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 lg:py-24 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide everything we do for our clients
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card 
                    key={index} 
                    className="text-center hover-elevate transition-all duration-300"
                    data-testid={`card-value-${index}`}
                  >
                    <CardContent className="p-6">
                      <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                What We Do
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Bookkeeping</h3>
                <p className="text-muted-foreground text-sm">
                  Monthly financial statements, reconciliations, and comprehensive record keeping
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Tax Services</h3>
                <p className="text-muted-foreground text-sm">
                  VAT registration, income tax filing, and comprehensive tax compliance
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Software Setup</h3>
                <p className="text-muted-foreground text-sm">
                  QuickBooks & Xero installation, training, and ongoing support
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how Finexact Solutions can help streamline your business finances 
              and ensure compliance with all regulatory requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" data-testid="button-about-contact">
                <Link href="/contact">Contact Us Today</Link>
              </Button>
              <Button asChild variant="outline" size="lg" data-testid="button-about-services">
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}