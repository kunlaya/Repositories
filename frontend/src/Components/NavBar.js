import React from "react";
import {Link} from "react-router-dom";

import "./NavBar.css";

import ProductList from "./ProductList";

export default function NavBar(props) {
    return (
        <div className="nav-bar">
            <ul>
                <li>
                    <Link to="/">Home</Link>                   
                </li>
                <li>
                <Link to="/products">Our Products</Link>
                </li>
            </ul>
        </div>
    );
} 