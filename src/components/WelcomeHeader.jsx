import { motion } from "framer-motion";
import { useLanguage } from "../i18n/useLanguage";

export default function WelcomeHeader() {
  const { t, toggleLang } = useLanguage();

  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="pt-6 pb-6 px-4 text-center"
    >
      <div className="flex justify-end mb-4">
        <motion.button
          onClick={toggleLang}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-3 py-1 rounded-full text-sm font-semibold bg-amber-700 dark:bg-amber-600 text-white shadow cursor-pointer"
        >
          {t("languageLabel")}
        </motion.button>
      </div>

      <motion.h1
        className="text-4xl md:text-5xl font-bold text-amber-900 dark:text-amber-100"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t("welcome")}
      </motion.h1>
      <motion.p
        className="mt-3 text-lg md:text-xl text-amber-700 dark:text-amber-300/80 max-w-md mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {t("subtitle")}
      </motion.p>
    </motion.header>
  );
}
