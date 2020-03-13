import React from 'react';
import logo from './LogoPariya.svg';
import NavBar from './NavBar';

import './Contact.css';

export default function(props) {
    return (
        <React.Fragment>
            <div>
                <NavBar />
                <img src={logo} className="home-logo" alt="logo" />
                <h1>CONTACT</h1>
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