import React from 'react';
import '../Header.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="Header">
            <header>
                <Link to="/home">
                    <h1 style={{ "color": "white" }}>Mike's Automotive</h1>
                </Link>
            </header>
        </div>
    )
}

export default Header;