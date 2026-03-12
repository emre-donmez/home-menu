import { useId, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/useLanguage";

/* Coffee cup SVG with fill animation */
function CoffeeCup({ fillLevel, color, clipId }) {
  return (
    <svg viewBox="0 0 64 64" className="w-14 h-14" aria-hidden="true">
      {/* Cup body */}
      <path
        d="M12 18 h32 l-3 34 a4 4 0 0 1-4 3.5 h-18 a4 4 0 0 1-4-3.5 z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        className="text-amber-800/60"
      />
      {/* Coffee liquid - animated fill */}
      <clipPath id={clipId}>
        <path d="M12 18 h32 l-3 34 a4 4 0 0 1-4 3.5 h-18 a4 4 0 0 1-4-3.5 z" />
      </clipPath>
      <motion.rect
        x="10"
        width="36"
        height="42"
        clipPath={`url(#${clipId})`}
        fill={color}
        initial={{ y: 56 }}
        animate={{ y: 56 - fillLevel * 42 }}
        transition={{ duration: FILL_ANIMATION_DURATION, ease: "easeOut" }}
      />
      {/* Handle */}
      <path
        d="M44 24 q10 0 10 10 q0 10 -10 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        className="text-amber-800/60"
      />
      {/* Steam lines */}
      {fillLevel > 0.5 && (
        <>
          <motion.path
            d="M22 16 q2-6 0-10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-amber-600/40"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: [0, 0.6, 0], y: [4, -4, -8] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 }}
          />
          <motion.path
            d="M30 16 q2-6 0-10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-amber-600/40"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: [0, 0.6, 0], y: [4, -4, -8] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 0.5,
              delay: 0.3,
            }}
          />
          <motion.path
            d="M38 16 q2-6 0-10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-amber-600/40"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: [0, 0.6, 0], y: [4, -4, -8] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 0.5,
              delay: 0.6,
            }}
          />
        </>
      )}
    </svg>
  );
}

const colorMap = {
  espresso: "#5D3A1A",
  americano: "#6B4423",
  latte: "#C4A47C",
  cappuccino: "#A67B5B",
  "flat-white": "#B89470",
  mocha: "#4A2C2A",
  macchiato: "#6B4423",
  cortado: "#9A7B5B",
  "iced-latte": "#C4A47C",
  "iced-americano": "#6B4423",
  "iced-mocha": "#4A2C2A",
  "cold-brew": "#3E2723",
  "turkish-coffee": "#3E1F0D",
  tea: "#B8860B",
  "linden-tea": "#DAA520",
  "mineral-water": "#87CEEB",
};

const FILL_ANIMATION_DURATION = 1.2;
const MODAL_OPEN_DELAY = FILL_ANIMATION_DURATION * 750;

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.4, ease: "easeOut" },
  }),
};

export default function DrinkCard({ drink, index, onClick }) {
  const { t } = useLanguage();
  const [isFilling, setIsFilling] = useState(false);
  const clipId = useId();
  const drinkT = t.drinks[drink.id] || {};
  const coffeeColor = colorMap[drink.id] || "#5D3A1A";

  const handleClick = () => {
    setIsFilling(true);
    setTimeout(() => {
      onClick(drink);
    }, MODAL_OPEN_DELAY);
  };

  return (
    <motion.button
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.96 }}
      onClick={handleClick}
      className="flex flex-col items-center gap-2 p-4 rounded-3xl bg-white/70 backdrop-blur-md border border-white/50 shadow-lg cursor-pointer w-full transition-all"
    >
      <CoffeeCup fillLevel={isFilling ? 0.85 : 0.1} color={coffeeColor} clipId={clipId} />
      <span className="font-bold text-amber-900 text-sm text-center leading-tight">
        {drinkT.name || drink.name}
      </span>
      <span className="text-xs text-amber-700/60 text-center leading-snug line-clamp-2">
        {drinkT.description || drink.description}
      </span>
    </motion.button>
  );
}
