import React, { useState } from 'react';

export default function ProductRating() {
    const [rating, setRating] = useState(0);
    const [selectedRating, setSelectedRating] = useState(0);

    const handleStarClick = (starValue) => {
        setRating(starValue);
        setSelectedRating(starValue);
    };

    const handleStarHover = (starValue) => {
        setRating(starValue);
    };

    const handleMouseLeave = () => {
        setRating(selectedRating);
    };

    return (
        <div className="product-rating-container">
            <style>{`
        .product-rating-container {
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        .stars {
          margin: 20px 0;
        }

        .star {
          margin-right: 10px;
          color: grey;
          transition: color 0.2s;
        }

        .star.active {
          color: #ffc107;
        }

        .product-rating,
        .selected-rating {
          margin-top: 15px;
          font-size: 16px;
        }
      `}</style>
            <h2>Product Rating</h2>

            {/* Stars */}
            <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        className={`star ${rating >= star ? 'active' : ''}`}
                        onClick={() => handleStarClick(star)}
                        onMouseEnter={() => handleStarHover(star)}
                        onMouseLeave={handleMouseLeave}
                        style={{ cursor: 'pointer', fontSize: '30px' }}
                    >
                        ★
                    </span>
                ))}
            </div>

            {/* Display Product Rating */}
            <div className="product-rating">
                <p>Product Rating: <strong>{selectedRating} / 5</strong></p>
            </div>




        </div>
    );
}