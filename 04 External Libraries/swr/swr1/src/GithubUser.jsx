import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
    const { data, error, onFetchUser, refreshUser } = useGithubUser(username);

    function handleGetUserData() {
        onFetchUser(username)
    }

    function handleRefreshUserData() {
        refreshUser();
    }

    return (
        <div>
            <button onClick={handleRefreshUserData}>Refresh user data...</button>
            <button onClick={handleGetUserData}>Load user data...</button>
            {error && <h1>There has been an error</h1>}
            {!data && <h1>Loading user data...</h1>}
            {data && <h1>{data.name}</h1>}
        </div>
    );
}