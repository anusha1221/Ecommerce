import React from 'react';
import Child from './Child';

const Parent = () => {
    const  products = [
        { name: "iPhone", price: 75000, isInStock: true },
        { name: "Samsung S23", price: 65000, isInStock: false },
        { name: "OnePlus", price: 55000, isInStock: true }
    ];
    return (
        <Child ProductCard={products} />
    );
}
export default Parent;