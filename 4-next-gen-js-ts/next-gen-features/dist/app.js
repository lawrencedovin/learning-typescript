"use strict";
let button = document.querySelector("button");
function clickHandler(message) {
    console.log(`Clicked! ${message}`);
}
button.addEventListener("click", () => clickHandler('You clicked me.'));
//# sourceMappingURL=app.js.map