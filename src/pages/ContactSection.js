import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const ContactSection = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('dai2005ne', 'template_kvb8qmi', form.current, '4lho1BsAL_XM-j7mI')
      .then(() => {
        Swal.fire('🎉 Thành công!', 'Yêu cầu của bạn đã được gửi đến Gmail.', 'success');
        form.current.reset(); // reset form sau khi gửi
      })
      .catch((error) => {
        Swal.fire('❌ Lỗi!', 'Không gửi được yêu cầu. Vui lòng thử lại.', 'error');
        console.error('EmailJS error:', error);
      });
  };

  return (
    <section id="contact" className="py-10 bg-gradient-to-r from-white to-gray-50 custom-shadow" aria-labelledby="contact-title">
      <h2 id="contact-title" className="text-3xl md:text-4xl font-bold text-[#ff4d4d] font-amiri text-center mb-8">
        LIÊN HỆ VỚI CHÚNG TÔI
      </h2>
      <div className="container mx-auto">
        <form ref={form} onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold">Họ và Tên</label>
            <input
              type="text"
              name="name"
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
              name="email"
              id="email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff4d4d]"
              placeholder="Nhập email"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-semibold">Tin nhắn</label>
            <textarea
              name="message"
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
