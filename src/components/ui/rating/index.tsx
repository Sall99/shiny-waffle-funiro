import React from "react";
import { Star, StarHalf } from "lucide-react";

import { IReview } from "@/types";

export interface RatingProps {
  reviews: IReview[];
}

function calculateAverageRating(reviews: IReview[]) {
  if (reviews.length === 0) {
    return 0;
  }

  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating = totalRating / reviews.length;

  return averageRating;
}

function renderStars(rating: number) {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(rating)) {
      stars.push(<Star key={i} size={14} color="#B88E2F" fill="#B88E2F" />);
    } else {
      stars.push(<StarHalf key={i} size={14} color="#B88E2F" />);
    }
  }

  return stars;
}

export const Rating = ({ reviews }: RatingProps) => {
  const averageRating = calculateAverageRating(reviews);
  return <p className="mt-2 flex gap-1">{renderStars(averageRating)}</p>;
};
