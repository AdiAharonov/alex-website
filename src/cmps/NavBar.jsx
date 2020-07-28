import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'

export  function NavBar() {
    return (
        <nav className="navbar">
            <Link to="/"><img src={logo} alt="" /></Link>
            <div className="categories">
                <Link to="/about">מי אנחנו?</Link>
                <Link to="/services">שירותים</Link>
                <Link to="/contact">צור קשר</Link>
            </div>
        </nav>
    )
}
