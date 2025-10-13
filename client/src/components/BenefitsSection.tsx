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
    <section className="py-16 lg:py-28 bg-gradient-to-br from-blue-50 to-amber-50 relative overflow-hidden">
      {/* Background geometric elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-200/20 rounded-full"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-amber-200/20 clip-triangle rotate-45"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-amber-500">Finexact Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference of working with dedicated professionals who prioritize 
            your business success and financial well-being.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            const colorClass = index % 2 === 0 ? 'blue' : 'amber';
            
            return (
              <Card 
                key={index} 
                className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-2 border-gray-100"
                data-testid={`card-benefit-${index}`}
              >
                <CardContent className="p-8">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center ${
                    colorClass === 'blue' 
                      ? 'bg-blue-100 text-blue-600' 
                      : 'bg-amber-100 text-amber-600'
                  } shadow-lg`}>
                    <IconComponent className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
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