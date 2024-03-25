import { Counter } from "./Counter"

export function CounterDisplay({ initialValue }) {
    return (
        <div>
            <h2>Valore iniziale {initialValue}</h2>
            <Counter count={initialValue} />
        </div>
    )
}