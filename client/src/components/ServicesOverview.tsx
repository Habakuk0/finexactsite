import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, FileText, Settings } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    id: "bookkeeping",
    title: "Professional Bookkeeping",
    description: "Monthly bookkeeping, financial statements, bank reconciliations, payroll support, and tax-ready reports.",
    icon: Calculator,
    features: [
      "Monthly Financial Statements", 
      "Bank Reconciliations", 
      "Payroll Support", 
      "Tax-Ready Reports"
    ]
  },
  {
    id: "tax",
    title: "Tax Services",
    description: "VAT services, income tax filing, tax audit solutions, and comprehensive KRA compliance support.",
    icon: FileText,
    features: [
      "VAT Registration & Filing", 
      "Income Tax Services", 
      "Tax Audit Solutions", 
      "KRA Compliance"
    ]
  },
  {
    id: "software",
    title: "Accounting Software Solutions",
    description: "QuickBooks & Xero installation, chart of accounts setup, training, and ongoing support.",
    icon: Settings,
    features: [
      "QuickBooks & Xero Setup", 
      "Chart of Accounts Creation", 
      "Software Training", 
      "Data Migration"
    ]
  }
];

export default function ServicesOverview() {
  return (
    <section className="py-16 lg:py-28 geometric-bg relative overflow-hidden">
      {/* Background geometric elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-24 h-24 bg-blue-200/20 rotate-45 rounded-2xl"></div>
        <div className="absolute bottom-32 left-10 w-20 h-20 bg-amber-200/20 -rotate-45 rounded-lg"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive financial solutions designed to streamline your business operations 
            and ensure compliance with regulatory requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const colorClass = index % 2 === 0 ? 'blue' : 'amber';
            
            return (
              <Card 
                key={service.id} 
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full border-2 border-gray-100 bg-white"
                data-testid={`card-service-${service.id}`}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                    colorClass === 'blue' 
                      ? 'bg-blue-100 text-blue-600' 
                      : 'bg-amber-100 text-amber-600'
                  } shadow-lg`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl font-semibold mb-2 text-gray-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="text-sm text-gray-600 flex items-center"
                      >
                        <div className={`w-2 h-2 rounded-full mr-3 flex-shrink-0 ${
                          colorClass === 'blue' ? 'bg-blue-500' : 'bg-amber-500'
                        }`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    asChild 
                    variant="outline" 
                    className={`w-full ${
                      colorClass === 'blue' 
                        ? 'border-blue-500 text-blue-600 hover:bg-blue-50' 
                        : 'border-amber-500 text-amber-600 hover:bg-amber-50'
                    }`}
                    data-testid={`button-learn-more-${service.id}`}
                  >
                    <Link href="/services">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}