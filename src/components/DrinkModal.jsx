import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
  exit: { opacity: 0, y: 40, scale: 0.95, transition: { duration: 0.2 } },
};

export default function DrinkModal({ drink, onClose }) {
  if (!drink) return null;

  const ratioEntries = drink.ratios
    ? Object.entries(drink.ratios).filter(([, v]) => v)
    : [];

  return (
    <AnimatePresence>
      {drink && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-4"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal content */}
          <motion.div
            className="relative z-10 bg-amber-50 dark:bg-zinc-900 rounded-t-3xl md:rounded-2xl w-full max-w-lg max-h-[85vh] overflow-y-auto shadow-2xl"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 pt-5 pb-3 bg-amber-50 dark:bg-zinc-900 border-b border-amber-200 dark:border-amber-800/30">
              <h2 className="text-xl md:text-2xl font-bold text-amber-900 dark:text-amber-100">
                {drink.name}
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-amber-200/60 dark:hover:bg-amber-800/40 transition-colors text-amber-700 dark:text-amber-300 cursor-pointer"
                aria-label="Close"
              >
                <FaTimes size={20} />
              </button>
            </div>

            <div className="px-6 py-5 space-y-6">
              {/* Description */}
              <p className="text-amber-800 dark:text-amber-200/80 leading-relaxed">
                {drink.description}
              </p>

              {/* Ingredients */}
              {drink.ingredients?.length > 0 && (
                <section>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2">
                    Ingredients
                  </h3>
                  <ul className="space-y-1">
                    {drink.ingredients.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-amber-800 dark:text-amber-200/70"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-500 dark:bg-amber-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Ratios */}
              {ratioEntries.length > 0 && (
                <section>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2">
                    Ratios
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {ratioEntries.map(([key, value]) => (
                      <span
                        key={key}
                        className="inline-flex items-center gap-1 text-sm px-3 py-1 rounded-full bg-amber-200/60 dark:bg-amber-800/30 text-amber-800 dark:text-amber-200"
                      >
                        <span className="font-medium capitalize">{key}:</span>{" "}
                        {value}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              {/* Preparation steps */}
              {drink.steps?.length > 0 && (
                <section>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2">
                    Preparation
                  </h3>
                  <ol className="space-y-2">
                    {drink.steps.map((step, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-amber-800 dark:text-amber-200/70"
                      >
                        <span className="flex items-center justify-center h-6 w-6 rounded-full bg-amber-700 dark:bg-amber-600 text-white text-xs font-bold shrink-0">
                          {i + 1}
                        </span>
                        <span className="pt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>
                </section>
              )}

              {/* Serving suggestion */}
              {drink.serving && (
                <section className="bg-amber-100/60 dark:bg-amber-900/20 rounded-xl p-4 border border-amber-200 dark:border-amber-800/30">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1">
                    Serving Suggestion
                  </h3>
                  <p className="text-amber-800 dark:text-amber-200/80 text-sm">
                    {drink.serving}
                  </p>
                </section>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
