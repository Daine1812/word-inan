import React from 'react';

const ServicesPage = () => {
  return (
    <section className="py-10 bg-gradient-to-r from-white to-gray-50 custom-shadow">
      <h1 className="text-3xl md:text-4xl font-bold text-[#ff4d4d] font-amiri text-center mb-6">
        DỊCH VỤ CỦA CHÚNG TÔI
      </h1>
      <div className="container mx-auto px-4 text-lg text-gray-700">
        <ul className="list-disc list-inside space-y-3">
          <li>In tem nhãn decal giấy, nhựa, kraft, xi bạc, xi vàng...</li>
          <li>Thiết kế và in standee X, standee cuốn, poster quảng cáo</li>
          <li>In nhanh, in offset số lượng lớn</li>
          <li>In UV DTF chất lượng cao</li>
          <li>Tư vấn thiết kế theo yêu cầu khách hàng</li>
        </ul>
      </div>
    </section>
  );
};

export default ServicesPage;
