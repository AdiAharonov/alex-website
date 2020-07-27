import React from 'react'
import logo from '../assets/images/logo-w.png'

export function Footer() {
    return (
        <section className="footer">
            <img src={logo} className="footer-logo" alt=""/>
            <div className="social-media">
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-youtube"></i>
            </div>
            
        </section>
    )
}
