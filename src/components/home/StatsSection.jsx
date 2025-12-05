
import React from "react";
import { Users, Award, TrendingUp, Globe,ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
 
  {
    icon: Award,
    number: "99.9%",
    label: "Success Rate",
    description: "Proven track record of excellence"
  },
  {
    icon: TrendingUp,
    number: "500%",
    label: "Average Growth",
    description: "Business improvement achieved"
  },
  {
    icon: Globe,
    number: "5+",
    label: "Countries",
    description: "Global presence and reach"
  },
  {
  icon: ShieldCheck,
  number: "24/7",
  label: "Support",
  description: "Dedicated customer assistance"
}

];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function StatsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Numbers That Speak for Themselves
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our commitment to excellence is reflected in the results we deliver
          </p>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 gradient-bg rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-200">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
              <div className="text-gray-600">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
