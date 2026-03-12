import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../i18n/useLanguage";

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  exit: { opacity: 0, y: "100%", transition: { duration: 0.25 } },
};

export default function DrinkModal({ drink, onClose }) {
  const { t } = useLanguage();
  const drinkT = t.drinks[drink?.id] || {};

  const ratioEntries = drink?.ratios
    ? Object.entries(drink.ratios).filter(([, v]) => v)
    : [];

  const ingredients = drinkT.ingredients || drink?.ingredients || [];
  const steps = drinkT.steps || drink?.steps || [];
  const serving = drinkT.serving || drink?.serving || "";
  const description = drinkT.description || drink?.description || "";

  return (
    <AnimatePresence>
      {drink && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal content - slides up from bottom for mobile */}
          <motion.div
            className="relative z-10 bg-gradient-to-b from-amber-50 to-orange-50 rounded-t-3xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Drag handle */}
            <div className="flex justify-center pt-3 pb-1">
              <div className="w-10 h-1 rounded-full bg-amber-300" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-5 pt-2 pb-3">
              <h2 className="text-xl font-bold text-amber-900">
                {drinkT.name || drink.name}
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-amber-100 hover:bg-amber-200 transition-colors text-amber-700 cursor-pointer text-sm font-semibold"
                aria-label={t.close}
              >
                ✕
              </button>
            </div>

            <div className="px-5 pb-8 space-y-5">
              {/* Description */}
              <p className="text-amber-800/80 text-sm leading-relaxed">
                {description}
              </p>

              {/* Ingredients */}
              {ingredients.length > 0 && (
                <section>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">
                    {t.ingredients}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {ingredients.map((item, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1.5 rounded-full bg-white/80 border border-amber-200 text-amber-800 font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              {/* Ratios */}
              {ratioEntries.length > 0 && (
                <section>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">
                    {t.ratios}
                  </h3>
                  <div className="flex gap-3">
                    {ratioEntries.map(([key, value]) => (
                      <div
                        key={key}
                        className="flex flex-col items-center px-4 py-2 rounded-2xl bg-amber-800 text-white min-w-[60px]"
                      >
                        <span className="text-[10px] uppercase tracking-wider opacity-70">
                          {key}
                        </span>
                        <span className="font-bold text-sm">{value}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Preparation steps */}
              {steps.length > 0 && (
                <section>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-3">
                    {t.steps}
                  </h3>
                  <div className="space-y-3">
                    {steps.map((step, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <span className="flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-br from-amber-700 to-amber-500 text-white text-xs font-bold shrink-0 shadow-sm">
                          {i + 1}
                        </span>
                        <span className="text-sm text-amber-800/80 pt-0.5 leading-relaxed">
                          {step}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </section>
              )}

              {/* Serving suggestion */}
              {serving && (
                <section className="bg-white/60 rounded-2xl p-4 border border-amber-200/60">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-1">
                    {t.serving}
                  </h3>
                  <p className="text-amber-800/70 text-sm">{serving}</p>
                </section>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
