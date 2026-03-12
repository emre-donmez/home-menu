import { motion } from "framer-motion";
import { categories } from "../data/drinks";
import { useLanguage } from "../i18n/useLanguage";

export default function CategoryTabs({ active, onChange }) {
  const { t } = useLanguage();

  return (
    <nav className="flex justify-start gap-2 px-4 py-3 overflow-x-auto scrollbar-hide">
      {categories.map((cat) => (
        <motion.button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`relative px-4 py-2 rounded-2xl text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
            active === cat.id
              ? "text-white shadow-lg"
              : "text-amber-900/70 bg-white/40 backdrop-blur-sm"
          }`}
        >
          {active === cat.id && (
            <motion.span
              layoutId="activeCategoryBg"
              className="absolute inset-0 bg-gradient-to-r from-amber-800 to-amber-600 rounded-2xl shadow-lg"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">
            {cat.icon} {t.categories[cat.id]}
          </span>
        </motion.button>
      ))}
    </nav>
  );
}
