import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { drinks } from "../data/drinks";
import WelcomeHeader from "../components/WelcomeHeader";
import CategoryTabs from "../components/CategoryTabs";
import DrinkGrid from "../components/DrinkGrid";
import DrinkModal from "../components/DrinkModal";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("espresso");
  const [selectedDrink, setSelectedDrink] = useState(null);

  const filtered = drinks.filter((d) => d.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      <div className="max-w-3xl mx-auto pb-12">
        <WelcomeHeader />
        <CategoryTabs active={activeCategory} onChange={setActiveCategory} />
        <DrinkGrid drinks={filtered} onSelect={setSelectedDrink} />
      </div>

      <AnimatePresence>
        {selectedDrink && (
          <DrinkModal
            drink={selectedDrink}
            onClose={() => setSelectedDrink(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
