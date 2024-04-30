//the program
let displayContent = document.getElementById("display")
function showdisplay(input) {
    displayContent.value += input;
}

function clearScreen() {
    displayContent.value = "";
}

function calculate(input) {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error"
    }
}