import React, { useReducer } from 'react';
const products = [
    { id: 1, name: "laptop", price: 60000 },
    { id: 2, name: "phone", price: 20000 },
    { id: 3, name: "HeadPhones", price: 3000 },
    { id: 4, name: "Keyboard", price: 1500 },
]
const initialState = {
    cart: [],
    totalQuantity: 0,
    totalPrice: 0,
    discount: 0,
    Amount: 0
};

const calculateBill = (cart) => {
    const totalQunatity = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
    let discount = 0;
    if (totalPrice > 10000) {
        discount = totalPrice * 0.2;
    } else if (totalPrice > 5000) {
        discount = totalPrice * 0.1
    }
    const Amount = totalPrice - discount;
    return { totalQunatity, totalPrice, discount, Amount };
}
const reducer = (state, action) => {

    let newCart = [...state.cart];

    switch (action.type) {

        case "ADD":

            const existing = newCart.find(
                item => item.id === action.payload.id
            );

            if (existing) {
                newCart = newCart.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                newCart.push({ ...action.payload, quantity: 1 });
            }

        break;

        case "INC":

            newCart = newCart.map(item =>
                item.id === action.payload
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );

            break;

        case "DEC":

            newCart = newCart
                .map(item =>
                    item.id === action.payload
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter(item => item.quantity > 0);

            break;

        case "REMOVE":

            newCart = newCart.filter(
                item => item.id !== action.payload
            );

            break;

        default:
            return state;
    }

    return {
        ...state,
        cart: newCart,
        ...calculateBill(newCart)
    };
};

function CartBilling(){
const [state, dispatch] = useReducer(reducer, initialState);

return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>

        <h2>Products</h2>

        {products.map(product => (
            <div key={product.id} style={{ marginBottom: "10px" }}>
                {product.name} - ₹{product.price}

                <button
                    onClick={() =>
                        dispatch({ type: "ADD", payload: product })
                    }
                    style={{ marginLeft: "10px" }}
                >
                    Add to Cart
                </button>
            </div>
        ))}

        <hr />

        <h2>Cart</h2>

        {state.cart.length === 0 && <p>Cart is empty</p>}

        {state.cart.map(item => (
            <div key={item.id} style={{ marginBottom: "10px" }}>
                {item.name} - ₹{item.price} × {item.quantity}

                <button
                    onClick={() =>
                        dispatch({ type: "INC", payload: item.id })
                    }
                    style={{ marginLeft: "10px" }}
                >
                    +
                </button>

                <button
                    onClick={() =>
                        dispatch({ type: "DEC", payload: item.id })
                    }
                >
                    -
                </button>

                <button
                    onClick={() =>
                        dispatch({ type: "REMOVE", payload: item.id })
                    }
                >
                    Remove
                </button>
            </div>
        ))}

        <hr />

        <h2>Billing</h2>

        <p>Total Quantity: {state.totalQuantity}</p>
        <p>Total Price: ₹{state.totalPrice}</p>
        <p>Discount: ₹{state.discount}</p>
        <p>Final Amount: ₹{state.finalAmount}</p>

    </div>
);
}

export default CartBilling;
