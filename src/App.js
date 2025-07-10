import React from 'react';
import './index.css';
import CustomNavbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedProducts from './components/FeaturedProducts';
import ProductMenu from './components/ProductMenu';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection'; // Thêm nếu cần
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="container-fluid">
      <CustomNavbar />
      <HeroSection />
      <FeaturedProducts />
      <ProductMenu />
      <ServicesSection />
      <ContactSection /> {/* Thêm nếu cần */}
      <Footer />
    </div>
  );
};

export default App;