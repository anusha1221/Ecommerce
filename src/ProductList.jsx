import React from "react";
function ProductList(){
    const products = {
        product1:"Burger",
        product2:"Pizza",
    }
    return(
        <>
        <h2>Popular Items</h2>
        <p>{products.product1}</p>
        <p>{products.product2}</p>
        </>
    )
}
export default ProductList;