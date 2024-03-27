export function MouseClicker() {
    function handleButtonClick(event) {
      /*   console.log(event.target.name) */
        console.log(event.target.src)
    }

    return (
        <button name="one" onClick={handleButtonClick}>
            <img width={100} height={100} src="https://toppng.com/uploads/preview/click-me-11551060976clva7bqv6z.png"/>
            Click Me
        </button>
    )
}