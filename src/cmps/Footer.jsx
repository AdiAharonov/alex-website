import React from 'react';
import logo from '../assets/images/logo-w.png';

export function Footer() {
  return (
    <section className="footer">
      <div className="top-left">
      <i className="fas fa-phone-square contact"></i>
      <i class="fas fa-envelope-square contact"></i>
      <i class="fas fa-map-marker-alt contact"></i>
      </div>
      <div className="top-right">
        <i className="fab fa-facebook-square social-media"></i>
        <i className="fab fa-youtube social-media"></i>
        <img src={logo} className="footer-logo" alt="" />
      </div>
      <div className="bottom">
        <p>Made By Adi Aharonov © 2020</p>
      </div>
    </section>
  );
}
