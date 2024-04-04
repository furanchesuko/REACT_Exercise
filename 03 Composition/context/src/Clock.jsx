import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export function Clock() {
    const time = new Date().toLocaleTimeString();

    {/* passo il value di prop language del provider tramite l'hook */ }
    const language = useContext(LanguageContext);
    
    /* creo lingue */
    const messages = {
        english: 'Current time:',
        italiano: 'Ora attuale:',
    };

    return (
        <div>
            {/* uso la prop provider per decidere lingua */}
            <h1>{messages[language]} {time}</h1>
        </div>
    )
}