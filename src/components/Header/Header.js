import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <Link to='/shop'>
                <a href="/shop">Shop</a>
                </Link>
                <Link to='/review'>
                <a href="/review">Order Review</a>
                </Link>
                <Link to='/inventory'>
                <a href="/inventory">Manage Inventory</a>
                </Link>
            </nav>
        </div>
    );
};

export default Header;