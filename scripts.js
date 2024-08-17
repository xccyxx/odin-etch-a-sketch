const createDiv = (number) => {
    let container = document.querySelector(".container");
    // Create 16x16 divs using JavaScript
    for (let i = 0; i < number; i++) {
        // Create rows
        let row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        // Create cols inside each rows
        for (let i = 0; i < number; i++) { 
            let col = document.createElement("div");
            col.classList.add("col");
            row.appendChild(col);
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    createDiv(16);
});