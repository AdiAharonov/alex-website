import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export function NavBar() {
  const [currentScrollHeight, setCurrentScrollHeight] = useState();

  useEffect(() => {
    setCurrentScrollHeight(0);

    window.onscroll = () => {
      const newScrollHeight = Math.ceil(window.scrollY / 50) * 50;
      if (currentScrollHeight !== newScrollHeight) {
        setCurrentScrollHeight(newScrollHeight);
      }
    };
  }, []);

  const opacity = Math.min(currentScrollHeight / 100, 1);
  const navBgc = `rgb(247, 255, 255,${opacity})`;
  const border = `rgb(162, 18, 18,${opacity})`;

  return (
    <nav>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        fixed="top"
        style={{ backgroundColor: navBgc, borderBottom: `3px solid ${border}` }}
      >
        <Navbar.Brand href="/">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="categories" id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/about">מי אנחנו?</Nav.Link>
            <Nav.Link href="/services">שירותים</Nav.Link>
            <NavDropdown title="מוצרים" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">מצלמות</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">גלאי עשן</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">ספרינקלרים</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/contact">צור קשר</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
}
