import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./LayOut";
// Import other pages as needed
import Services from "./pages/Service";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <Layout>
      <Routes>
     
        <Route path="/" element={<Home />} />
           <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  );
}

export default App;
