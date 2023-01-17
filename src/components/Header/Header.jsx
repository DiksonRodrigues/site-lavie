import React, { useRef } from "react";

import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";
import logoImg from "../../../src/assets/all-images/slider-img/logo.jpg";

const navLinks = [
  {
    path: "/home",
    display: "Inicio",
  },
  {
    path: "/about",
    display: "Sobre Nós",
  },
  {
    path: "/cars",
    display: "Carros",
  },

  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contatos",
  },
];

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">
      {/* ============ header top ============ */}

      {/* =============== header middle =========== */}
      <div className="header__middle">
        <Col lg="4" md="3" sm="4">
          <div className="logo">
            <h1>
              <Link to="/home" className=" d-flex align-items-center gap-2">
                <img src={logoImg} alt="" />
              </Link>
            </h1>
          </div>
        </Col>

        {/* ========== main navigation =========== */}

        <div className="main__navbar">
          <Container>
            <div className="navigation__wrapper">
              <span className="mobile__menu">
                <i class="ri-menu-line" onClick={toggleMenu}></i>
              </span>

              <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                <div className="menu">
                  {navLinks.map((item, index) => (
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active nav__item" : "nav__item"
                      }
                      key={index}
                    >
                      {item.display}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
};

export default Header;
