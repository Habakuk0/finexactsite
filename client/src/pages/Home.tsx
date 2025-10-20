"use client";
import React from "react";
import Navigation from "@/components/Navigation";
import KenyaMap from "@/components/KenyaMap";
import StatisticsSection from "@/components/StatisticsSection";
import ServicesOverview from "@/components/ServicesOverview";
import PayeCalculator from "@/components/PayeCalculator";
import Footer from "@/components/Footer";
import { resources } from "@/lib/resources";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

console.log("🏗️ Home.tsx build v2.4.0");

const getColorClasses = (index: number) => {
  const colors = [
    {
      bg: "bg-amber-500 group-hover:bg-amber-400",
      text: "text-amber-400 hover:text-amber-300",
      border: "hover:border-amber-400/30",
    },
    {
      bg: "bg-blue-600 group-hover:bg-blue-500",
      text: "text-blue-400 hover:text-blue-300",
      border: "hover:border-blue-400/30",
    },
    {
      bg: "bg-green-600 group-hover:bg-green-500",
      text: "text-green-400 hover:text-green-300",
      border: "hover:border-green-400/30",
    },
  ];
  return colors[index % colors.length];
};

const getIcon = (index: number) => {
  const icons = ["📋", "📅", "📊", "💡", "📄"];
  return icons[index % icons.length];
};

const getCategory = (resource: any) => {
  const title = resource.title?.toLowerCase?.() || "";
  if (title.includes("tax") || title.includes("kra")) return "Tax Updates";
  if (title.includes("calendar") || title.includes("deadline"))
    return "Compliance Guides";
  if (title.includes("template") || title.includes("download"))
    return "Business Templates";
  return "Financial Insights";
};

// 🗺️ Hero Section
function HeroSectionWithMap() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 opacity-95 mix-blend-multiply pointer-events-none">
        <KenyaMap />
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-blue-50/80 to-amber-50/70 z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_40%,rgba(255,215,120,0.3)_100%)] z-[11]"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Simplifying Accounting
            </h1>
            <p className="text-lg bg-white/70 p-6 rounded-2xl border border-gray-100 shadow-md">
              Professional bookkeeping, tax solutions, and accounting software
              services to keep your business financially organized and compliant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-amber-500 text-amber-600 hover:bg-amber-50 hover:border-amber-600 transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 🏠 Home Page
export default function Home() {
  const latestResources =
    resources
      ?.slice()
      .sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      )
      .slice(0, 3) || [];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSectionWithMap />
        <StatisticsSection />
        <ServicesOverview />

        {/* 💡 Latest Resources Section */}
        {latestResources.length > 0 && (
          <section className="py-16 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-4 text-center">
              <h2 className="text-4xl font-extrabold mb-10 bg-gradient-to-r from-amber-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
                Latest Resources
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {latestResources.map((r, i) => {
                  const c = getColorClasses(i);
                  const icon = getIcon(i);
                  const category = getCategory(r);
                  return (
                    <div
                      key={r.slug}
                      className={`rounded-xl p-6 bg-white/10 hover:bg-white/20 transition transform hover:scale-105 ${c.border} shadow-lg`}
                    >
                      <div
                        className={`w-12 h-12 ${c.bg} rounded-lg flex items-center justify-center mb-3 text-xl`}
                      >
                        {icon}
                      </div>
                      <span className="text-xs text-gray-300 bg-white/10 px-3 py-1 rounded-full mb-3 inline-block">
                        {category}
                      </span>
                      <h3 className="font-semibold text-lg mb-2 text-amber-300">
                        {r.title}
                      </h3>
                      <p className="text-sm text-gray-300 mb-4 line-clamp-2">
                        {r.description || "Read this article for valuable insights."}
                      </p>
                      <a
                        href={`/resources/${r.slug}`}
                        className={`${c.text} text-sm font-medium`}
                      >
                        Read More →
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* 💰 PAYE Section */}
        <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-amber-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
              Kenya PAYE Calculator 2025
            </h2>
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <PayeCalculator />
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  2025 PAYE Tax Rates
                </h3>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex justify-between bg-blue-50 px-4 py-2 rounded-lg">
                    <span>0 – 24,000</span> <span className="font-medium text-blue-700">10%</span>
                  </li>
                  <li className="flex justify-between bg-amber-50 px-4 py-2 rounded-lg">
                    <span>24,001 – 32,333</span> <span className="font-medium text-amber-700">25%</span>
                  </li>
                  <li className="flex justify-between bg-green-50 px-4 py-2 rounded-lg">
                    <span>32,334 – 500,000</span> <span className="font-medium text-green-700">30%</span>
                  </li>
                  <li className="flex justify-between bg-blue-100 px-4 py-2 rounded-lg">
                    <span>500,001 – 800,000</span> <span className="font-medium text-blue-800">32.5%</span>
                  </li>
                  <li className="flex justify-between bg-amber-100 px-4 py-2 rounded-lg">
                    <span>Over 800,000</span> <span className="font-medium text-amber-800">35%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
