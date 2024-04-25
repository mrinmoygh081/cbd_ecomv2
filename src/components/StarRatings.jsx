import React from "react";

const StarRatings = ({ rating }) => {
  // Round the rating to the nearest half
  const roundedRating = Math.round(rating * 2) / 2;

  // Number of full stars
  const fullStars = Math.floor(roundedRating);

  // Check if there's a half star
  const hasHalfStar = roundedRating % 1 !== 0;

  // Number of empty stars
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  // Function to render a single star
  const renderStar = (type) => <span className={`star ${type}`}></span>;

  // Function to render stars based on type and count
  const renderStars = (type, count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(renderStar(type));
    }
    return stars;
  };

  return (
    <div className="star-rating">
      {renderStars("full", fullStars)}
      {hasHalfStar && renderStar("half")}
      {renderStars("empty", emptyStars)}
    </div>
  );
};

export default StarRatings;
