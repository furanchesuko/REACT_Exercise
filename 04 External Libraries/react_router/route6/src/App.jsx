import { Routes, Route, Link } from "react-router-dom"
import { ShowGithubUsers } from "./ShowGithubUsers"
import { Welcome } from "../../rout1/src/Welcome"
import { Counter } from "../../rout2/src/Counter"
import { GithubUserList } from "./GithubUserList";

export function App() {
  return (
    <Routes >
  
        <Route path="/" element={
          <div className="welcome-container">
            <Welcome name="Francesco" age={29} />
            <ul className="page-link">
              <li><Link to="/">Welcome</Link></li>
              <li><Link to="/counter">Counter</Link></li>
              <li><Link to="/users">GitHub data</Link></li>
            </ul>
          </div>
        } />

        <Route path="/counter" element={
          <div>
            <Counter />
            <ul className="page-link">
              <li><Link to="/">Welcome</Link></li>
              <li><Link to="/counter">Counter</Link></li>
              <li><Link to="/users">GitHub data</Link></li>
            </ul>
          </div>
        } />

        <Route path="/users" element={
          <div>
            <GithubUserList />
            <ul className="page-link">
              <li><Link to="/">Welcome</Link></li>
              <li><Link to="/counter">Counter</Link></li>
              <li><Link to="/users">GitHub data</Link></li>
            </ul>
          </div>
        } />

        <Route path="*" element={<b><p>Not Found!</p></b>} />
     
    </Routes >
  )
}