import { useState } from "react"

export function Counter({ count = 0 }) {
    const [counter, setCounter] = useState(count)

    function handleCounterIncrement() {
        setCounter(counter + 1)
    }

    function handleCounterDecrement() {
        setCounter(counter - 1);
    }

    function handleCounterReset() {
        setCounter(count);
    }

    return (
        <div>
            <button onClick={handleCounterIncrement}>Increment</button>
            <button onClick={handleCounterDecrement}>Decrement</button>
            <button onClick={handleCounterReset}>Reset</button>
        </div>
    )
}