import react from 'react';
import css from './Child.module.css';
const Child = ({ProductCard}) => {
   
    return(
        <>
        <div className={css.containerStyle}>
            {ProductCard.map(product => (
                <div key={product.name} className={product.isInStock ? css.cardStyle1 : css.cardStyle2}>
                    <h3>{product.name}</h3>
                    <p>Price: ${product.price}</p>
                    <p style={{color: product.isInStock ? "green" : "red"}}> {product.isInStock ? "In Stock" : "Out of Stock"}</p>
                </div>
            ))}
        </div>
        </>
    )
}
export default Child;