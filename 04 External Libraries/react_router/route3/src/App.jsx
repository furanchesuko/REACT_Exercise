import { Routes, Route } from "react-router-dom"
import { ShowGithubUsers } from "./ShowGithubUsers"

export function App() {
  return (
    <Routes className="container-all" >
      <Route path="/users/:username" element={<ShowGithubUsers />}></Route>
    </Routes >
  )
}