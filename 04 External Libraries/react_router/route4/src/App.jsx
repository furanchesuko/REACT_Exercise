import { Routes, Route, Link } from "react-router-dom"
import { ShowGithubUsers } from "./ShowGithubUsers"
import { Welcome } from "../../rout1/src/Welcome"
import { Counter } from "../../rout2/src/Counter"

export function App() {
  return (
    <Routes className="container-all" >

      <Route path="/" element={
        <div>
          <Welcome name="Francesco" age={29} />
          <ul>
            <li><Link to="/">Welcome</Link></li>
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/users/:username">GitHub data</Link></li>
          </ul>
        </div>
      } />

      <Route path="/counter" element={
        <div>
          <Counter />
          <ul>
            <li><Link to="/">Welcome</Link></li>
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/users/:username">GitHub data</Link></li>
          </ul>
        </div>
      } />

      <Route path="/users/:username" element={
        <div>
          <ShowGithubUsers />
          <ul>
            <li><Link to="/">Welcome</Link></li>
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/users/:username">GitHub data</Link></li>
          </ul>
        </div>
      } />

    </Routes >
  )
}