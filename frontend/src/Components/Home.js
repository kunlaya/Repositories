import React from 'react';
import logo from './LogoPariya.svg';
import bg from './background.png';



import './Home.css';

export default function(props) {
    return (
        <React.Fragment>
            
            <div >
            <img src={logo} className="home-logo" alt="logo" />,                                      
            </div>

            <div >
            <ul>
                    <li className="menu-item menu-item-home">Home</li>
                    <li  className="menu-item menu-item-products">OUR PRODUCTS</li>
                    </ul>  
            </div>
        </React.Fragment>   
    );
}
/*
import bg from './background.png';
<img src={bg} className="home-bg" alt="backgound image" />
*/