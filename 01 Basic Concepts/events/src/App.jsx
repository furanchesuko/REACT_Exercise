import { AlertClock } from "./AlertClock";

export function App() {

    const handleClick = () => {
        alert(`The current date is ${new Date().toLocaleTimeString()}`)
    }

    return (
        <AlertClock onClick={handleClick} />
    )
}