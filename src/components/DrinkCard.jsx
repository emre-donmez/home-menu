import { motion } from "framer-motion";
import {
  FaCoffee,
  FaMugHot,
  FaGlassWhiskey,
  FaWater,
  FaLeaf,
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
  const { lang } = useLanguage();
  const Icon = iconMap[drink.id] || FaCoffee;

  return (
    <motion.button
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -6, boxShadow: "0 12px 24px rgba(0,0,0,0.12)" }}
      whileTap={{ scale: 0.97 }}
      onClick={() => onClick(drink)}
      className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/80 dark:bg-white/5 border border-amber-200 dark:border-amber-800/40 shadow-sm backdrop-blur-sm cursor-pointer text-left w-full transition-colors"
    >
      <span className="text-3xl text-amber-700 dark:text-amber-400">
        <Icon />
      </span>
      <span className="font-semibold text-amber-900 dark:text-amber-100 text-base md:text-lg text-center">
        {drink.name[lang]}
      </span>
    </motion.button>
  );
}
