// GithubUserList.jsx
import { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";

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
        <Route path="/" element={<Index />} />
        <Route path="/users/:username" element={<UserList users={users} />} />
      </Routes>
    </div>
  );
}

function Index() {
  return (
    <div>
      <p>Add a user and select it</p>
    </div>
  );
}

function UserList({ users }) {
  return (
    <ul className="ul-container">
      {users.map((user) => (
        <li key={user.id}>
          <Link to={`/users/${user.login}`}>{user.login}</Link>
        </li>
      ))}
    </ul>
  );
}