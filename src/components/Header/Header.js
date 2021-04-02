import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <nav>
                <Link className="logo" to="">Knowledge Achieve</Link>
                <Link to="/home">Home</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/admin">Admin</Link>
                <Link to="/login">Login</Link>
            </nav>
        </div>
    );
};

export default Header;