import { useState } from "react";
import { Clock } from "./Clock";
import { LanguageContext } from "./LanguageContext";

export function App() {
  //creo state per la lingua
  const [language, setLanguage] = useState('english');

  return (
    <>
      {/*passo valore state lingua al provider  */}
      <LanguageContext.Provider value={language}>
        
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="english">English</option>
          <option value="italiano">Italiano</option>
        </select>
        <Clock />
      </LanguageContext.Provider>
    </>
  )
}