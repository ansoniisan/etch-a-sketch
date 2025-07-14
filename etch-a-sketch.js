const bigContainer = document.querySelector("#bigContainer");
const container = document.querySelector("#container");

function createGrid(x) {

    let input = x

    if (input > 100) {
        alert(
            "Your grid is too big! Enter another number"
        );
        return;
    }
    let numberOfSquares = input * input;

    for (let i = 1; i <= numberOfSquares; i++) {
        const grid = document.createElement("div");
        grid.classList.toggle("grid");

        let squareSize = 500 / input;

        grid.style.width = `${squareSize}px`;
        grid.style.height = `${squareSize}px`;

        container.appendChild(grid);

        grid.addEventListener("mouseenter", () => {
            grid.classList.add("entered");
        })
    }
}

let gridButton = document.createElement("button");
gridButton.textContent = "Choose your grid size";
bigContainer.insertBefore(gridButton, container);

let gridSize = 0;


gridButton.addEventListener("click", () => {
    gridSize = prompt("Choose your grid size (number X by number X)")
    container.textContent = "";
    createGrid(gridSize);
})
