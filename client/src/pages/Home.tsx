import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StatisticsSection from "@/components/StatisticsSection";
import ServicesOverview from "@/components/ServicesOverview";
import BenefitsSection from "@/components/BenefitsSection";
import PayeCalculator from "@/components/PayeCalculator";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <StatisticsSection />
        <ServicesOverview />
        <BenefitsSection />
        
        {/* PAYE Calculator Section - Moved after BenefitsSection */}
        <section id="paye-calculator" className="py-16 lg:py-24 bg-white relative overflow-hidden">
          {/* Background geometric elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-20 h-20 bg-blue-100/30 rotate-45 rounded-lg"></div>
            <div className="absolute bottom-10 left-10 w-16 h-16 bg-amber-100/30 -rotate-45 rounded"></div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Kenya <span className="text-blue-600">PAYE Calculator</span> 2025
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Calculate your net salary with updated 2025 NSSF rates and PAYE tax bands. 
                Get instant estimates for all statutory deductions.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Calculator */}
              <PayeCalculator />
              
              {/* Benefits/Explanation */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                  2025 PAYE Tax Rates
                </h3>
                
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg">
                  <table className="w-full text-sm">
                    <thead className="bg-gradient-to-r from-blue-50 to-amber-50">
                      <tr>
                        <th className="py-4 px-6 text-left font-semibold text-gray-700 border-b border-gray-200">
                          Monthly Taxable Income (KES)
                        </th>
                        <th className="py-4 px-6 text-right font-semibold text-gray-700 border-b border-gray-200">
                          Tax Rate
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-6 text-gray-600">0 – 24,000</td>
                        <td className="py-3 px-6 text-right font-mono text-red-600">10%</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-6 text-gray-600">24,001 – 32,333</td>
                        <td className="py-3 px-6 text-right font-mono text-red-600">25%</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-6 text-gray-600">32,334 – 500,000</td>
                        <td className="py-3 px-6 text-right font-mono text-red-600">30%</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-6 text-gray-600">500,001 – 800,000</td>
                        <td className="py-3 px-6 text-right font-mono text-red-600">32.5%</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-3 px-6 text-gray-600">Over 800,000</td>
                        <td className="py-3 px-6 text-right font-mono text-red-600">35%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-amber-50 p-6 rounded-2xl border border-blue-200">
                  <p className="text-sm text-blue-800">
                    <strong>Need detailed tax planning?</strong> Our experts stay updated with latest 
                    KRA regulations to optimize your tax position. 
                    <a href="/contact" className="text-blue-600 font-semibold hover:underline ml-1">
                      Get professional consultation →
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}