//ShowGithubUsers.jsx
import { Routes, Route } from "react-router-dom";
import { GithubUser } from "./GithubUser";
import { GithubUserList } from "./GithubUserList";

export function ShowGithubUsers() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <div>
                        <h2>Please select a user from the list</h2>
                    </div>
                }
            />
            <Route path="users" element={<GithubUser />}>
                <Route path=":username" element={<GithubUserList />} />
            </Route>
        </Routes>
    )
}