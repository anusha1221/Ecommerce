import React from 'react';

function ConditionalRendering() {
    const products = [
        { id: 1, name: "Cycle" },
        { id: 2, name: "Carroms" }
    ];

    return (
        <>
            <div>
                <label>
                    <input
                        type="checkbox"
                        onChange={(e) => {
                            document.getElementById('productList').innerHTML = e.target.checked ? `
                                <ul>
                                    ${products.map(product => `<li key="${product.id}">${product.name}</li>`).join('')}
                                </ul>
                            ` : '<p>No products available</p>';
                        }}
                    />
                    Show Products
                </label>
            </div>

            <div id="productList" style={{ marginTop: '20px' }}>
                <p>No products available</p>
            </div>
        </>
    )
}

export default ConditionalRendering;

export function ConditionalRendering1() {
    const products = [
        { id: 1, name: "MacBook Pro" },
        { id: 2, name: "iPhone 15" }
    ];

    return (
        <>
            <div>
                <label>
                    <input
                        type="checkbox"
                        onChange={(e) => {
                            document.getElementById('productList1').innerHTML = e.target.checked ? `
                                <ul>
                                    ${products.map(product => `<li key="${product.id}">${product.name}</li>`).join('')}
                                </ul>
                            ` : '<p>please login to view products</p>';
                        }}
                    />
                    Login
                </label>
            </div>

            <div id="productList1" style={{ marginTop: '20px' }}>
                <p>please login to view products</p>
            </div>
        </>
    )
}