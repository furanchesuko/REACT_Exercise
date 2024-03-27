import { InteractiveWelcome } from "./InteractiveWelcome";
import { Welcome } from "./Welcome";

export function App(){
    return (
        <div>
            <Welcome />
            <InteractiveWelcome />
        </div>
    )
}