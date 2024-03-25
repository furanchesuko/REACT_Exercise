import { Counter } from "./Counter"

export function CounterDisplay({ initialValue, count}) {
    return (
        <div>
            <h2>Valore iniziale {initialValue}</h2>
            <h2>Valore variato {count}</h2>
            <Counter initialValue={initialValue} count={count}/>
        </div>
    )
}