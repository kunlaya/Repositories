import React from 'react';
import ProductList from './ProductList';

import './Home.css';

export default function(props) {
    return (
        <React.Fragment>
            <div>
                    <ul>
                    <li className="menu-item menu-item-home">Home</li>
                    <li  className="menu-item menu-item-products">OUR PRODUCTS</li>
                    </ul>                    
            </div>
            <div>

            </div>
        </React.Fragment>
         
    );
}