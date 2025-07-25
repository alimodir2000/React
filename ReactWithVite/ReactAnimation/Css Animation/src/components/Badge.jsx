import { motion, scale } from "framer-motion";

export default function Badge({ caption }) {
  return (
    <motion.span
      initial={{ scale: 1 }}
      animate={{ scale: 1.2 }}
      exit={{ scale: 1 }}
      transition={{ duration: 0.3, type: "spring" }}
      className="badge"
    >
      {caption}
    </motion.span>
  );
}
