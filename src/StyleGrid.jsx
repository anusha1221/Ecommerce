import React from 'react';
function StyleGrid() {
    const products = [
        { name: "Laptop", price: 500, isInStock: true },
        { name: "Phone", price: 300, isInStock: false },
        { name: "Headphones", price: 50, isInStock: true }
    ];
    const cardStyle1 = {
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        margin: "2px",
        backgroundColor: "white"
    };
    const cardStyle2 = {
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        margin: "2px",
        backgroundColor: "lightyellow"
    };
    const containerStyle = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
    };
    return (
        <div style={containerStyle}>
            {products.map(product => (
                <div key={product.name} style={product.isInStock ? cardStyle1 : cardStyle2}>
                    <h3>{product.name}</h3>
                    <p>Price: ${product.price}</p>
                    <p style={{color: product.isInStock ? "green" : "red"}}> {product.isInStock ? "In Stock" : "Out of Stock"}</p>
                </div>
            ))}
        </div>  
    );
}
export default StyleGrid;