//////////////////Random Colour Generator


function RandomColor() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`;
}
setInterval(() => {
    document.querySelector("body").style.backgroundColor = RandomColor()
}, 2000);


/////////////////////////////////////toggeel button Dark/Light

// let modeBtn = document.querySelector("#mode");
// let currentMode = "light";

// modeBtn.addEventListener("click", () => {
//     if (currentMode === "light") {
//         currentMode = "dark";
//         document.querySelector("body").style.backgroundColor = "black"
//     }
//     else{
//         currentMode = "light"
//         document.querySelector("body").style.backgroundColor = "white"
//     }
//     console.log (currentMode)
// })