export function Colors({ color }) {

    return (
        <ul>
            {color.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    )
}