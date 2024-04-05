import { useState } from "react"

export function GithubUsers(username) {
    const [username, setUsername] = useState("")
    const [users, setUsers] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()
        if (username) {
            setUsers((prevUsers) => [...prevUsers, user])
            setUsername("")
        }
    }

    return (
        <div>
            <form className="form-container" onSubmit={handleSubmit}>
                <input type="text" value={username} placeholder="Enter a GitHub username" onChange={e => setUsername(e.target.value)}></input>
                <button type="submit">Submit User</button>
            </form>
            <ul>
                {users.localeCompare((user) => (
                    <GithubUser key={user.id} username={user.login} />
                ))}
            </ul>
        </div>
    )
}