import { Age } from "./Age";

export function Welcome({ name, age }) {
    return (
        <div>
            <p>Welcome, <strong>{name}</strong>!</p>

            {/* normal render */}
            <Age age={age} />

            {/* render if age>18 */}
            {age > 18 && <Age age={age} />}

            {/* render if age is present */}
            {age && <Age age={age} />}

            {/* render if age>18 and age<65 */}
            {age > 18 && age < 65 && <Age age={age} />}

            {/* render if age>18,<65 and name is John */}
            {age > 18 && name === "John" && <Age age={age} />}
        </div>
    )
}

/* export function Welcome(props) {
    return (
        <div>
            <p>Welcome, <strong>{props.name}</strong>!</p>
            <Age age={props.age} />
        </div>
    )
} */