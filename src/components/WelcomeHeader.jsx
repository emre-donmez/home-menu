import { motion } from "framer-motion";
import { useLanguage } from "../i18n/useLanguage";

export default function WelcomeHeader() {
  const { t, toggleLang } = useLanguage();

  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative pt-6 pb-4 px-4 text-center"
    >
      {/* Language toggle */}
      <motion.button
        onClick={toggleLang}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-amber-100 font-bold text-xs flex items-center justify-center cursor-pointer shadow-lg"
      >
        {t.langSwitch}
      </motion.button>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
        className="text-5xl mb-3"
      >
        ☕
      </motion.div>

      <motion.h1
        className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t.welcome}
      </motion.h1>
      <motion.p
        className="mt-2 text-sm md:text-base text-amber-100/80 max-w-xs mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {t.subtitle}
      </motion.p>
    </motion.header>
  );
}
