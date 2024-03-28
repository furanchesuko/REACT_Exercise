export function Color({ color }) {

    return (
        <div>
            {color.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </div>
    )
}