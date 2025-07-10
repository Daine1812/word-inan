import React from 'react';
import { NavDropdown } from 'react-bootstrap';

const ProductMenu = () => {
  return (
    <section className="py-6 bg-gradient-to-r from-white to-gray-50 custom-shadow rounded-xl mb-6">
      <h2 className="text-3xl font-bold text-[#ff4d4d] font-amiri text-center mb-6">KHÁM PHÁ SẢN PHẨM</h2>
      <div className="container mx-auto flex flex-wrap justify-center gap-4">
        <NavDropdown
          title={
            <span className="gradient-button text-white px-6 py-3 rounded-full font-semibold">
              Tem In Nhãn <i className="fas fa-chevron-down ms-2"></i>
            </span>
          }
          id="tem-in-nhan"
        >
          <NavDropdown.Item href="#">Tem Decal Sữa</NavDropdown.Item>
          <NavDropdown.Item href="#">Tem Decal Trong</NavDropdown.Item>
          <NavDropdown.Item href="#">Tem Decal Giấy Kraft</NavDropdown.Item>
          <NavDropdown.Item href="#">Tem Decal Xi Vàng</NavDropdown.Item>
          <NavDropdown.Item href="#">Tem Decal Xi Bạc</NavDropdown.Item>
          <NavDropdown.Item href="#">Tem Vỡ - Tem Bể</NavDropdown.Item>
          <NavDropdown.Item href="#">Tem Decal Bảy Màu</NavDropdown.Item>
          <NavDropdown.Item href="#">Tem Decal Giấy</NavDropdown.Item>
          <NavDropdown.Item href="#">Tem Decal Bảo Mật Chống Gỡ</NavDropdown.Item>
          <NavDropdown.Item href="#">In Decal UV DTF</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown
          title={
            <span className="gradient-button text-white px-6 py-3 rounded-full font-semibold">
              Tem Standee X <i className="fas fa-chevron-down ms-2"></i>
            </span>
          }
          id="tem-standee-x"
        >
          <NavDropdown.Item href="#">Standee X Tiêu Chuẩn 60x160cm</NavDropdown.Item>
          <NavDropdown.Item href="#">Standee X Tiêu Chuẩn 80x180cm</NavDropdown.Item>
          <NavDropdown.Item href="#">Standee X Cường Lực 60x160cm</NavDropdown.Item>
          <NavDropdown.Item href="#">Standee X Cường Lực 80x180cm</NavDropdown.Item>
          <NavDropdown.Item href="#">Standee X Hình Cung</NavDropdown.Item>
          <NavDropdown.Item href="#">Standee X Đế Nước</NavDropdown.Item>
          <NavDropdown.Item href="#">Standee X Tăng Đưa Cao Cấp - X Đa Năng</NavDropdown.Item>
          <NavDropdown.Item href="#">Standee Đế Nước Ngoài Trời 60x160cm</NavDropdown.Item>
          <NavDropdown.Item href="#">Standee Đế Nước Ngoài Trời 80x180cm</NavDropdown.Item>
          <NavDropdown.Item href="#">Standee Đế Sắt Ngoài Trời 60x160cm</NavDropdown.Item>
          <NavDropdown.Item href="#">Standee Đế Sắt Ngoài Trời 80x180cm</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown
          title={
            <span className="gradient-button text-white px-6 py-3 rounded-full font-semibold">
              Standee Cuốn <i className="fas fa-chevron-down ms-2"></i>
            </span>
          }
          id="standee-cuon"
        >
          <NavDropdown.Item href="#">Standee Cuốn Nhôm Thường 80x200cm</NavDropdown.Item>
          <NavDropdown.Item href="#">Standee Cuốn Nhựa 60x160cm</NavDropdown.Item>
          <NavDropdown.Item href="#">Standee Cuốn Nhựa 80x200cm</NavDropdown.Item>
          <NavDropdown.Item href="#">Standee Cuốn Nhôm Tốt 60x160cm</NavDropdown.Item>
          <NavDropdown.Item href="#">Standee Cuốn Nhôm Tốt 80x200cm</NavDropdown.Item>
          <NavDropdown.Item href="#">Standee Cuốn Nhôm Đế To Cao Cấp</NavDropdown.Item>
          <NavDropdown.Item href="#">Standee Cuốn Hào Hoa</NavDropdown.Item>
          <NavDropdown.Item href="#">Standee Cuốn Nhôm Thường 60x160cm</NavDropdown.Item>
          <NavDropdown.Item href="#">Standee Cuốn Hào Hoa Hai Mặt</NavDropdown.Item>
          <NavDropdown.Item href="#">Standee Cuốn Nhôm Cao Cấp Loại Nặng</NavDropdown.Item>
          <NavDropdown.Item href="#">Standee Cuốn Nhôm Đế Inox 80x200cm</NavDropdown.Item>
        </NavDropdown>
      </div>
    </section>
  );
};

export default ProductMenu;