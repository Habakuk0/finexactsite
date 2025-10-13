import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, FileText, Settings, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    id: "bookkeeping",
    title: "Professional Bookkeeping",
    description: "Comprehensive monthly bookkeeping services to keep your financial records accurate and up-to-date.",
    icon: Calculator,
    features: [
      "Monthly bookkeeping and financial statements",
      "Bank reconciliations and account management", 
      "Payroll support and processing",
      "Tax-ready reports and documentation",
      "Cash flow monitoring and analysis",
      "Expense tracking and categorization"
    ]
  },
  {
    id: "tax",
    title: "Tax Services",
    description: "Complete tax solutions including VAT services, income tax filing, and audit support.",
    icon: FileText,
    features: [
      "VAT registration, filing, and compliance",
      "Corporate and individual income tax filing",
      "Tax audit solutions and KRA representation",
      "Tax planning and optimization strategies",
      "Compliance monitoring and reporting",
      "Tax dispute resolution support"
    ]
  },
  {
    id: "software",
    title: "Accounting Software Solutions",
    description: "Expert setup and support for QuickBooks, Xero, and other accounting software platforms.",
    icon: Settings,
    features: [
      "QuickBooks and Xero installation and setup",
      "Chart of accounts creation and customization",
      "Data migration from existing systems",
      "Software training and user support",
      "System troubleshooting and maintenance",
      "Integration with banking and payment systems"
    ]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Header Section with Geometric Theme */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-amber-50 relative overflow-hidden">
          {/* Background geometric elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-100/40 to-transparent"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-amber-200/30 clip-triangle rotate-45"></div>
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-200/30 clip-triangle -rotate-45"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial services designed to help your business succeed. 
              From bookkeeping to tax compliance, we've got you covered.
            </p>
          </div>
        </section>

        {/* Services Detail Section - Centered Layout with Geometric Theme */}
        <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
          {/* Background geometric elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-16 h-16 bg-blue-100/30 rotate-45 rounded-lg"></div>
            <div className="absolute bottom-32 right-20 w-12 h-12 bg-amber-100/30 -rotate-12 rounded"></div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div key={service.id} className="text-center">
                    {/* Service Header */}
                    <div className="mb-12">
                      <div className="flex justify-center mb-6">
                        <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${
                          isEven ? 'bg-blue-100 text-blue-600' : 'bg-amber-100 text-amber-600'
                        } shadow-lg`}>
                          <IconComponent className="w-10 h-10" />
                        </div>
                      </div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        {service.title}
                      </h2>
                      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        {service.description}
                      </p>
                    </div>

                    {/* Service Card - Centered with Geometric Accents */}
                    <div className="max-w-4xl mx-auto">
                      <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-blue-200 cursor-pointer bg-gradient-to-br from-white to-gray-50">
                        <CardHeader className="text-center pb-6">
                          <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors duration-300">
                            Service Features
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="mb-8">
                            <ul className="grid md:grid-cols-2 gap-6 text-left">
                              {service.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start group-hover:translate-x-1 transition-transform duration-300">
                                  <CheckCircle className={`w-6 h-6 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 ${
                                    isEven ? 'text-blue-600' : 'text-amber-500'
                                  }`} />
                                  <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300 text-lg">
                                    {feature}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {/* Enquire Now Button */}
                          <Button 
                            asChild 
                            size="lg" 
                            className={`group/btn transition-all duration-300 transform hover:scale-105 ${
                              isEven ? 'bg-blue-600 hover:bg-blue-700' : 'bg-amber-500 hover:bg-amber-600'
                            }`}
                            data-testid={`button-enquire-${service.id}`}
                          >
                            <Link href="/contact" className="flex items-center justify-center">
                              Enquire Now
                              <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section with Geometric Theme */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-amber-50 relative overflow-hidden">
          {/* Background geometric elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-24 h-24 bg-blue-200/20 rotate-45 rounded-2xl"></div>
            <div className="absolute bottom-10 left-10 w-20 h-20 bg-amber-200/20 -rotate-45 rounded-lg"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact us today for a free consultation and discover how our services 
              can transform your business financial management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="group/consult transition-all duration-300 transform hover:scale-105 bg-blue-600 hover:bg-blue-700"
                data-testid="button-services-consultation"
              >
                <Link href="/contact" className="flex items-center">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/consult:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="group/about transition-all duration-300 transform hover:scale-105 border-amber-500 text-amber-600 hover:bg-amber-50"
                data-testid="button-services-about"
              >
                <Link href="/about" className="flex items-center">
                  Learn About Us
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/about:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}