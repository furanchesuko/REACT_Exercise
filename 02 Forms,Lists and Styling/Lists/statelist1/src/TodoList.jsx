import { useState } from "react"

export function TodoList() {

    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState('')

    function handleTodo() {
        setTodos([...todos, inputValue]);
        setInputValue('');
    }

    function handleResetTodo() {
        setTodos([])
    }

    function handleRemoveTodo(index) {
        const arrCopy = [...todos]
        arrCopy.splice(index, 1)
        setTodos(arrCopy);
    }

    return (
        <div>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={handleRemoveTodo}>Remove Todo</button></li>
                ))}

            </ul>
            <input value={inputValue} onChange={e => setInputValue(e.target.value)}></input>
            <button onClick={handleTodo}>Add Todo</button>
            <button onClick={handleResetTodo}>Reset Todo</button>
        </div>
    )
}