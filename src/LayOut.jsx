import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "./utils";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "./components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import namodotLogo from "./assets/namodot.png";

// EDUCATIONAL NOTE FOR STUDENTS:
// In modern React bundlers like Vite, importing an image asset returns its resolved public URL.
// When using Material UI (MUI), you can pass this imported path directly into components like
// `<Avatar src={namodotLogo} alt="Logo" />` or `<CardMedia component="img" image={namodotLogo} />`
// or use it inside standard HTML `<img>` elements within a `<Box>` component.

const navigationItems = [
  { title: "Home", url: createPageUrl("Home") },
  { title: "About Us", url: createPageUrl("About") },
  { title: "Services", url: createPageUrl("Services") },
  { title: "Products", url: createPageUrl("Products") },
  { title: "Careers", url: createPageUrl("Careers") },
  { title: "Contact", url: createPageUrl("Contact") },
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Dynamic SEO & Document Head Synchronization per Route
  React.useEffect(() => {
    const metaConfig = {
      "/": {
        title: "NAMODOT | Enterprise IT Solutions, ERP & Shipment Logistics",
        description: "NAMODOT delivers next-generation IT solutions, campus and school ERP systems, healthcare platforms, and global shipment tracking intelligence with Namo Shipcart.",
        canonical: "https://namodot.com/",
      },
      "/home": {
        title: "NAMODOT | Enterprise IT Solutions, ERP & Shipment Logistics",
        description: "NAMODOT delivers next-generation IT solutions, campus and school ERP systems, healthcare platforms, and global shipment tracking intelligence with Namo Shipcart.",
        canonical: "https://namodot.com/",
      },
      "/products": {
        title: "Enterprise Products & Software Suite | NAMODOT",
        description: "Explore NAMODOT's product suite: Namo Shipcart for export-import tracking, Namo CampusOne ERP, Namo School management, Namo Healthcare, and HrSuite.",
        canonical: "https://namodot.com/products",
      },
      "/services": {
        title: "Software Development & IT Consulting Services | NAMODOT",
        description: "Expert software engineering, enterprise cloud solutions, AI tool development, mobile apps, and IT consulting by NAMODOT.",
        canonical: "https://namodot.com/services",
      },
      "/about": {
        title: "About NAMODOT | Our Story, Vision & Team",
        description: "Learn about NAMODOT, a new-age technology and AI organization created by passionate innovators delivering smart digital solutions.",
        canonical: "https://namodot.com/about",
      },
      "/careers": {
        title: "Careers at NAMODOT | Explore Tech Opportunities & Open Roles",
        description: "Join our team of young innovators, engineers, and digital specialists at NAMODOT. Explore open roles and career paths in tech.",
        canonical: "https://namodot.com/careers",
      },
      "/contact": {
        title: "Contact NAMODOT | Get In Touch with Our Technology Team",
        description: "Contact NAMODOT for enterprise software, ERP implementations, and shipment tracking solutions. Call +91 97915 57317 or email namodot01@gmail.com.",
        canonical: "https://namodot.com/contact",
      },
    };

    const current = metaConfig[location.pathname] || metaConfig["/"];
    document.title = current.title;

    let descTag = document.querySelector('meta[name="description"]');
    if (descTag) {
      descTag.setAttribute("content", current.description);
    }
    
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", current.title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", current.description);

    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) {
      canonicalTag.setAttribute("href", current.canonical);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        :root {
          --primary-gradient: var(--secondary);
          --primary-blue: var(--primary);
          --primary-red: var(--secondary);
        }
        
        .gradient-bg {
          background-color: var(--secondary);
        }
        
        .gradient-text {
          color: var(--secondary);
          background: none;
          -webkit-background-clip: unset;
          -webkit-text-fill-color: initial;
          background-clip: unset;
        }
        
        .hover-gradient {
          position: relative;
          overflow: hidden;
        }
        
        .hover-gradient::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background-color: var(--secondary);
          transition: left 0.3s ease;
          z-index: -1;
        }
        
        .hover-gradient:hover::before {
          left: 0;
        }
        
        /* 
          EDUCATIONAL NOTE FOR STUDENTS (Navbar Theme & Styles):
          When building custom navigation bars in React, maintaining clean active/inactive styling
          is essential for UX and accessibility.
          In Material UI (MUI), this is typically handled by setting color="primary" on AppBar
          and using theme palette colors (theme.palette.primary.main, theme.palette.common.white).
        */
        .nav-item-active {
          color: var(--secondary);
          background-color: #ffffff;
          font-weight: 600;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
        }
        
        .nav-item-inactive {
          color: rgba(255, 255, 255, 0.9);
          border: 2px solid transparent;
        }

        .nav-item-inactive:hover {
          color: #ffffff;
          background-color: rgba(255, 255, 255, 0.15);
        }
        
        .nav-item-hover:hover {
          border: 2px solid var(--secondary);
        }

        .get-started-btn {
          border: 2px solid var(--secondary);
        }
      `}</style>

      {/* Header */}
      {/* 
        EDUCATIONAL NOTE FOR STUDENTS (Navbar Container & Primary Theme):
        The navbar now uses the application's primary brand color (`var(--primary)`).
      */}
      <header className="sticky top-0 z-50 bg-[var(--primary)] text-white shadow-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo & Brand Name */}
            <Link to={createPageUrl("Home")} className="flex items-center">
              <span className="text-2xl md:text-3xl font-extrabold tracking-wider text-white font-brand uppercase">
                NAMODOT
              </span>
            </Link>

            {/* Desktop Navigation */}
            {/* 
              EDUCATIONAL NOTE FOR STUDENTS (Active & Inactive Navigation States):
              On a primary colored navbar, active items need a high-contrast treatment (white pill with dark text),
              and other items need clean contrast (`text-blue-100 hover:text-white hover:bg-white/10`).
              In Material UI (MUI), this can be achieved with `<Button>`:
              `<Button sx={{
                bgcolor: isActive ? 'common.white' : 'transparent',
                color: isActive ? 'primary.main' : 'common.white',
                '&:hover': { bgcolor: isActive ? 'common.white' : 'rgba(255, 255, 255, 0.15)' }
              }}>`
            */}
            <nav className="hidden md:flex items-center space-x-2">
              {navigationItems.map((item, index) => {
                const isActive = location.pathname === item.url || (item.url === "/home" && location.pathname === "/");
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                  >
                    <Link
                      to={item.url}
                      className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full ${
                        isActive
                          ? "nav-item-active"
                          : "nav-item-inactive"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <Link to={createPageUrl("Contact")}>
                  <Button className="ml-4 px-6 py-2 rounded-full transition-all duration-200 hover:shadow-lg transform hover:scale-105 font-bold bg-white text-[var(--primary)] hover:bg-gray-100 shadow-sm">
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-white hover:text-[var(--accent-peach)] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-16 left-0 right-0 bg-[var(--primary)] border-b border-white/10 shadow-xl overflow-hidden"
            >
              <nav className="px-4 py-4 space-y-2">
                {navigationItems.map((item, index) => {
                  const isActive = location.pathname === item.url || (item.url === "/home" && location.pathname === "/");
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.2 }}
                    >
                      <Link
                        to={item.url}
                        className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                          isActive
                            ? "bg-white text-[var(--primary)] font-semibold shadow-sm"
                            : "text-white/90 hover:bg-white/10 hover:text-white"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.2 }}
                >
                  <Link
                    to={createPageUrl("Contact")}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button className="w-full mt-3 py-4 px-4 text-base rounded-xl transform hover:scale-105 transition-all duration-200 font-bold min-h-[52px] bg-white text-blue-900 hover:bg-blue-50 shadow-md">
                      Get Started
                    </Button>
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="flex-1"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-[var(--primary)] text-[var(--text-light)] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <span className="text-2xl font-extrabold text-[var(--text-light)] font-brand uppercase tracking-wider">
                  NAMODOT
                </span>
              </div>
              <p className="text-[var(--text-light)]/75 mb-4 max-w-md leading-relaxed">
                Leading the future with innovative solutions and exceptional service.
                Your trusted partner for business growth and success.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-[var(--text-light)] mb-4 tracking-wide">Quick Links</h3>
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.title}>
                    <Link
                      to={item.url}
                      className="text-[var(--text-light)]/75 hover:text-[var(--accent-peach)] transition-colors duration-200"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-[var(--text-light)] mb-4 tracking-wide">Contact</h3>
              <div className="space-y-2 text-[var(--text-light)]/75 text-sm">
                <p>+91 97915 57317</p>
                <p>namodot01@gmail.com</p>
                <p className="pt-1 text-xs text-[var(--text-light)]/60 leading-relaxed">
                  No. 4/167 I, 18th Cross, Shanmuga Nagar,<br />
                  Sri Kailash Santhanam Garden, UKT Malai,<br />
                  Trichy, Tamil Nadu
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-[var(--text-light)]/60 text-sm">
            <p>&copy; 2024 NAMODOT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}