import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import ProductMenu from '../components/ProductMenu';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <ProductMenu />
    </>
  );
};

export default HomePage;
