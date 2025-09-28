import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Zap, Shield } from "lucide-react";

const benefits = [
  {
    icon: CheckCircle,
    title: "Reliable & Accurate",
    description: "Precision-driven accounting services with meticulous attention to detail and accuracy."
  },
  {
    icon: Users,
    title: "Certified Professionals",
    description: "Our team consists of qualified accountants and tax professionals with extensive experience."
  },
  {
    icon: Zap,
    title: "Customized Solutions",
    description: "Tailored accounting solutions designed to meet your specific business needs and goals."
  },
  {
    icon: Shield,
    title: "Compliance Focused",
    description: "Stay compliant with KRA regulations and tax requirements with our expert guidance."
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Choose Finexact Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the difference of working with dedicated professionals who prioritize 
            your business success and financial well-being.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card 
                key={index} 
                className="text-center hover-elevate transition-all duration-300"
                data-testid={`card-benefit-${index}`}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}