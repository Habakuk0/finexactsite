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
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Core Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive financial solutions designed to streamline your business operations 
            and ensure compliance with regulatory requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id} 
                className="hover-elevate transition-all duration-300 h-full"
                data-testid={`card-service-${service.id}`}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li 
                        key={index} 
                        className="text-sm text-muted-foreground flex items-center"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full"
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