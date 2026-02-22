import React from "react";
function ProductCardWithJSX() {
    const product = {
        name: "iPhone 15",
        price: 79999,
        category: "Mobiles",
    };
    return(
        <>
            <h3>With JSX</h3>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.category}</p>
        </>
    )
}
export default ProductCardWithJSX;