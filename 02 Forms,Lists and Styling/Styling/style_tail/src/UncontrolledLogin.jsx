export function UncontrolledLogin() {

    //funzione per stampare state aggiornato
    function handleLogin(event) {
        //previene uso di default del form
        event.preventDefault();

        /*  const username = event.target.elements.namedItem('username').value
            const password = event.target.elements.namedItem('password').value
            const remember = event.target.elements.namedItem('remember').checked
     
            const data = {
                username,
                password,
                remember,
            } 
             
        */

        //scrivo il codice con costrutto FormData per gestire in modo più compatto l'evento
        const formData = new FormData(event.target)

        const data = {
            username: formData.get('username'),
            password: formData.get('password'),
            remember: formData.get('remember'),
        }

        console.log(data)
    }

    return (
        <form name="form" type="submit" onSubmit={handleLogin}>
            <input name="username" placeholder="username" />
            <input name="password" type="password" placeholder="password" />
            <input name="remember" type="checkbox" />
            <button>Login</button>
            <button type="reset">Reset</button>
        </form>
    )
}