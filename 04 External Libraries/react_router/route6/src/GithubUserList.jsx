// GithubUserList.jsx
import { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { ShowGithubUsers } from "./ShowGithubUsers";

export function GithubUserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2>Github Users</h2>
      <Routes>
        <Route index element={<p>Add a user and select it</p>} />
        {users.map((user) => (
          // Add a unique key prop to each Route
          <Route
            key={user.id}
            path={`/users/${user.login}`}
            element={<ShowGithubUsers user={user} />}
          />
        ))}
      </Routes>
      <ul className="ul-container">
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.login}`}>{user.login}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
