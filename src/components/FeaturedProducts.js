import React from 'react';

const FeaturedProducts = () => {
  const products = [
    {
      label: 'Bán Chạy',
      image: 'https://api.thegioisticker.com/upload/product/[d8cfc55a-d536-4cfa-a3ee-496af9aca2c7]z3457730258661_4ccabed4f2415b4e40b55c62dc16984d.jpg',
      title: 'Standee X 60x160cm',
      price: '250.000 VNĐ',
      description: 'Chất lượng cao, dễ lắp đặt, phù hợp cho sự kiện và quảng cáo.',
      link: 'product-detail.html?slug=standee-x-tieu-chuan-60x160cm',
    },
    {
      label: 'Phổ Biến',
      image: 'https://api.thegioisticker.com/upload/product/[671de079-d03f-49b7-9200-a30de435a396]2-01.png',
      title: 'Tem Decal Sữa',
      price: 'Liên hệ báo giá',
      description: 'Độ bám dính tốt, màu sắc sắc nét, phù hợp cho bao bì sản phẩm.',
      link: 'product-detail.html?slug=tem-decal-sua',
    },
    {
      label: 'Mới',
      image: 'https://api.thegioisticker.com/upload/product/[671de079-d03f-49b7-9200-a30de435a396]2-01.png',
      title: 'Standee Cuốn Nhôm',
      price: '350.000 VNĐ',
      description: 'Thiết kế gọn nhẹ, bền bỉ, lý tưởng cho quảng cáo ngoài trời.',
      link: 'product-detail.html?slug=standee-cuon-nhom',
    },
  ];

  return (
    <section className="py-10 bg-gradient-to-r from-white to-gray-50 custom-shadow" aria-labelledby="products-title">
      <h2 id="products-title" className="text-3xl md:text-4xl font-bold text-[#ff4d4d] font-amiri text-center mb-8">
        <a href="products.html" className="no-underline text-inherit hover:text-[#ff8c1a]">
          SẢN PHẨM NỔI BẬT
        </a>
      </h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden custom-shadow hover:-translate-y-2 transition-transform duration-300"
          >
            <span className="absolute top-2 left-2 bg-gradient-to-r from-green-500 to-lime-500 text-white text-xs font-semibold px-2 py-1 rounded">
              {product.label}
            </span>
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-60 object-cover border-b-2 border-[#e0e7ff] hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2 min-h-[48px]">{product.title}</h3>
              <p className="text-green-600 font-bold mb-2">{product.price}</p>
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              <a
                href={product.link}
                className="gradient-button text-white px-4 py-2 rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 transition"
              >
                Xem Chi Tiết
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;