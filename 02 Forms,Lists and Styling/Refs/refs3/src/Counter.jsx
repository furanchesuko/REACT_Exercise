import { useRef, useEffect, useState } from "react"

export function Counter({ initialValue = 0 }) {
    const [counter, setCounter] = useState(initialValue)

    const directionRef = useRef(null)

    useEffect(() => {
        if (counter > initialValue) {
            directionRef.current = "up";
        } else if (counter < initialValue) {
            directionRef.current = "down";
        } else {
            directionRef.current = null;
        }
    }, [counter, initialValue])


    useEffect(() => {
        if (directionRef.current !== null) {
            console.log(`Counter changed to ${directionRef.current}`);
        }
    }, [counter, initialValue])


    function handleCounterIncrement() {
        setCounter(c => c + 1)
    }

    function handleCounterDecrement() {
        setCounter(c => c - 1)
    }

    return (
        <div>
            <h2>Valore iniziale {initialValue}</h2>
            <h2>Valore Counter {counter}</h2>
            <button onClick={handleCounterIncrement}>Increase</button>
            <button onClick={handleCounterDecrement}>Decrease</button>
        </div>
    )
}