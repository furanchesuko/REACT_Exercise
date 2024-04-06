import { useState } from "react"
import { GithubUser } from "./GithubUser"

export function GithubUsers() {
    const [search, setSearch] = useState("")
    const [results, setResults] = useState([])

    async function handleSubmit(e) {
        e.preventDefault()

        /* prende dati dell'input digitato e li setta */
        try {
            const response = await fetch(`https://api.github.com/search/users?q=${search}`)
            if (!response.ok) {
                throw new Error("Errore nel fetch dati risultati")
            }
            const data = await response.json()
            setResults(data.items)
        } catch (error) {
            console.error(error)
        }
    };


    /* setta valore dell input */
    function handleChange(e) {
        setSearch(e.target.value)
    };

    
    return (
        <div>

            <form className="form-container" onSubmit={handleSubmit}>
                <input type="text" value={search} placeholder="Enter a GitHub username" onChange={handleChange}></input>
                <button type="submit">Submit User</button>
            </form>


            {/* !!! CREA ARRAY CON UTENTI TROVATI !!! */}
            <div>
                {results.map(user => (
                    <GithubUser key={user.id} username={user.login} />
                ))}
            </div>

        </div>
    )
}