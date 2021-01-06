const game = () => {
  // Global Variables
  cellColor = "black";
  clearColor = "white";

  // Update the grid size text according to user input
  const updateText = () => {
    const gridSizeInput = document.querySelector(".grid-size input");

    gridSizeInput.addEventListener("input", function () {
      const gridSizeText = document.querySelector(".grid-size h3");

      gridSizeText.textContent = `${this.value}x${this.value}`;
    });
  };

  // Draw the grid-divs
  const drawGrid = () => {
    const gridSize = Number(document.querySelector(".grid-size input").value);
    const boardSize = document.querySelector(".board").offsetHeight;

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        let cell = document.createElement("div");
        cell.style.width = `${boardSize / gridSize}px`;
        cell.style.height = `${boardSize / gridSize}px`;

        cell.classList.add("cell");
        document.querySelector(".board").appendChild(cell);
      }
    }

    const cellArray = document.querySelectorAll(".cell");

    cellArray.forEach((cell) => {
      cell.style.display = "inline-block";
      cell.style.borderTop = `${cell.offsetHeight / 100}px solid #8a8a8a`;
      cell.style.borderLeft = `${cell.offsetHeight / 100}px solid #8a8a8a`;
    });
  };

  // Calling inner functions
  updateText();
  drawGrid();
};

// Calling main function
game();
