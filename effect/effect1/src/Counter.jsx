import { useEffect, useState } from "react"

export function Counter({ initialValue = 0 }) {
    const [counter, setCounter] = useState(initialValue)

    useEffect(() => {
        console.log(`The current value of counter is ${counter}`)
    }, [counter])

    function handleCounterIncrement() {
        setCounter(counter + 1)
    }

    return (
        <div>
            <h2>Valore iniziale {counter}</h2>
            <button onClick={handleCounterIncrement}>Click Me!</button>
        </div>
    )
}