import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { Button } from "../ui/button";
import { ChevronRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Transform Your Business with{" "}
              <span className="gradient-text">Innovation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Namodot IT Solutions delivers cutting-edge solutions that drive growth,
              enhance efficiency, and unlock your company's full potential in today's digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to={createPageUrl("Contact")}>
                <Button className="gradient-bg hover:opacity-90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 hover:shadow-xl transform hover:scale-105">
                  Start Your Journey

                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "backOut" }}
            className="relative flex items-center justify-center"
          >
            <DotLottieReact
              src="https://lottie.host/0582012f-6258-4a45-b5db-5960514a066c/2DYe03QyMx.lottie"
              loop
              autoplay
              className="w-[500px] h-[500px] md:w-[1000px] md:h-[600px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}