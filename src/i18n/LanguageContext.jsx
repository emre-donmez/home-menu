import { useState } from "react";
import { LanguageContext } from "./context";
import { translations } from "./translations";

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("tr");

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[lang];
    for (const k of keys) {
      if (value === null || value === undefined) return key;
      value = value[k];
    }
    return value ?? key;
  };

  const toggleLang = () => setLang((prev) => (prev === "tr" ? "en" : "tr"));

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
