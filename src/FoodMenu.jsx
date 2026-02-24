import React from "react";
function FoodMenu() {
    const menuList = [
        { id: 1, name: "Vegetables", items: ["Onion", "Carrot", "Beans"] },
        { id: 2, name: "Fruits", items: ["Apple", "Orange", "Banana"] },
        { id: 3, name: "Grains", items: ["Rice", "Wheat", "Oats"] }
    ];
    const handleMenuClick = (menuName) => {
        console.log("Menu clicked:", menuName);
    }
    const handleItemClick = (menuName, itemName) => {
        console.log("Menu:", menuName, "| Item clicked:", itemName);
    }
    return (
        <>
            {menuList.map((menu) => (
                <div key={menu.id}>
                    <button onClick={() => handleMenuClick(menu.name)}>
                        {menu.name}
                    </button>
                    <ul>
                        {menu.items.map((item, index) => (
                            <li key={index}>
                                <button onClick={() => handleItemClick(menu.name, item)}>
                                    {item}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    )
}
export default FoodMenu;