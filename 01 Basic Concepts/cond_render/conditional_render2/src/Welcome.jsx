import { Age } from "./Age";

export function Welcome({ name, age }) {
    return (
        <div>
            <p>Welcome, <strong>{name}</strong>!</p>
            {age > 18 ? <Age age={age} /> : "You are very young!"}
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