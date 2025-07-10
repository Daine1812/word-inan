import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <div className="container-fluid">
        <Navbar.Brand href="/index.html" className="navbar-brand text-white">IN ẤN BA DƯ</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto navbar-nav">
            <Nav.Link href="/index.html" className="nav-link">Trang Chủ</Nav.Link>
            <NavDropdown
              title={
                <span className="text-[#e0e7ff] font-medium text-lg">
                  Sản Phẩm <i className="fas fa-chevron-down ms-1"></i>
                </span>
              }
              id="productsDropdown"
              className="nav-link"
            >
              <NavDropdown title="Tem In Nhãn" className="dropdown-item">
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
              <NavDropdown title="Tem Standee X" className="dropdown-item">
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
              <NavDropdown title="Standee Cuốn" className="dropdown-item">
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
            </NavDropdown>
            <Nav.Link href="/services.html" className="nav-link">Dịch Vụ</Nav.Link>
            <Nav.Link href="/intro.html" className="nav-link">Giới Thiệu</Nav.Link>
            <Nav.Link href="/contact.html" className="nav-link">Liên Hệ</Nav.Link>
          </Nav>
          <div className="ms-auto flex items-center">
            <a href="tel:0925328328" className="text-white me-3">
              <i className="fas fa-phone-alt"></i> 0925.328.328
            </a>
            <a href="#contact" className="gradient-button text-white px-4 py-2 rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 transition">
              Liên Hệ Ngay
            </a>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default CustomNavbar;