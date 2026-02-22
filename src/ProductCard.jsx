import React from "react";
function ProductCard() {
    const product = {
        name: "iPhone 15",
        price: 79999,
        category: "Mobiles",
    };
    return (
        React.createElement(React.Fragment, null,
            React.createElement("h3", null, "Without JSX"),
            React.createElement("p", null, product.name),
            React.createElement("p", null, product.price),
            React.createElement("p", null, product.category)
        )
    )
}
export default ProductCard;