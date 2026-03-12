import { motion } from "framer-motion";

export default function WelcomeHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="pt-10 pb-6 px-4 text-center"
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-amber-900 dark:text-amber-100"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Welcome to the Home Bar ☕
      </motion.h1>
      <motion.p
        className="mt-3 text-lg md:text-xl text-amber-700 dark:text-amber-300/80 max-w-md mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Feel free to choose a drink from the menu.
      </motion.p>
    </motion.header>
  );
}
