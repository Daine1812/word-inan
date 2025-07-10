import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 bg-gradient-to-r from-[#2c3e50] to-[#3498db] text-white text-center">
      <div className="container mx-auto">
        <p className="text-lg font-semibold mb-4">IN ẤN BA DƯ</p>
        <p className="mb-4">Ngã 6 BMT </p>
        <p className="mb-4">Điện thoại: <a href="tel:0925328328" className="text-[#ffd700] hover:underline">0917351112</a></p>
        <p className="mb-4">Email: <a href="mailto:contact@inanbadu.vn" className="text-[#ffd700] hover:underline">contact@inanbadu.vn</a></p>
        <div className="flex justify-center gap-4">
          <a href="https://facebook.com" className="text-[#ffd700] hover:text-white" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com" className="text-[#ffd700] hover:text-white" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://youtube.com" className="text-[#ffd700] hover:text-white" aria-label="YouTube">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;