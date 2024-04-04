import { useEffect, useState } from "react"

export function GithubUser({ username }) {
    const [data, setData] = useState(null)

    async function fetchData(username) {
        const response = await fetch(`https://api.github.com/users/${username}`)
        const json = await response.json()
        console.log(json)
        setData(json)
    }

    useEffect(() => {
        fetchData(username)
    }, [username])

    return (
        <div className="container">
            {data && <h1>Username: <span className="username">{data.name}</span></h1>}
            {data && <h2>Login: <span className="login">{data.login}</span></h2>}
            {data && <h3>Avatar: <img className="avatar" src={data.avatar_url}></img></h3>}
        </div>
    )
}