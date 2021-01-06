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
        cell.style.display = "inline-block";

        cell.classList.add("cell");
        document.querySelector(".board").appendChild(cell);

        cell.style.borderTop = "0.1px solid #8a8a8a";
        cell.style.borderLeft = "0.1px solid #8a8a8a";
      }
    }
  };

  // Redraw board when grid-size change
  const redrawGrid = () => {
    const gridInput = document.querySelector(".grid-size input");
    const board = document.querySelector(".board");

    gridInput.addEventListener("change", () => {
      board.innerHTML = "";
      drawGrid();
      hoverCellColor();
    });
  };

  // Change the picked color and color on hover
  const changePickColor = () => {
    const colorPick = document.querySelector(".color-pick input");

    colorPick.addEventListener("input", () => {
      cellColor = colorPick.value;

      hoverCellColor();
    });
  };

  // Show the cell color on hovering
  const hoverCellColor = () => {
    const cells = document.querySelectorAll(".cell");

    cells.forEach((cell) => {
      let cellInitColor = cell.style.backgroundColor;

      cell.addEventListener("pointerover", function () {
        this.style.backgroundColor = cellColor;
      });
    });
  };

  const eraserButton = () => {
    const eraserBtn = document.querySelector(".eraser");

    eraserBtn.addEventListener("click", () => {
      document.body.style.cursor = "url('assets/eraser.png'), default";
      cellColor = clearColor;
    });

    document.body.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        const previousColor = document.querySelector(".color-pick input").value;
        document.body.style.cursor = "default";
        cellColor = previousColor;
      } else {
        return;
      }
    });
  };

  const clearButton = () => {
    const clearBtn = document.querySelector(".clear");
    const cells = document.querySelectorAll(".cell");

    clearBtn.addEventListener("click", () => {
      cells.forEach((cell) => {
        cell.style.backgroundColor = clearColor;
      });
    });
  };

  // Calling inner functions
  updateText();
  drawGrid();
  redrawGrid();
  hoverCellColor();
  changePickColor();
  eraserButton();
  clearButton();
};

// Calling main function
game();
