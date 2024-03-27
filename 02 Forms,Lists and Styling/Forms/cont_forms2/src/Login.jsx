import { useState } from "react"



export function Login({ onLogin }) {

    //imposto valori di default e check di default
    const [data, setData] = useState({
        username: '',
        password: '',
        remember: false,
    })

    //funzione per gestire eventi negli input
    function handleInputs(event) {
        //variabili di target
        const name = event.target.name;
        const value = event.target.value;

        const checked = event.target.checked
        const type = event.target.type
        //al succedere dell evento restituisce tupla con valori inseriti negli input
        setData((d) => {
            return {
                ...d,
                [name]: type === 'checkbox' ? checked : value,
            }
        })
    }

    //funzione per stampare state aggiornato
    function onLogin() {
        console.log(JSON.stringify(data, null, 2))
    }

    //funzione per resettare input
    function handleResetInput() {
        setData({
            username: '',
            password: '',
            remember: '',
        })
    }

    return (
        <div>
            <input name="username" type="text" value={data.username} onChange={handleInputs} placeholder="username" />
            <input name="password" type="password" value={data.password} onChange={handleInputs} placeholder="password" />
            <input name="remember" type="checkbox" checked={data.remember} onChange={handleInputs} />
            <button disabled={!data.username || !data.password} onClick={onLogin}>Login</button>
            <button onClick={handleResetInput}>Reset</button>
        </div>
    )
}