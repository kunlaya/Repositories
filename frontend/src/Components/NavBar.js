import React from "react";
import {Link} from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'


import "./NavBar.css";


export default function NavBar(props) {
    return (
        <Menu right>
            <Link id="home" className="menu-item" to="/">Home</Link>
            <Link id="about" className="menu-item" to="/products">Products</Link>
            <Link id="contact" className="menu-item" to="/contact">Contact</Link>
        </Menu>
    )
} 
/*       
<Link onClick = { this.showSettings } className="menu-item--small" to="">Settings></Link>
<React.Fragment>
        <div className="nav-bar">
            
        </div>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>                   
                </li>
                <li>
                <Link to="/products">Our Products</Link>
                </li>
            </ul>
        </div>
        </React.Fragment>
        */