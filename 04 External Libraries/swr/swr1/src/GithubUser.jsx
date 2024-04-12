import { useGithubUser } from "./useGithubUser";
import { useState } from "react";

export function GithubUser() {
    const [username, setUsername] = useState('');
    const { data, error, refreshUser } = useGithubUser(username);

    function handleRefreshUserData() {
        refreshUser();
        console.log("controlla il network per vedere la nuova chiamata API")
    }

    return (
        <div>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter GitHub username"
            />
            <button onClick={handleRefreshUserData}>Refresh user data...</button>
            {error && <h1>There has been an error</h1>}
            {!data && <h1>Loading user data...</h1>}
            {data && <h1>{data.name}</h1>}
        </div>
    );
}