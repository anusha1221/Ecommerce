import React from 'react';
import styles from './ChildLikeDislike.module.css';

const Button = ({ name, count, handleClick }) => {
    return (
        <button className={styles.button} onClick={handleClick}>
            {name} {count}
        </button>
    );
};

export default Button;