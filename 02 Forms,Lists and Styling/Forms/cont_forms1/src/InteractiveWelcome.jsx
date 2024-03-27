import { useState } from "react";
import { Welcome } from "./Welcome";

export function InteractiveWelcome() {
    const [name, setName] = useState('')

    function handleInputChange(e) {
        setName(e.target.value)
    }

    return (
        <div>
            <input name="input" value={name} onChange={handleInputChange}></input>
            <Welcome name={name} />
        </div>
    )
}