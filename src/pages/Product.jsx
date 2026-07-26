
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

const products = [
  {
    name: "Namo CampusOne",
    category: "Education",
    description: "Namo CampusOne is an all-in-one ERP solution that digitalizes academic and administrative tasks. It improves efficiency, reduces manual work, and ensures smooth communication across the entire campus.",
    price: "",
    rating: 4.7,
    features: [
      
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
    popular: true
  },
  {
    name: "Namo School",
    category: "Education",
    description: "NamoSchool is a complete school management system that automates attendance, fees, exams, timetable, and student records. It helps teachers, parents, and administrators manage everything from one unified platform.",
    price: "",
    rating: 4.8,
    features: [
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600",
    popular: true
  },
 {
  name: "NamoLaundry",
  category: "Service",
  description: "A fast, affordable, and professional laundry service designed to save time while delivering premium garment care.",
  price: "Based on Service",
  rating: 4.9,
  features: [
    "Doorstep Pickup & Delivery",
    "Eco-Friendly Cleaning",
    "Express Service Available",
    "Premium Fabric Care"
  ],
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
  popular: false
},
{
  name: "Namo Healthcare",
  category: "Hospital",
  description: "A trusted healthcare ecosystem offering world-class medical care, advanced diagnostics, and expert treatment across specialties.",
  price: "Insurance & Plans Available",
  rating: 5.0,
  features: [
    "24/7 Emergency Care",
    "Expert Specialists",
    "Advanced Diagnostics",
    "Patient-First Care Model"
  ],
  image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600",
  popular: false
},
{
  name: "Namo HrSuite",
  category: "Service",
  description: "A complete HR and workforce management platform simplifying payroll, attendance, recruitment, and compliance for growing businesses.",
  price: "Custom Pricing",
  rating: 5.0,
  features: [
    "Payroll Automation",
    "Attendance & Shift Tracking",
    "Performance & Appraisal Tools",
    "Recruitment and Onboarding"
  ],
  image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600",
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
                whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                className="group bg-white rounded-3xl shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                {product.popular && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="gradient-bg text-white text-center py-2"
                  >
                    <Badge className="bg-white/20 text-white border-white/30">
                      Most Popular
                    </Badge>
                  </motion.div>
                )}
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <Badge variant="outline" className="mb-2">{product.category}</Badge>
                      <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold gradient-text">{product.price}</div>
                      <div className="flex items-center text-sm text-gray-600 mt-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        {product.rating} ({product.reviews} reviews)
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{product.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: featureIndex * 0.1 }}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link to={createPageUrl("Contact")} className="flex-1">
                      <Button className="w-full gradient-bg hover:opacity-90 text-white py-3 rounded-full font-semibold transition-all duration-200 hover:shadow-lg transform hover:scale-105">
                        Get Started
                      
                      </Button>
                    </Link>
                    <Button variant="outline" className="px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all duration-200 transform hover:scale-105">
                   
                    </Button>
                  </div>
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
