import React from 'react';
import './header.css'
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='header-link'>
              <a href="hello">Order</a>
              <a href="hello">Order-review</a>
              <a href="hello">manage-inventory</a>
              <a href="hello">Login</a>
            </div>
        </nav>
    );
};

export default Header;