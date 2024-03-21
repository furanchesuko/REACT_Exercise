import { Age } from "./Age";

export function Welcome({ name, age }) {
    return (
        <div>
            <p>Welcome, <strong>{name}</strong>!</p>
            <Age age={age} />
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