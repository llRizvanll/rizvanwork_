import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";

interface StarRatingProps {
  rating: number; // Rating out of 5
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const StarRating: React.FC<StarRatingProps> = ({ 
  rating, 
  size = "md",
  className = ""
}) => {
  const sizeClasses = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5"
  };

  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <FaStar 
        key={`full-${i}`} 
        className={`text-yellow-400 ${sizeClasses[size]} ${className}`}
      />
    );
  }

  // Add half star if needed
  if (hasHalfStar) {
    stars.push(
      <FaStarHalf 
        key="half" 
        className={`text-yellow-400 ${sizeClasses[size]} ${className}`}
      />
    );
  }

  // Add empty stars
  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <FaRegStar 
        key={`empty-${i}`} 
        className={`text-yellow-400 ${sizeClasses[size]} ${className}`}
      />
    );
  }

  return (
    <div className="flex space-x-1">
      {stars}
    </div>
  );
};
