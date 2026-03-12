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
    <div className="min-h-screen bg-gradient-to-b from-amber-900 via-amber-800 to-orange-900">
      <div className="max-w-lg mx-auto pb-12">
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
