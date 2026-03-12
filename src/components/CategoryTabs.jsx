import { motion } from "framer-motion";
import { categories } from "../data/drinks";

export default function CategoryTabs({ active, onChange }) {
  return (
    <nav className="flex flex-wrap justify-center gap-2 px-4 py-4">
      {categories.map((cat) => (
        <motion.button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`relative px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors cursor-pointer ${
            active === cat.id
              ? "text-white"
              : "text-amber-800 dark:text-amber-200 bg-amber-100/60 dark:bg-amber-900/30 hover:bg-amber-200/80 dark:hover:bg-amber-800/40"
          }`}
        >
          {active === cat.id && (
            <motion.span
              layoutId="activeCategoryBg"
              className="absolute inset-0 bg-amber-700 dark:bg-amber-600 rounded-full"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">
            {cat.icon} {cat.name}
          </span>
        </motion.button>
      ))}
    </nav>
  );
}
