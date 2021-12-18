let button = document.querySelector("button")!;

function clickHandler(message: string) {
    console.log('Clicked! ' + message);
}

button.addEventListener("click", () => clickHandler('You clicked me.'));