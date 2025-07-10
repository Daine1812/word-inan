import React from 'react';
import './index.css';
import CustomNavbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedProducts from './components/FeaturedProducts';
import ProductMenu from './components/ProductMenu';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="container-fluid">
      <CustomNavbar />
      <ProductMenu />
      <HeroSection />
      <FeaturedProducts />

      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
