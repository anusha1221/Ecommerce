import React, { useState } from 'react';
import Button from './ChildLikeDislike';
import styles from './ChildLikeDislike.module.css';

const ParentLikeDislike = () => {
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);

    const handleLike = () => {
        setLike(like + 1);
    };

    const handleDislike = () => {
        setDislike(dislike + 1);
    };

    return (
        <div className={styles.container}>
            <h2>Like & Dislike</h2>
            <div className={styles.buttonContainer}>
                <Button name="👍 Like" count={like} handleClick={handleLike} />
                <Button name="👎 Dislike" count={dislike} handleClick={handleDislike} />
            </div>
        </div>
    );
};

export default ParentLikeDislike;