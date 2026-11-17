import React from "react";
import { Star, ExternalLink, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const clientReviews = [
  {
    name: "Gugan",
    role: "Managing Director",
    company: "Dartwing International Xpress",
    website: "https://dartwinginternationalxpress.com/",
    logo: "https://dartwinginternationalxpress.com/logo.png",
    project: "International Express Shipment Tracking",
    rating: 5,
    review:
      "Namodot developed our international express shipment tracking portal with absolute precision. Their multi-carrier API integrations and real-time dispatch telemetry cut our customer support queries by over 70%. Cross-border parcel tracking is now effortless and fully automated.",
  },
  {
    name: "Rajesh Sekar",
    role: "Director of Operations",
    company: "Greenleaf Logistics",
    website: "http://greenleaflogistic24.com/",
    logo: "https://www.greenleaflogistic24.com/assets/logoImg-CJ9Ef9El.png",
    project: "Global Freight & Container Logistics Platform",
    rating: 5,
    review:
      "The container and freight tracking system built by Namodot has been a massive breakthrough for Greenleaf Logistics. Live port milestone alerts, automated export-import customs paperwork, and complete vessel tracking have optimized our delivery schedules tremendously.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-slate-50/70 border-t border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-wider uppercase text-[var(--secondary)] bg-[var(--secondary)]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Client Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-brand">
            Trusted by Shipment & Logistics Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how our digital shipment platforms, live tracking engines, and supply chain solutions drive success for our global logistics partners.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {clientReviews.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6, boxShadow: "0 20px 35px -10px rgba(0, 0, 0, 0.12)" }}
              className="bg-white rounded-2xl p-7 sm:p-8 shadow-sm border border-gray-200/80 flex flex-col justify-between transition-all duration-300 relative group"
            >
              <div>
                {/* Header: Company Logo & Website Link */}
                <div className="flex items-center justify-between pb-5 mb-5 border-b border-gray-100 gap-4">
                  <div className="h-12 flex items-center bg-gray-50/80 px-3 py-1.5 rounded-xl border border-gray-100">
                    <img
                      src={client.logo}
                      alt={client.company}
                      className="h-8 max-w-[140px] w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                  <a
                    href={client.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--secondary)] hover:opacity-80 transition-opacity bg-[var(--secondary)]/5 hover:bg-[var(--secondary)]/10 px-3 py-1.5 rounded-lg"
                  >
                    <span>Visit Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Rating & Project Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(client.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    Verified Project
                  </span>
                </div>

                <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  {client.project}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base italic mb-6">
                  "{client.review}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-gray-100">
                <div className="w-11 h-11 rounded-full bg-[var(--secondary)] text-white flex items-center justify-center font-bold text-base font-brand shrink-0 shadow-sm">
                  {client.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base leading-snug">
                    {client.name}
                  </h4>
                  <p className="text-xs text-gray-500 font-medium">
                    {client.role}, {client.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
