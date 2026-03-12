import { useState } from "react";
import { translations } from "./translations";
import { LanguageContext } from "./context";

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("tr");

  const t = translations[lang];

  const toggleLang = () => {
    setLang((prev) => (prev === "tr" ? "en" : "tr"));
  };

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
