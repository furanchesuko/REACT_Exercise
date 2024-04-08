import { Counter } from "./Counter"
import { Routes, Route } from "react-router-dom";

export function App() {
    return (
            <Routes>
                <Route path="/counter" element={<Counter />}></Route>
            </Routes>
    )
}