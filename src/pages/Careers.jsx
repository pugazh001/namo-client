import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../components/ui/button";
import { 
  Briefcase, 
  Upload, 
  CheckCircle, 
  MapPin, 
  Clock, 
  Award, 
  Zap, 
  Heart, 
  TrendingUp, 
  User, 
  Mail, 
  Phone, 
  FileText, 
  X,
  ArrowRight
} from "lucide-react";

/**
 * EDUCATIONAL NOTE FOR STUDENTS (Careers & Job Application Form):
 * 1. Form State Management: We track candidate details and uploaded file metadata in React useState.
 * 2. File Upload Handling: The file input handles `.pdf` and `.docx` uploads. In production, files are sent via `FormData` to an API endpoint.
 * 3. MUI Equivalents for Students:
 *    - Modal/Dialog: `<Dialog open={isModalOpen} onClose={handleClose}>`
 *    - Text Fields: `<TextField label="Full Name" variant="outlined" fullWidth />`
 *    - File Upload Button: `<Button component="label" variant="contained" startIcon={<CloudUploadIcon />}> Upload Resume <input type="file" hidden /> </Button>`
 */

const jobOpenings = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-Time",
    experience: "3 - 5 Years",
    description: "Build high-performance web applications using React, Node.js, and modern cloud architecture.",
    tags: ["React", "Node.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Cloud Solutions Architect",
    department: "Cloud & DevOps",
    location: "Chennai / Hybrid",
    type: "Full-Time",
    experience: "4+ Years",
    description: "Design and manage scalable cloud infrastructure, CI/CD pipelines, and microservice environments.",
    tags: ["AWS", "Docker", "Kubernetes", "DevOps"],
  },
  {
    id: 3,
    title: "UI/UX Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-Time",
    experience: "2 - 4 Years",
    description: "Craft intuitive, world-class user interfaces, visual design systems, and responsive web experiences.",
    tags: ["Figma", "Design Systems", "Prototyping", "UX Research"],
  },
  {
    id: 4,
    title: "AI / ML Solutions Engineer",
    department: "Data & AI",
    location: "Hybrid",
    type: "Full-Time",
    experience: "2+ Years",
    description: "Develop cutting-edge machine learning models and integrate AI solutions for enterprise automation.",
    tags: ["Python", "PyTorch", "LLMs", "REST APIs"],
  },
  {
    id: 5,
    title: "Quality Assurance Engineer",
    department: "Engineering",
    location: "On-site (Chennai)",
    type: "Full-Time",
    experience: "1 - 3 Years",
    description: "Ensure software reliability through automated testing, performance benchmarks, and bug tracking.",
    tags: ["Cypress", "Selenium", "Jest", "API Testing"],
  },
  {
    id: 6,
    title: "HR & Talent Specialist",
    department: "People Operations",
    location: "Chennai",
    type: "Full-Time",
    experience: "2+ Years",
    description: "Lead talent acquisition, foster company culture, and manage onboarding for growing tech teams.",
    tags: ["Recruitment", "People Ops", "Employee Relations"],
  },
];

