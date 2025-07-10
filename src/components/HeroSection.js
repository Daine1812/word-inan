 import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="container mx-auto text-center">
        <h1 id="hero-title" className="text-4xl md:text-5xl font-bold text-[#ffd700] font-amiri mb-4">
          IN ẤN BA DƯ - GIẢI PHÁP IN ẤN CHUYÊN NGHIỆP
        </h1>
        <p className="hero-subtitle text-lg md:text-xl text-white mb-6">
          Chuyên in nhanh, in offset, in tem nhãn, standee, decal với chất lượng cao, giá cả cạnh tranh.
        </p>
        <a
          href="#contact"
          className="gradient-button text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 transition"
        >
          Liên Hệ Ngay <i className="fas fa-arrow-right ms-2"></i>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;