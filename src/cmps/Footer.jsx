import React from 'react';
import logo from '../assets/images/logo-w.png';

export function Footer() {
  return (
    <section className="footer">
      <div className="top-left">
        <div className="row">
          <h3>050-7191012</h3>
          <i className="fas fa-phone-square contact"></i>
        </div>
        <div className="row">
          <h3>buissnes@gmail.com</h3>
          <i className="fas fa-envelope-square contact"></i>
        </div>
        <div className="row">
          <h3>כתובת של משרדים 4, רחובות</h3>
          <i className="fas fa-map-marker-alt contact"></i>
        </div>
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
