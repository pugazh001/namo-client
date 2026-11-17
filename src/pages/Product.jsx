
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { 
  Zap, 
  Shield, 
  BarChart3, 
  Users,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";
import { motion } from "framer-motion";
import shipcartImg from "../assets/products/shipcart.jpg";
import campusoneImg from "../assets/products/campusone.jpg";
import schoolImg from "../assets/products/school.jpg";
import healthcareImg from "../assets/products/healthcare.jpg";
import hrsuiteImg from "../assets/products/hrsuite.jpg";

const products = [
  {
    name: "Namo Shipcart",
    category: "Export & Import",
    description: "An advanced export & import tracking and smart logistics platform. Track global shipments in real-time, automate customs clearance documentation, monitor container milestones, and streamline cross-border freight operations.",
    price: "Custom Pricing",
    rating: 4.9,
    reviews: 142,
    features: [
      "Real-Time Air & Ocean Cargo Tracking",
      "Automated Export-Import Customs Filings",
      "Container & Port Milestone Alerts",
      "Freight Cost & Route Optimization"
    ],
    image: shipcartImg,
    popular: true
  },
  {
    name: "Namo CampusOne",
    category: "Education",
    description: "Namo CampusOne is an all-in-one ERP solution that digitalizes academic and administrative tasks. It improves efficiency, reduces manual work, and ensures smooth communication across the entire campus.",
    price: "Custom Pricing",
    rating: 4.7,
    reviews: 98,
    features: [
      "Academic & Student Lifecycle Management",
      "Automated Fee Collection & Accounting",
      "Examinations & Digital Grade Books",
      "Faculty & Staff Portal with Payroll"
    ],
    image: campusoneImg,
    popular: true
  },
  {
    name: "Namo School",
    category: "Education",
    description: "NamoSchool is a complete school management system that automates attendance, fees, exams, timetable, and student records. It helps teachers, parents, and administrators manage everything from one unified platform.",
    price: "Custom Pricing",
    rating: 4.8,
    reviews: 114,
    features: [
      "Real-Time Attendance & SMS Alerts",
      "Timetable & Exam Scheduling Engine",
      "Parent-Teacher Communication App",
      "Student Performance Analytics"
    ],
    image: schoolImg,
    popular: false
  },
  {
    name: "Namo Healthcare",
    category: "Hospital",
    description: "A trusted healthcare ecosystem offering world-class medical care, advanced diagnostics, and expert treatment across specialties.",
    price: "Insurance & Plans Available",
    rating: 5.0,
    reviews: 86,
    features: [
      "24/7 Emergency Care",
      "Expert Specialists",
      "Advanced Diagnostics",
      "Patient-First Care Model"
    ],
    image: healthcareImg,
    popular: false
  },
  {
    name: "Namo HrSuite",
    category: "Service",
    description: "A complete HR and workforce management platform simplifying payroll, attendance, recruitment, and compliance for growing businesses.",
    price: "Custom Pricing",
    rating: 5.0,
    reviews: 79,
    features: [
      "Payroll Automation",
      "Attendance & Shift Tracking",
      "Performance & Appraisal Tools",
      "Recruitment and Onboarding"
    ],
    image: hrsuiteImg,
    popular: false
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
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Products() {
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
            Our Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
          >
            Innovative solutions designed to empower businesses and drive digital transformation
          </motion.p>
        </div>
      </motion.section>

      {/* Products Grid */}
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
              Choose the Right Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each product is crafted with precision to meet specific business needs and challenges
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.2)" }}
                className="group bg-white rounded-3xl shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Product Image Cover */}
                  <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-slate-100">
                    {product.image && (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    
                    {product.popular && (
                      <div className="absolute top-4 right-4">
                        <span className="gradient-bg text-white text-xs font-bold tracking-wide px-3.5 py-1.5 rounded-full shadow-lg">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="absolute bottom-3 left-4">
                      <Badge className="bg-white/95 text-gray-900 font-semibold shadow-sm backdrop-blur-sm border-0">
                        {product.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 font-brand">{product.name}</h3>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold gradient-text">{product.price}</div>
                        <div className="flex items-center text-sm text-gray-600 mt-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                          {product.rating} {product.reviews ? `(${product.reviews} reviews)` : ""}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6">{product.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mb-8">
                      {product.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: featureIndex * 0.1 }}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                  <Link to={createPageUrl("Contact")}>
                    <Button className="w-full gradient-bg hover:opacity-90 text-white py-3.5 rounded-full font-semibold transition-all duration-200 hover:shadow-lg transform hover:scale-[1.02] cursor-pointer">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Comparison */}
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
              Why Choose Our Products?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built with industry-leading standards and cutting-edge technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Lightning Performance",
                description: "Optimized for speed and efficiency with industry-leading performance metrics"
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-level security with SOC 2 compliance and advanced threat protection"
              },
              {
                icon: BarChart3,
                title: "Advanced Analytics",
                description: "Deep insights with AI-powered analytics and real-time data visualization"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 gradient-bg rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using our products to drive growth and innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Contact")}>
              <Button className="gradient-bg hover:opacity-90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 hover:shadow-xl transform hover:scale-105">
                Start Free Trial
           
              </Button>
            </Link>
            <Link to={createPageUrl("Services")}>
              <Button variant="outline" className="px-8 py-4 rounded-full text-lg font-semibold border-2 hover:bg-gray-50 transition-all duration-200 transform hover:scale-105">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
