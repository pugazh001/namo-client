import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { Button } from "../ui/button";
import { ChevronRight, Terminal, Cpu, Database, Sparkles, Activity, Cloud, Server } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative pt-2 pb-16 lg:pt-4 lg:pb-24 overflow-hidden">
      {/* 
        EDUCATIONAL NOTE FOR STUDENTS (Hero Section Spacing):
        By reducing the top padding (`pt-2` / `lg:pt-4` instead of a full `py-20`) we pull the main hero heading 
        upwards closer to the sticky navigation bar, removing awkward blank spaces.
        In MUI, similar spacing is set via `<Box py={{ xs: 10, lg: 16 }} pt={{ xs: 1, lg: 2 }} />`.
      */}
      <div className="absolute inset-0 gradient-bg opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content - Top to Bottom Animation */}
          {/* EDUCATIONAL NOTE: Top-to-bottom entrance animation using Framer Motion (initial y: -50 -> animate y: 0) */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
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

          {/* Hero Visual - Premium Custom Dashboard & Code UI */}
          {/* EDUCATIONAL NOTE ON RESPONSIVE FLOATING BADGES:
              Using breakpoint utility classes like `top-2 sm:-top-5 right-2 sm:-right-3` ensures float badges stay
              safely inside screen viewports on small mobile screens, avoiding horizontal scrollbars.
              In MUI, this is written as: `<Box sx={{ top: { xs: 8, sm: -20 }, right: { xs: 8, sm: -12 } }} />`
          */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative flex items-center justify-center w-full max-w-[450px] lg:max-w-none mx-auto min-h-[380px] p-2 sm:p-6 select-none"
          >
            {/* Background blur decorative blobs */}
            <div className="absolute top-10 right-10 w-44 h-44 rounded-full bg-blue-300/30 blur-2xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-44 h-44 rounded-full bg-red-300/20 blur-2xl animate-pulse delay-1000"></div>

            {/* Main Editor Console Window */}
            <div className="relative w-full max-w-[420px] sm:max-w-[450px] bg-slate-900/95 rounded-2xl shadow-2xl border border-slate-800 p-4 sm:p-5 overflow-hidden font-mono text-xs sm:text-sm leading-relaxed text-slate-300">
              {/* Window Controls Bar */}
              <div className="flex items-center justify-between pb-3 sm:pb-4 mb-3 sm:mb-4 border-b border-slate-800">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  namodot-app.js
                </div>
                <div className="w-12"></div>
              </div>

              {/* Code Blocks */}
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex">
                  <span className="text-slate-600 mr-3 select-none w-4 text-right">1</span>
                  <span><span className="text-blue-400">const</span> namodot = <span className="text-yellow-400">new</span> <span className="text-emerald-400">ITSolutions</span>();</span>
                </div>
                <div className="flex">
                  <span className="text-slate-600 mr-3 select-none w-4 text-right">2</span>
                  <span>namodot.<span className="text-purple-400">transform</span>(&#123;</span>
                </div>
                <div className="flex">
                  <span className="text-slate-600 mr-3 select-none w-4 text-right">3</span>
                  <span className="pl-3 sm:pl-4">cloud: <span className="text-orange-400">true</span>,</span>
                </div>
                <div className="flex">
                  <span className="text-slate-600 mr-3 select-none w-4 text-right">4</span>
                  <span className="pl-3 sm:pl-4">aiInnovation: <span className="text-orange-400">true</span>,</span>
                </div>
                <div className="flex">
                  <span className="text-slate-600 mr-3 select-none w-4 text-right">5</span>
                  <span className="pl-3 sm:pl-4">efficiency: <span className="text-emerald-300">"10x"</span></span>
                </div>
                <div className="flex">
                  <span className="text-slate-600 mr-3 select-none w-4 text-right">6</span>
                  <span>&#125;);</span>
                </div>
                <div className="flex items-center text-slate-500 mt-2 select-none border-t border-slate-800/85 pt-2.5">
                  <span className="text-slate-600 mr-3 w-4 text-right">7</span>
                  <span className="flex items-center gap-1.5 truncate">
                    <Database className="w-3.5 h-3.5 shrink-0 text-blue-400 animate-pulse" />
                    <span>Cloud database active...</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Component 1: Cloud System Status Card */}
            <motion.div
              initial={{ x: 20, y: 10 }}
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute top-0 sm:-top-5 right-1 sm:-right-2 bg-white/95 backdrop-blur-md rounded-xl border border-gray-100 shadow-lg p-2.5 sm:p-3.5 flex items-center gap-2.5 sm:gap-3"
            >
              <div className="p-1.5 sm:p-2 bg-blue-500/10 rounded-lg text-blue-600">
                <Cloud className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 animate-pulse" />
              </div>
              <div>
                <p className="text-[9px] sm:text-[10px] text-gray-400 font-bold uppercase tracking-wider">Cloud System</p>
                <p className="text-xs sm:text-sm font-extrabold text-blue-900">Ultra Fast & Secure</p>
              </div>
            </motion.div>

            {/* Floating Component 2: Realtime Operations Uptime */}
            <motion.div
              initial={{ x: -25, y: -20 }}
              animate={{ y: [-20, 0, -20] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-0 sm:-bottom-5 left-1 sm:-left-2 bg-white/95 backdrop-blur-md rounded-xl border border-gray-100 shadow-lg p-2.5 sm:p-3.5 flex items-center gap-2.5 sm:gap-3"
            >
              <div className="p-1.5 sm:p-2 bg-rose-500/10 rounded-lg text-rose-500">
                <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500 animate-pulse" />
              </div>
              <div>
                <p className="text-[9px] sm:text-[10px] text-gray-400 font-bold uppercase tracking-wider">Services</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span className="text-xs sm:text-sm font-semibold text-gray-800">99.9% Uptime</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Component 3: AI Driven Bubble */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: [0.9, 1.05, 0.9] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute bottom-12 sm:bottom-14 right-1 sm:-right-3 bg-white/95 backdrop-blur-md rounded-full border border-gray-100 shadow-md px-3 py-1 sm:px-3.5 sm:py-1.5 flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 fill-amber-400 animate-bounce" />
              <span className="text-[11px] sm:text-xs font-bold text-gray-700">AI Driven</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}