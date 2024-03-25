import { useState } from "react"

export function Counter({ initialValue }) {
    const [counter, setCounter] = useState(initialValue)

    function handleCounterIncrement() {
        setCounter(counter + 1)
    }

    function handleCounterDecrement() {
        setCounter(counter - 1);
    }

    function handleCounterReset() {
        setCounter(initialValue);
    }

    return (
        <div>
            <button onClick={handleCounterIncrement}>Increment</button>
            <button onClick={handleCounterDecrement}>Decrement</button>
            <button onClick={handleCounterReset}>Reset</button>
        </div>
    )
}