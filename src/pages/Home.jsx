import { createPageUrl } from "../utils";

import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Star, Users, Award, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import HeroSection from "../components/home/HeroSection";
import StatsSection from "../components/home/StatsSection";
import FeaturesSection from "../components/home/FeaturesSection";
import TestimonialsSection from "../components/home/TestmonialsSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      {/* <TestimonialsSection /> */}

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="py-20 gradient-bg"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of companies that trust Namodot IT Solutions for their
            growth and success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Contact")}>
              <Button className="bg-white text-blue-900 hover:bg-gray-50 px-8 py-3 rounded-full font-semibold transition-all duration-200 hover:shadow-xl transform hover:scale-105">
                Get Started Today
                
              </Button>
            </Link>
          
          </div>
        </div>
      </motion.section>
    </div>
  );
}
