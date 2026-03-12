import { AnimatePresence, motion } from "framer-motion";
import DrinkCard from "./DrinkCard";

export default function DrinkGrid({ drinks, onSelect }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={drinks.map((d) => d.id).join(",")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="grid grid-cols-2 gap-3 px-4 pb-24"
      >
        {drinks.map((drink, i) => (
          <DrinkCard
            key={drink.id}
            drink={drink}
            index={i}
            onClick={onSelect}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
