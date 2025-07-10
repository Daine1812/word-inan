import React from 'react';
import Swal from 'sweetalert2';

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire('Thành công!', 'Yêu cầu của bạn đã được gửi.', 'success');
  };

  return (
    <section id="contact" className="py-10 bg-gradient-to-r from-white to-gray-50 custom-shadow" aria-labelledby="contact-title">
      <h2 id="contact-title" className="text-3xl md:text-4xl font-bold text-[#ff4d4d] font-amiri text-center mb-8">
        LIÊN HỆ VỚI CHÚNG TÔI
      </h2>
      <div className="container mx-auto">
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold">Họ và Tên</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff4d4d]"
              placeholder="Nhập họ và tên"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff4d4d]"
              placeholder="Nhập email"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-semibold">Tin nhắn</label>
            <textarea
              id="message"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff4d4d]"
              rows="5"
              placeholder="Nhập tin nhắn của bạn"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="gradient-button text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 transition"
          >
            Gửi Yêu Cầu
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;