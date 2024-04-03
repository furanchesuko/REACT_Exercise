import { useState } from "react"

export function Container({ title, children }) {

    const [collapsed, setCollapsed] = useState(false)

    function handleOnToggle() {
        setCollapsed(e => !e)
    }
    
    return (
        <div className="app">
            {title}
            <div className="container-bg">
                <div className={!collapsed ? "app-content" : "app-content-hidden"}>{children}</div>
                <button onClick={handleOnToggle}>Toggle</button>
            </div>
        </div>
    )
}