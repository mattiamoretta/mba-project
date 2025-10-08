import { Star, StarHalf } from "lucide-react";

const RatingStars = () => (
  <div className="flex items-center gap-1">
    {[0, 1, 2, 3].map((index) => (
      <Star key={index} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
    ))}
    <StarHalf className="w-4 h-4 fill-yellow-400 text-yellow-400" />
    <span className="ml-2 text-xs text-gray-600">4.8/5 • 2,341 reviews</span>
  </div>
);

export default RatingStars;
