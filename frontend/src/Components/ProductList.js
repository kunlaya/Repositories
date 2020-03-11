import React from 'react';
import Product from "./Product";
import AddProduct from "./AddProduct";

export default function(props) {
    return (
        <div>
        <AddProduct />
        <div>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
        </div>
        
    );
}