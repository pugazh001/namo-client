
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { Button } from "../components/ui/button";
import {
  Code,
  Smartphone,
  Cloud,
  BarChart3,
  Palette,
  Shield,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with cutting-edge technologies for optimal performance and user experience.",
    features: ["Responsive Design", "Modern Frameworks", "SEO Optimized", "Performance Focused"],
    price: ""
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that engage users and drive business growth.",
    features: ["iOS & Android", "Cross-Platform", "UI/UX Design", "App Store Optimization"],
    price: ""
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services for enhanced performance and security.",
    features: ["Cloud Migration", "Infrastructure Setup", "24/7 Monitoring", "Cost Optimization"],
    price: ""
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies that increase visibility and drive conversions.",
    features: ["SEO & SEM", "Social Media", "Content Marketing", "Analytics"],
    price: ""
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that create exceptional user experiences and brand recognition.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    price: ""
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your business from digital threats and vulnerabilities.",
    features: ["Security Audits", "Threat Assessment", "Data Protection", "Compliance"],
    price: ""
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-2 pb-16 lg:pt-4 lg:pb-24 gradient-bg"
      >
        {/* EDUCATIONAL NOTE: Custom top padding (pt-2 / lg:pt-4) removes the extra white space directly below the header. */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
          >
            Comprehensive solutions designed to accelerate your business growth and digital transformation
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to={createPageUrl("Contact")}>
              <Button className="bg-white text-blue-900 hover:bg-gray-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 hover:shadow-xl transform hover:scale-105">
                Get Started Today
               
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to completion, we provide end-to-end solutions tailored to your unique needs
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                className="group bg-white rounded-3xl p-8 shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 gradient-bg rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-200">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <span className="text-lg font-bold gradient-text">{service.price}</span>
                  <Link to={createPageUrl("Contact")}>
                    <Button variant="outline" className="hover-gradient hover:text-white transition-all duration-200 transform hover:scale-105">
                      Learn More
                     
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures success at every step
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your needs and goals" },
              { step: "02", title: "Strategy", description: "Creating a tailored solution plan" },
              { step: "03", title: "Development", description: "Building with precision and care" },
              { step: "04", title: "Launch", description: "Delivering results that exceed expectations" }
            ].map((phase, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-4 gradient-bg rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <span className="text-2xl font-bold text-white">{phase.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="py-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our comprehensive services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Contact")}>
              <Button className="gradient-bg hover:opacity-90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 hover:shadow-xl transform hover:scale-105">
                Start Your Project
               
              </Button>
            </Link>
            <Link to={createPageUrl("Products")}>
              <Button variant="outline" className="px-8 py-4 rounded-full text-lg font-semibold border-2 hover:bg-gray-50 transition-all duration-200 transform hover:scale-105">
                View Our Products
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
