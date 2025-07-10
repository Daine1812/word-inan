import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: 'In Nhanh',
      description: 'In ấn nhanh chóng, đáp ứng nhu cầu gấp với chất lượng đảm bảo.',
      icon: 'fas fa-print',
    },
    {
      title: 'In Offset',
      description: 'Công nghệ in offset hiện đại, phù hợp cho số lượng lớn.',
      icon: 'fas fa-layer-group',
    },
    {
      title: 'Thiết Kế Đồ Họa',
      description: 'Dịch vụ thiết kế chuyên nghiệp, sáng tạo theo yêu cầu.',
      icon: 'fas fa-pencil-alt',
    },
  ];

  return (
    <section className="py-10 bg-gradient-to-r from-white to-gray-50 custom-shadow" aria-labelledby="services-title">
      <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-[#ff4d4d] font-amiri text-center mb-8">
        DỊCH VỤ CỦA CHÚNG TÔI
      </h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 text-center custom-shadow hover:-translate-y-2 transition-transform duration-300"
          >
            <i className={`${service.icon} text-4xl text-[#ff4d4d] mb-4`}></i>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;