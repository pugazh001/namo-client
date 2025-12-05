
import React from "react";
import { Zap, Shield, Rocket, Heart, Settings, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance that delivers results at unprecedented speed"
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with 99.9% uptime guarantee"
  },
  {
    icon: Rocket,
    title: "Scalable Solutions",
    description: "Grow without limits with our adaptable infrastructure"
  },
  {
    icon: Heart,
    title: "User-Centric Design",
    description: "Intuitive interfaces designed with your users in mind"
  },
  {
    icon: Settings,
    title: "Customizable",
    description: "Tailor every aspect to match your unique business needs"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock assistance from our expert team"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Namodot IT Solutions?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine cutting-edge technology with human expertise to deliver solutions that truly make a difference
          </p>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group p-6 rounded-2xl hover:bg-gray-50 transition-all duration-200 hover:shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 gradient-bg rounded-xl mb-4 group-hover:scale-110 transition-transform duration-200">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
