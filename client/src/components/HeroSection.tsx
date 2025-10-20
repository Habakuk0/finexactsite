"use client";
import { motion } from "framer-motion";
import KenyaMap from "@/components/KenyaMap";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Subtle Animated Map Background */}
      <KenyaMap />

      {/* Soft white gradient for clarity */}
      {/* Soft translucent overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/50 to-amber-50/40 z-10"></div>
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-blue-900 leading-tight">
              Simplifying Accounting Across Kenya
            </h1>
            <p className="text-lg text-gray-700 bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-md max-w-lg">
              Professional bookkeeping, tax solutions, and accounting software services
              to keep your business financially organized, compliant, and efficient.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group px-6 py-5 text-base font-semibold"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-amber-500 text-amber-600 hover:bg-amber-50 hover:border-amber-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-6 py-5 text-base font-semibold"
              >
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </motion.div>

          {/* Abstract Shape */}
          <motion.div
            className="relative h-[400px] flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <motion.div
              className="w-64 h-64"
              style={{
                clipPath: "polygon(20% 70%, 50% 20%, 70% 50%, 40% 80%)",
                backgroundColor: "#F59E0B",
              }}
              animate={{ rotate: [0, 10, 0, -10, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
