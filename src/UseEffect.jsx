import React, { useState, useEffect } from 'react';
import axios from 'axios';
import css from './UseEffect.module.css';

function UseEffect() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [activeCat, setActiveCat] = useState('all');

    // fetch once on mount
    useEffect(() => {
        axios
            .get('https://fakestoreapi.com/products')
            .then(response => {
                const data = response.data;
                setProducts(data);
                // derive unique categories
                const category = Array.from(new Set(data.map(p => p.category)));
                setCategories(category);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    const handleCategoryClick = category => {
        setActiveCat(category);
    };

    const displayed =
        activeCat === 'all'
            ? products
            : products.filter(p => p.category === activeCat);

    return (
        <div>
            <h2>Category Filter</h2>
            <div className={css.categories}>
                <button
                    onClick={() => handleCategoryClick('all')}
                    style={{ fontWeight: activeCat === 'all' ? 'bold' : 'normal' }}
                >
                    All
                </button>
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => handleCategoryClick(category)}
                        style={{ fontWeight: activeCat === category ? 'bold' : 'normal' }}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className={css.productList}>
                {displayed.map(p => (
                    <div key={p.id} className={css.productCard}>
                        <h3>{p.title}</h3>
                        <p>{p.category}</p>
                        <p>${p.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UseEffect;

