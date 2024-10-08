let darkeningCount = 0;

const createCell = (number) => {
    let container = document.querySelector(".container");
    container.innerHTML = '';
    // Create 16x16 divs using JavaScript
    for (let i = 0; i < number; i++) {
        // Create rows
        let row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        // Create cells inside each rows
        for (let j = 0; j < number; j++) { 
            let cell = document.createElement("div");
            cell.classList.add("cell");
            row.appendChild(cell);
        }
    }
}

const darkening = () => {
    // progressive darkening opacity
    if (darkeningCount < 10) {
        darkeningCount += 1;
    }
    return darkeningCount / 10;
}

const pixelateCellsOnHover = () => {
    let container = document.querySelector(".container");
    // event delegation
    container.addEventListener("mouseover", event => {
        if (event.target.className === "cell" && !event.target.style.backgroundColor) {
            // progressive darkening opacity
            event.target.style.opacity = darkening();
            // random cell color
            event.target.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        }
    })
}

const promptForSideSquaresNumber = () => {
    let input;
    input = prompt("Please enter the number of squares per side: (1-100)");
    // handle cancellation
    if (input === null) {
        return null;
    }
    let sideSquaresNumber = +input;
    // handle invalid input
    if (isNaN(sideSquaresNumber) || sideSquaresNumber <= 0 || sideSquaresNumber > 100) {
        alert("Invalid number. Please try again.");
        return null;
    }
    return sideSquaresNumber;
}

const setupGridSizeButton = () => {
    let button = document.querySelector(".button");
    button.addEventListener("click", () => {
        let gridSize = promptForSideSquaresNumber();
        // avoid setting grid size using a invalid number
        if (gridSize !== null) {
            darkeningCount = 0;
            createCell(gridSize);
        }
    })
}

document.addEventListener("DOMContentLoaded", () => {
    createCell(16);
    pixelateCellsOnHover();
    setupGridSizeButton();
});