import React, { useState } from 'react';

const dropdowns = [
  {
    title: 'Tem In Nhãn',
    id: 'tem',
    items: [
      'Tem Decal Sữa', 'Tem Decal Trong', 'Tem Decal Giấy Kraft',
      'Tem Decal Xi Vàng', 'Tem Decal Xi Bạc', 'Tem Vỡ - Tem Bể',
      'Tem Decal Bảy Màu', 'Tem Decal Giấy', 'Tem Decal Bảo Mật Chống Gỡ',
      'In Decal UV DTF'
    ]
  },
  {
    title: 'Tem Standee X',
    id: 'standee',
    items: [
      'Standee X Tiêu Chuẩn 60x160cm', 'Standee X Tiêu Chuẩn 80x180cm',
      'Standee X Cường Lực 60x160cm', 'Standee X Cường Lực 80x180cm',
      'Standee X Hình Cung', 'Standee X Đế Nước',
      'Standee X Tăng Đưa Cao Cấp - X Đa Năng',
      'Standee Đế Nước Ngoài Trời 60x160cm',
      'Standee Đế Nước Ngoài Trời 80x180cm',
      'Standee Đế Sắt Ngoài Trời 60x160cm',
      'Standee Đế Sắt Ngoài Trời 80x180cm'
    ]
  },
  {
    title: 'Standee Cuốn',
    id: 'cuon',
    items: [
      'Standee Cuốn Nhôm Thường 80x200cm', 'Standee Cuốn Nhựa 60x160cm',
      'Standee Cuốn Nhựa 80x200cm', 'Standee Cuốn Nhôm Tốt 60x160cm',
      'Standee Cuốn Nhôm Tốt 80x200cm', 'Standee Cuốn Nhôm Đế To Cao Cấp',
      'Standee Cuốn Hào Hoa', 'Standee Cuốn Nhôm Thường 60x160cm',
      'Standee Cuốn Hào Hoa Hai Mặt', 'Standee Cuốn Nhôm Cao Cấp Loại Nặng',
      'Standee Cuốn Nhôm Đế Inox 80x200cm'
    ]
  }
];

const ProductMenu = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <section className="bg-white shadow-lg pt-28 pb-10 z-40 relative border-b border-gray-200">
      <h2 className="text-3xl font-bold text-red-500 font-amiri text-center mb-6 uppercase">
        KHÁM PHÁ SẢN PHẨM
      </h2>
      <div className="container mx-auto flex justify-center flex-wrap gap-6">
        {dropdowns.map((menu) => (
          <div key={menu.id} className="relative">
            <button
              onClick={() => toggleDropdown(menu.id)}
              className={`bg-blue-500 text-white px-6 py-3 rounded-full font-semibold transition flex items-center gap-2 hover:bg-blue-600`}
            >
              {menu.title}
              <span className={`transform transition-transform duration-300 ${openDropdown === menu.id ? 'rotate-180' : 'rotate-0'}`}>
                ▼
              </span>
            </button>

            {openDropdown === menu.id && (
              <div
                className="absolute left-0 top-full mt-2 w-64 max-h-80 overflow-y-auto bg-gray-800 text-white rounded-xl shadow-lg p-2 z-50 animate-fade-in"
              >
                {menu.items.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block px-4 py-2 hover:bg-blue-600 rounded text-sm"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductMenu;
