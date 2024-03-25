export function MouseClicker() {

    function handleButtonClick(event) {
        console.log(event.target.name)
    }

    function handleImgClick(event) {
        console.log(event.currentTarget.src)
    }

    return (
        <div>
            <button name="one" onClick={handleButtonClick}>
                <img onClick={handleImgClick} width={100} height={100} src={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2016%2F06%2F29%2F16%2F53%2Fclick-here-button-1487274_1280.png&f=1&nofb=1&ipt=be0bbf1b72b8b559417657c8a0f80b880acf5d98fa089fc80a490c030918c9a3&ipo=images"}></img>
                Click Me!</button>
        </div>
    )
}