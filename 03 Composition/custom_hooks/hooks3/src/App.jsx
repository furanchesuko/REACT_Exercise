import { useState } from "react";
import { GithubUser } from "./GithubUser";

export function App() {
  const [username, setUsername] = useState('')

  return (
    <>
      <GithubUser username={username}/>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Search Github username" />
    </>
  )
}