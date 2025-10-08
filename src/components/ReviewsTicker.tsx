import { motion } from "framer-motion";

const reviews = [
  { name: "Anna • Electrician", text: "Built my CV in 2 minutes and got 3 interviews." },
  { name: "Paolo • Plumber", text: "Deadlines pushed companies to reply fast. Hired in 4 days." },
  { name: "Sara • Barista", text: "Voice CV was perfect. No typing, just work." },
  { name: "Giulia • Chef", text: "Matched with a new kitchen opening in the same week." },
  { name: "Marco • HVAC", text: "Strong demand for green projects. Consistent gigs." }
];

const ReviewsTicker = () => (
  <div className="overflow-hidden h-20">
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: -(reviews.length * 48) }}
      transition={{ duration: reviews.length * 4, ease: "linear", repeat: Infinity }}
    >
      {[...reviews, ...reviews].map((review, index) => (
        <div key={index} className="flex items-start gap-3 py-2">
          <img
            src={`https://i.pravatar.cc/36?img=${(index % 70) + 1}`}
            alt="avatar"
            className="w-7 h-7 rounded-full"
          />
          <p className="text-xs text-gray-800">
            <span className="font-medium">{review.name}</span> — {review.text}
          </p>
        </div>
      ))}
    </motion.div>
  </div>
);

export default ReviewsTicker;
