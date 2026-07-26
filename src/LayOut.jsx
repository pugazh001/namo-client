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

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        :root {
          --primary-gradient: linear-gradient(135deg, rgb(30, 58, 138) 0%, rgb(239, 68, 68) 100%);
          --primary-blue: rgb(30, 58, 138);
          --primary-red: rgb(239, 68, 68);
        }
        
        .gradient-bg {
          background: linear-gradient(135deg, rgb(30, 58, 138) 0%, rgb(239, 68, 68) 100%);
        }
        
        .gradient-text {
          background: linear-gradient(135deg, rgb(30, 58, 138) 0%, rgb(239, 68, 68) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
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
          background: linear-gradient(135deg, rgb(30, 58, 138) 0%, rgb(239, 68, 68) 100%);
          transition: left 0.3s ease;
          z-index: -1;
        }
        
        .hover-gradient:hover::before {
          left: 0;
        }
        
        .nav-item-active {
          color: white;
          border: 2px solid transparent;
          background: linear-gradient(135deg, rgb(30, 58, 138) 0%, rgb(239, 68, 68) 100%);
        }
        
        .nav-item-hover:hover {
          border: 2px solid transparent;
          background: linear-gradient(white, white) padding-box,
                      linear-gradient(135deg, rgb(30, 58, 138) 0%, rgb(239, 68, 68) 100%) border-box;
        }

        .get-started-btn {
          border: 2px solid transparent;
          background: linear-gradient(white, white) padding-box,
                      linear-gradient(135deg, rgb(30, 58, 138) 0%, rgb(239, 68, 68) 100%) border-box;
        }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, ease: "backOut" }}
                className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center mr-3 bg-slate-50 border border-gray-100"
              >
                <img src={namodotLogo} alt="Namodot Logo" className="w-full h-full object-contain p-1" />
              </motion.div>
              <span className="text-xl font-bold gradient-text">Namodot IT Solutions</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                >
                  <Link
                    to={item.url}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full border-2 border-transparent ${
                      location.pathname === item.url
                        ? "nav-item-active hover:opacity-90"
                        : "nav-item-hover text-gray-700 hover:text-blue-900"
                    }`}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <Link to={createPageUrl("Contact")}>
                  <Button className="ml-4 get-started-btn px-6 py-2 rounded-full transition-all duration-200 hover:shadow-lg transform hover:scale-105 font-semibold">
                    <span className="gradient-text">Get Started</span>
                  </Button>
                </Link>
              </motion.div>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
              className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg overflow-hidden"
            >
              <nav className="px-4 py-4 space-y-2">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.2 }}
                  >
                    <Link
                      to={item.url}
                      className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${location.pathname === item.url
                          ? "nav-item-active"
                          : "text-gray-700 hover:bg-gray-50"
                        }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.2 }}
                >
                  <Link
                    to={createPageUrl("Contact")}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button className="w-full mt-3 py-4 px-4 text-base get-started-btn rounded-xl transform hover:scale-105 transition-all duration-200 font-semibold min-h-[52px]">
                      <span className="gradient-text text-base">Get Started</span>
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
      <footer className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center mr-2 bg-slate-50 border border-gray-100">
                  <img src={namodotLogo} alt="Namodot Logo" className="w-full h-full object-contain p-0.5" />
                </div>
                <span className="text-xl font-bold gradient-text">Namodot IT Solutions</span>
              </div>
              <p className="text-gray-600 mb-4 max-w-md">
                Leading the future with innovative solutions and exceptional service.
                Your trusted partner for business growth and success.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.title}>
                    <Link
                      to={item.url}
                      className="text-gray-600 hover:text-blue-900 transition-colors duration-200"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
              <div className="space-y-2 text-gray-600">
                <p>namodot01@gmail.com</p>
                <p>9025702729</p>
                <p>9342615670</p>

              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2024 Namodot IT Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}