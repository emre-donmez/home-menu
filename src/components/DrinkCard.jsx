import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCoffee,
  FaMugHot,
  FaGlassWhiskey,
  FaWater,
  FaLeaf,
  FaChevronDown,
} from "react-icons/fa";
import { useLanguage } from "../i18n/useLanguage";

const iconMap = {
  espresso: FaCoffee,
  americano: FaCoffee,
  "caffe-latte": FaMugHot,
  "latte-macchiato": FaMugHot,
  cappuccino: FaMugHot,
  "flat-white": FaMugHot,
  mocha: FaMugHot,
  macchiato: FaCoffee,
  cortado: FaCoffee,
  affogato: FaMugHot,
  "iced-latte": FaGlassWhiskey,
  "iced-americano": FaGlassWhiskey,
  "iced-mocha": FaGlassWhiskey,
  "turkish-coffee": FaCoffee,
  tea: FaLeaf,
  "linden-tea": FaLeaf,
  "mineral-water": FaWater,
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.4, ease: "easeOut" },
  }),
};

export default function DrinkCard({ drink, index, onClick }) {
  const { lang, t } = useLanguage();
  const Icon = iconMap[drink.id] || FaCoffee;
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center rounded-2xl bg-white/80 dark:bg-white/5 border border-amber-200 dark:border-amber-800/40 shadow-sm backdrop-blur-sm w-full overflow-hidden"
    >
      <motion.button
        whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(0,0,0,0.12)" }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
        className="flex flex-col items-center gap-3 p-5 w-full cursor-pointer text-left transition-colors"
      >
        <span className="text-3xl text-amber-700 dark:text-amber-400">
          <Icon />
        </span>
        <span className="font-semibold text-amber-900 dark:text-amber-100 text-base md:text-lg text-center">
          {drink.name[lang]}
        </span>
        <motion.span
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-amber-500 dark:text-amber-400"
          aria-hidden="true"
        >
          <FaChevronDown size={12} />
        </motion.span>
      </motion.button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="description"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="px-5 pb-4 w-full"
          >
            <p className="text-sm text-amber-700/70 dark:text-amber-300/60 text-center leading-snug mb-3">
              {drink.description[lang]}
            </p>
            <button
              onClick={() => onClick(drink)}
              aria-label={`${t("viewDetails")} - ${drink.name[lang]}`}
              className="w-full text-xs font-medium text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-700 rounded-lg py-1.5 hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors cursor-pointer"
            >
              {t("viewDetails")}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
