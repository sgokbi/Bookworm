import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            {/* <h4>Knowledge Achieve </h4> */}
            <nav>
                <Link className="logo" to="">Knowledge Achieve</Link>
                <Link to="/home">Home</Link>
                <Link to="/order">Order</Link>
                <Link to="/admin">Admin</Link>
                <Link to="/login">Login</Link>
            </nav>
        </div>
    );
};

export default Header;