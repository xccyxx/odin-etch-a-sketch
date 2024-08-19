const createDiv = (number) => {
    let container = document.querySelector(".container");
    // Create 16x16 divs using JavaScript
    for (let i = 0; i < number; i++) {
        // Create rows
        let row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        // Create grids inside each rows
        for (let j = 0; j < number; j++) { 
            let grid = document.createElement("div");
            grid.classList.add("grid");
            row.appendChild(grid);
        }
    }
}

const pixelateGridsOnHover = () => {
    let container = document.querySelector(".container");
    container.addEventListener("mouseover", event => {
        if (event.target.className === "grid") {
            event.target.style.backgroundColor = "#404040";
        }
    })
}

document.addEventListener("DOMContentLoaded", () => {
    createDiv(16);
    pixelateGridsOnHover();
});