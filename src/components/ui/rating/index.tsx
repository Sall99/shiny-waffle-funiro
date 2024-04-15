import React from "react";
import { Star } from "lucide-react";

import { IReview } from "@/types";

export interface RatingProps {
  reviews?: IReview[];
  count?: boolean;
  number?: number;
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
      stars.push(<Star key={i} size={14} color="#B88E2F" />);
    }
  }

  return stars;
}

export const Rating = ({ reviews, count, number }: RatingProps) => {
  let averageRating = 0;

  if (reviews && reviews.length > 0) {
    averageRating = calculateAverageRating(reviews);
  } else if (number) {
    averageRating = number;
  }
  return (
    <p className="mt-2 flex items-center gap-1">
      <> {renderStars(averageRating)}</>
      {count && <p className="text-sm">{reviews?.length} Customer Review</p>}
    </p>
  );
};
