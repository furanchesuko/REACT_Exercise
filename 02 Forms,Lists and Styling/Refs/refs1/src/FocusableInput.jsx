import { useEffect, useRef } from "react"

export function FocusableInput() {
    const inputRef = useRef(null)

    const mountedRef = useRef(false)

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    useEffect(() => {
        if (!mountedRef.current) {
            mountedRef.current = true;
            console.log("Mounting for the first time")
        } else {
            console.log("Mounting again for debug purposes")
        }
    })

    return (
        <div>
            <input ref={inputRef}></input>
        </div>
    )
}