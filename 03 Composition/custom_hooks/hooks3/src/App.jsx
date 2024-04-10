import { useState } from "react";
import { GithubUser } from "./GithubUser";
import { CurrentLocation } from "./CurrentLocation"

export function App() {
  const [username, setUsername] = useState('')

  return (
    <>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Search Github username" />
      <GithubUser username={username} />
      <CurrentLocation />
    </>
  )
}