import React from 'react';
import logo from './LogoPariya.svg';
import NavBar from './NavBar';

import './About.css';

export default function(props) {
    return (
        <React.Fragment>
            <div>
                <NavBar />
                <img src={logo} className="home-logo" alt="logo" />
                <h1>ABOUT</h1>
            </div>
            <div>            
                    <ul>
                    <li>Home</li>
                    <li>OUR PRODUCTS</li>
                    </ul>                    
            </div>

        </React.Fragment>   
    );
}