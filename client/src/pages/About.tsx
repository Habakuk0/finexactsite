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
        <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-amber-50 relative overflow-hidden">
          {/* Background geometric elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-100/40 to-transparent"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-amber-200/30 clip-triangle rotate-45"></div>
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-200/30 clip-triangle -rotate-45"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Who We Are
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner in financial management, tax compliance, and accounting solutions.
            </p>
          </div>
        </section>

        {/* Company Description with Creative Layout */}
        <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
          {/* Floating geometric elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-10 w-8 h-8 bg-blue-100/50 rotate-45 rounded"></div>
            <div className="absolute bottom-1/3 right-20 w-6 h-6 bg-amber-100/50 -rotate-12 rounded"></div>
            <div className="absolute top-10 right-1/4 w-4 h-4 bg-blue-200/30 rotate-45"></div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Creative visual element */}
              <div className="relative">
                <div className="relative w-full max-w-md mx-auto">
                  {/* Abstract geometric composition */}
                  <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-100 to-amber-100 rounded-3xl rotate-12 shadow-2xl flex items-center justify-center">
                    <div className="w-48 h-48 bg-white/80 rounded-2xl -rotate-12 shadow-inner flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-amber-500 rounded-2xl flex items-center justify-center">
                          <Award className="w-8 h-8 text-white" />
                        </div>
                        <span className="text-lg font-bold text-gray-900">Since 2018</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating elements around the main shape */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-200/40 rounded-full"></div>
                  <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-amber-200/30 rounded-full"></div>
                  <div className="absolute top-1/2 -right-8 w-10 h-10 bg-blue-100/50 rotate-45"></div>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Your Financial Success Partners
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p className="text-lg leading-relaxed">
                    Finexact Solutions provides professional bookkeeping, tax services, and customized 
                    accounting software solutions to help businesses stay financially organized, compliant, and efficient.
                  </p>
                  <p className="text-lg leading-relaxed">
                    We understand that managing your business finances can be complex and time-consuming. 
                    That's why we offer comprehensive financial services designed to streamline your 
                    accounting processes and ensure regulatory compliance.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Our team of certified professionals brings years of experience in accounting, tax 
                    preparation, and financial management to support your business growth and success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Core Values Section */}
        <section className="py-16 lg:py-28 bg-gradient-to-br from-blue-50 to-amber-50 relative overflow-hidden">
          {/* Background geometric elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/20 rotate-45 rounded-lg"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 bg-amber-200/20 -rotate-45 rounded"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The interconnected principles that guide everything we do
              </p>
            </div>

            {/* Circular Values Layout */}
            <div className="relative flex items-center justify-center min-h-[600px] lg:min-h-[500px]">
              {/* Central connecting element */}
              <div className="absolute w-40 h-40 bg-gradient-to-br from-blue-600 to-amber-500 rounded-full flex items-center justify-center shadow-2xl z-10">
                <div className="text-center">
                  <div className="w-8 h-8 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-bold text-sm block">Excellence</span>
                  <span className="text-white/80 text-xs block">At Our Core</span>
                </div>
              </div>
              
              {/* Value cards arranged in a perfect circle */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  const angle = (index * 90) * (Math.PI / 180); // 4 items at 90° intervals
                  const radius = 140; // Distance from center
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <div
                      key={index}
                      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 hover:scale-110 hover:z-20"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      }}
                    >
                      <Card className="w-64 text-center bg-white/95 backdrop-blur-sm border-2 border-white/80 shadow-2xl hover:shadow-3xl transition-all duration-300">
                        <CardContent className="p-6">
                          <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                            index % 2 === 0 ? 'bg-blue-100 text-blue-600' : 'bg-amber-100 text-amber-600'
                          } shadow-lg transition-colors duration-300`}>
                            <IconComponent className="w-8 h-8" />
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-3">
                            {value.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {value.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
                
                {/* Connecting curved lines between values */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" className="fill-blue-400/40" />
                    </marker>
                  </defs>
                  
                  {/* Curved connecting lines */}
                  {values.map((_, index) => {
                    const nextIndex = (index + 1) % values.length;
                    const angle1 = (index * 90) * (Math.PI / 180);
                    const angle2 = (nextIndex * 90) * (Math.PI / 180);
                    
                    // Calculate control points for smooth curves
                    const radius = 140;
                    const x1 = Math.cos(angle1) * radius + 192;
                    const y1 = Math.sin(angle1) * radius + 192;
                    const x2 = Math.cos(angle2) * radius + 192;
                    const y2 = Math.sin(angle2) * radius + 192;
                    
                    // Control point for bezier curve (further out for smoother curve)
                    const controlRadius = radius * 1.2;
                    const controlAngle = (angle1 + angle2) / 2;
                    const cx = Math.cos(controlAngle) * controlRadius + 192;
                    const cy = Math.sin(controlAngle) * controlRadius + 192;
                    
                    return (
                      <path
                        key={index}
                        d={`M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`}
                        fill="none"
                        stroke="url(#valueGradient)"
                        strokeWidth="2"
                        strokeDasharray="5,3"
                        markerEnd="url(#arrowhead)"
                        className="opacity-60"
                      />
                    );
                  })}
                  
                  {/* Gradient for the connecting lines */}
                  <defs>
                    <linearGradient id="valueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Bottom connecting element */}
            <div className="mt-16 text-center">
              <div className="inline-flex items-center justify-center space-x-6 bg-white/60 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-white/40">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Accuracy</span>
                </div>
                <div className="text-gray-400">→</div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse" style={{animationDelay: '0.1s'}}></div>
                  <span className="text-sm font-medium text-gray-700">Reliability</span>
                </div>
                <div className="text-gray-400">→</div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <span className="text-sm font-medium text-gray-700">Expertise</span>
                </div>
                <div className="text-gray-400">→</div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                  <span className="text-sm font-medium text-gray-700">Client Focus</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section with Creative Layout */}
        <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-amber-500 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-300 rounded-full"></div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                What We Do
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: CheckCircle,
                  title: "Bookkeeping",
                  description: "Monthly financial statements, reconciliations, and comprehensive record keeping",
                  color: "blue"
                },
                {
                  icon: Target,
                  title: "Tax Services",
                  description: "VAT registration, income tax filing, and comprehensive tax compliance",
                  color: "amber"
                },
                {
                  icon: Award,
                  title: "Software Setup",
                  description: "QuickBooks & Xero installation, training, and ongoing support",
                  color: "blue"
                }
              ].map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="group text-center">
                    <div className={`relative mb-8 transition-all duration-500 group-hover:scale-110 ${
                      service.color === 'blue' ? 'text-blue-600' : 'text-amber-600'
                    }`}>
                      {/* Floating icon with background */}
                      <div className={`w-20 h-20 mx-auto rounded-2xl flex items-center justify-center ${
                        service.color === 'blue' 
                          ? 'bg-blue-100 group-hover:bg-blue-200' 
                          : 'bg-amber-100 group-hover:bg-amber-200'
                      } shadow-lg transition-colors duration-300`}>
                        <IconComponent className="w-10 h-10" />
                      </div>
                      
                      {/* Decorative elements */}
                      <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full ${
                        service.color === 'blue' ? 'bg-blue-200' : 'bg-amber-200'
                      } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      <div className={`absolute -bottom-2 -left-2 w-4 h-4 rounded-full ${
                        service.color === 'blue' ? 'bg-blue-300' : 'bg-amber-300'
                      } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:scale-105 transition-transform duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-amber-50 relative overflow-hidden">
          {/* Background geometric elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-24 h-24 bg-blue-200/20 rotate-45 rounded-2xl"></div>
            <div className="absolute bottom-10 left-10 w-20 h-20 bg-amber-200/20 -rotate-45 rounded-lg"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how Finexact Solutions can help streamline your business finances 
              and ensure compliance with all regulatory requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700" data-testid="button-about-contact">
                <Link href="/contact">Contact Us Today</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-amber-500 text-amber-600 hover:bg-amber-50" data-testid="button-about-services">
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