const companyPerks = [
  {
    icon: <Zap className="w-6 h-6 text-blue-600" />,
    title: "Cutting-Edge Tech Stack",
    description: "Work with modern frameworks, cloud systems, and AI-driven tools to solve real problems.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-emerald-600" />,
    title: "Accelerated Career Growth",
    description: "Continuous learning programs, technical mentorship, and regular promotion tracks.",
  },
  {
    icon: <Heart className="w-6 h-6 text-rose-600" />,
    title: "Work-Life Harmony",
    description: "Flexible working hours, hybrid options, and comprehensive wellness support for every employee.",
  },
  {
    icon: <Award className="w-6 h-6 text-amber-600" />,
    title: "Competitive Compensation",
    description: "Attractive salary packages, performance bonuses, and health insurance coverage.",
  },
];

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    jobPosition: "",
    experience: "1 - 3 Years",
    message: "",
    resume: null,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!isModalOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isModalOpen]);

  const handleOpenApplyModal = (jobTitle = "") => {
    setSelectedJob(jobTitle);
    setFormData((prev) => ({ ...prev, jobPosition: jobTitle || jobOpenings[0].title }));
    setIsModalOpen(true);
    setIsSubmitted(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, resume: file }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission delay
    setIsSubmitted(true);
    setTimeout(() => {
      // Keep state displayed briefly
    }, 500);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setIsModalOpen(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      jobPosition: "",
      experience: "1 - 3 Years",
      message: "",
      resume: null,
    });
  };

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* 
        HERO SECTION 
        EDUCATIONAL NOTE (Hero Spacing):
        Keeping top padding tight (`pt-2 lg:pt-4`) aligns the hero content close to the navigation bar.
      */}
      <section className="pt-2 pb-16 lg:pt-4 lg:pb-24 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Join Our Team & Build The Future
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Explore rewarding career opportunities at Namodot IT Solutions. We foster innovation, reward initiative, and empower talented professionals to create meaningful impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#open-positions">
                <Button className="bg-white text-blue-900 hover:bg-gray-50 px-8 py-3.5 rounded-full text-base font-semibold transition-all duration-200 hover:shadow-xl transform hover:scale-105">
                  View Openings
                </Button>
              </a>
              <button
                onClick={() => handleOpenApplyModal("General Application")}
                className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-3.5 rounded-full text-base font-semibold hover:bg-white/20 transition-all duration-200"
              >
                Drop Your Resume
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY JOIN US / PERKS SECTION */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Why Work at Namodot?</h2>
            <p className="text-gray-600 mt-2">Empowering culture built for learning, growth, and excellence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyPerks.map((perk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-slate-50/70 border border-gray-100 hover:shadow-md transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4">
                  {perk.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{perk.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{perk.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS SECTION */}
      <section id="open-positions" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-500">Current Openings</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-1">Explore Available Roles</h2>
            </div>
            <p className="text-gray-500 text-sm mt-2 md:mt-0">
              Showing {jobOpenings.length} active opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobOpenings.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
                      {job.department}
                    </span>
                    <span className="text-xs text-gray-400 font-medium">{job.type}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{job.description}</p>

                  <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-5">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gray-400" />
                      {job.experience}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {job.tags.map((tag, i) => (
                      <span key={i} className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={() => handleOpenApplyModal(job.title)}
                  className="w-full gradient-bg hover:opacity-90 text-white font-medium py-2.5 rounded-xl transition-all duration-200"
                >
                  Apply For Position
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* JOB APPLICATION MODAL / DIALOG */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
              onClick={resetForm}
              aria-hidden="true"
            />
            <div className="fixed inset-0 overflow-y-auto overscroll-contain">
              <div className="flex min-h-full items-end sm:items-center justify-center p-0 sm:p-4">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.2 }}
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="career-application-title"
                  onClick={(e) => e.stopPropagation()}
                  className="relative flex w-full max-w-2xl max-h-[100dvh] sm:max-h-[min(90dvh,820px)] flex-col bg-white shadow-2xl border border-gray-100 rounded-t-2xl sm:rounded-3xl"
                >
                  {/* Modal Header */}
                  <div className="gradient-bg shrink-0 p-4 sm:p-6 text-white relative">
                    <button
                      type="button"
                      onClick={resetForm}
                      aria-label="Close application form"
                      className="absolute top-4 right-4 sm:top-5 sm:right-5 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-all"
                    >
                      <X className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                    <div className="flex items-center gap-2 mb-1 pr-10">
                      <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                      <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold opacity-90">
                        Career Application
                      </span>
                    </div>
                    <h3 id="career-application-title" className="text-xl sm:text-2xl font-bold pr-10">
                      Apply at Namodot IT Solutions
                    </h3>
                    <p className="text-xs sm:text-sm opacity-90 mt-1 break-words pr-2">
                      {selectedJob ? `Role: ${selectedJob}` : "Submit your details for review"}
                    </p>
                  </div>

                  {/* Modal Content */}
                  <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-4 sm:p-6 md:p-8">
                {isSubmitted ? (
                  <div className="text-center py-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <CheckCircle className="w-10 h-10" />
                    </motion.div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">Application Received!</h4>
                    <p className="text-gray-600 text-sm max-w-md mx-auto mb-6">
                      Thank you for applying to Namodot IT Solutions. Our HR team will review your resume and contact you shortly.
                    </p>
                    <Button
                      onClick={resetForm}
                      className="gradient-bg text-white px-6 py-2.5 rounded-xl font-medium"
                    >
                      Close Window
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                          <input
                            type="text"
                            name="fullName"
                            required
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            className="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          />
                        </div>
                      </div>

                      {/* Email Address */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@example.com"
                            className="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone Number */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+91 98765 43210"
                            className="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          />
                        </div>
                      </div>

                      {/* Target Position */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                          Position Applied For *
                        </label>
                        <select
                          name="jobPosition"
                          value={formData.jobPosition}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white transition-all"
                        >
                          <option value="General Application">General Application</option>
                          {jobOpenings.map((job) => (
                            <option key={job.id} value={job.title}>
                              {job.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Years of Experience */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Years of Experience
                      </label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white transition-all"
                      >
                        <option value="Fresher / 0-1 Year">Fresher / 0-1 Year</option>
                        <option value="1 - 3 Years">1 - 3 Years</option>
                        <option value="3 - 5 Years">3 - 5 Years</option>
                        <option value="5+ Years">5+ Years</option>
                      </select>
                    </div>

                    {/* Resume Upload Dropzone */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Upload Resume (PDF, DOCX) *
                      </label>
                      <div className="relative border-2 border-dashed border-gray-200 hover:border-blue-500 rounded-2xl p-4 text-center transition-all bg-slate-50/50">
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          required={!formData.resume}
                          onChange={handleFileChange}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        />
                        {formData.resume ? (
                          <div className="flex flex-col gap-1 bg-blue-50/80 p-3 rounded-xl sm:flex-row sm:items-center sm:justify-between sm:gap-2">
                            <div className="flex items-center gap-2 text-blue-900 text-sm font-medium min-w-0">
                              <FileText className="w-5 h-5 text-blue-600 shrink-0" />
                              <span className="truncate">{formData.resume.name}</span>
                            </div>
                            <span className="text-xs text-blue-600 font-semibold shrink-0 pl-7 sm:pl-0">
                              {(formData.resume.size / 1024).toFixed(1)} KB
                            </span>
                          </div>
                        ) : (
                          <div className="space-y-1">
                            <Upload className="w-7 h-7 text-blue-500 mx-auto" />
                            <p className="text-sm font-semibold text-gray-700">
                              Click or Drag & Drop to Upload Resume
                            </p>
                            <p className="text-xs text-gray-400">PDF, DOC, DOCX up to 10MB</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Message / Cover Letter */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Cover Letter / Short Message
                      </label>
                      <textarea
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us briefly about your achievements and why you want to join Namodot..."
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <Button
                        type="submit"
                        className="w-full gradient-bg hover:opacity-90 text-white font-bold py-3.5 rounded-xl shadow-md transition-all duration-200"
                      >
                        Submit Application
                      </Button>
                    </div>
                  </form>
                )}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
