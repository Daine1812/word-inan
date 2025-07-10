import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid className="flex items-center justify-between">
        <Navbar.Brand href="#" className="navbar-brand text-white text-3xl lg:text-4xl">
          WORLD IN ẤN
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" className="text-white" />
        <Navbar.Collapse id="navbarNav">
          <div className="flex flex-col lg:flex-row w-full justify-end items-center gap-3">
            <Nav className="navbar-nav flex flex-col lg:flex-row items-start lg:items-center gap-2">
              <Nav.Link href="#" className="nav-link">Trang Chủ</Nav.Link>

              <NavDropdown
                title={
                  <span className="text-[#e0e7ff] font-medium text-lg">
                    Sản Phẩm <i className="fas fa-chevron-down ms-1"></i>
                  </span>
                }
                id="productsDropdown"
                className="nav-link custom-dropdown"
              >
                <NavDropdown title="Tem In Nhãn" className="dropdown-item dropdown-item-custom">
                  <NavDropdown.Item href="#">Tem Decal Sữa</NavDropdown.Item>
                  <NavDropdown.Item href="#">Tem Decal Giấy</NavDropdown.Item>
                  <NavDropdown.Item href="#">Tem Decal Giấy Kraft</NavDropdown.Item>
                  <NavDropdown.Item href="#">Tem Decal Trong</NavDropdown.Item>
                  <NavDropdown.Item href="#">Tem Decal Xi Bạc</NavDropdown.Item>
                  <NavDropdown.Item href="#">Tem Decal 7 Màu</NavDropdown.Item>
                  <NavDropdown.Item href="#">Tem Decal Bảy Màu</NavDropdown.Item>
                  <NavDropdown.Item href="#">Tem Decal Giấy Mỹ Thuật</NavDropdown.Item>
                  <NavDropdown.Item href="#">Tem Decal Bảo Mật Chống Giả</NavDropdown.Item>
                  <NavDropdown.Item href="#">Tem Gỗ / Nhãn Gỗ / Nhãn Gỗ Dán</NavDropdown.Item>
                  <NavDropdown.Item href="#">In Decal UV DTF</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Tem Standee X" className="dropdown-item dropdown-item-custom">
                  <NavDropdown.Item href="#">Standee X Tiêu Chuẩn 60x160cm</NavDropdown.Item>
                  <NavDropdown.Item href="#">Standee X Tiêu Chuẩn 80x180cm</NavDropdown.Item>
                  <NavDropdown.Item href="#">Standee X Cường Lực 60x160cm</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Standee Cuốn" className="dropdown-item dropdown-item-custom">
                  <NavDropdown.Item href="#">Standee Cuốn Nhôm</NavDropdown.Item>
                  <NavDropdown.Item href="#">Standee Cuốn Siêu Nhẹ</NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>

              <a href="/services.html" className="nav-link">Dịch vụ</a>
              <a href="/intro.html" className="nav-link">Giới Thiệu</a>
              <Nav.Link href="#contact" className="nav-link">Liên Hệ</Nav.Link>
            </Nav>

            {/* Góc phải - thông tin liên hệ */}
            <div className="flex items-center gap-3">
              <a href="tel:0925328328" className="text-white">
                <i className="fas fa-phone-alt"></i> 0925.328.328
              </a>
              <a
                href="#contact"
                className="gradient-button text-white px-4 py-2 rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 transition"
              >
                Liên Hệ Ngay
              </a>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
