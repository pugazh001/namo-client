import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

import { Card, CardContent } from "../components/ui/card";
//import { SendEmail } from "@/integrations/Core";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

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
      duration: 0.6,
    },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email via server
      const response = await fetch('https://namo-server.onrender.com/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });

        // Reset submitted state after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert('Failed to send message. Please try again.');
    }

    setIsSubmitting(false);
  };

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
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
          >
            Ready to transform your business? Let's discuss how we can help you achieve your goals.
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Let's Start a Conversation
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We'd love to hear about your project and discuss how we can help bring your vision to life.
              </p>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="space-y-6"
              >
                {[
                  {
                    icon: MapPin,
                    title: "Office Address",
                    content: [
                      "NAMODOT, UKT Malai",
                      "No. 4/167 I, 18th Cross, Shanmuga Nagar",
                      "Sri Kailash Santhanam Garden",
                      "Trichy, Tamil Nadu"
                    ]
                  },
                  {
                    icon: Phone,
                    title: "Phone Number",
                    content: ["+91 97915 57317"]
                  },
                  {
                    icon: Mail,
                    title: "Email Address",
                    content: ["namodot01@gmail.com"]
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    content: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"]
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    className="flex items-start"
                  >
                    <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <div className="text-gray-600">
                        {item.content.map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="shadow-xl rounded-2xl border border-gray-100 overflow-hidden bg-white">
                <CardContent className="p-6 sm:p-8">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="text-center py-8"
                    >
                      <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                        <Mail className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 font-brand">Message Sent!</h3>
                      <p className="text-gray-600">
                        Thank you for reaching out. We'll get back to you within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6 font-brand">Send us a Message</h3>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 }}
                          className="flex flex-col space-y-1.5"
                        >
                          <label className="block text-sm font-semibold text-gray-700">Name *</label>
                          <Input
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            placeholder="Your full name"
                            required
                          />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 }}
                          className="flex flex-col space-y-1.5"
                        >
                          <label className="block text-sm font-semibold text-gray-700">Email *</label>
                          <Input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            placeholder="your@email.com"
                            required
                          />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 }}
                          className="flex flex-col space-y-1.5"
                        >
                          <label className="block text-sm font-semibold text-gray-700">Message *</label>
                          <Textarea
                            value={formData.message}
                            onChange={(e) => handleInputChange("message", e.target.value)}
                            placeholder="Tell us about your project..."
                            rows={5}
                            required
                          />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 }}
                          className="pt-2"
                        >
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full gradient-bg hover:opacity-95 text-white py-3.5 px-6 rounded-xl text-base font-semibold transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-[1.02] cursor-pointer disabled:opacity-50"
                          >
                            {isSubmitting ? "Sending..." : "Send Message"}
                          </Button>
                        </motion.div>
                      </form>
                    </>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary depending on complexity and scope. Simple websites typically take 2-4 weeks, while complex applications can take 3-6 months. We'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do you provide ongoing support and maintenance?",
                answer: "Yes! We offer comprehensive support and maintenance packages to ensure your solution continues to perform optimally. This includes updates, security patches, and technical support."
              },
              {
                question: "What is your development process?",
                answer: "We follow a proven 4-step process: Discovery (understanding your needs), Strategy (planning the solution), Development (building with precision), and Launch (delivering exceptional results)."
              },
              {
                question: "Can you work with our existing systems?",
                answer: "Absolutely! We specialize in integrating with existing systems and can work with virtually any technology stack. We'll assess your current setup and recommend the best integration approach."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className="bg-white rounded-xl p-6 shadow-sm transition-all duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}