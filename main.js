let counter = 0;

function buttonClicked() {
    counter += 1
    buttonDiv = document.getElementById("button-div")
    newText = "Number of times button clicked: " + counter
    buttonDiv.innerHTML = newText
}
