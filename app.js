const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (i = 0; i < rows * cols; i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
}

makeRows(16, 16);

container.addEventListener("mouseover", function (e) {
  e.target.style.backgroundColor = "black";
});

const clearButton = document.getElementById("clear");
const newGrid = document.getElementById("newGrid");
const grids = document.querySelectorAll(".grid-item");

newGrid.addEventListener("click", () => {
  let chooseRows = prompt("How much rows do you want to create?");
  let chooseCols = prompt("How much columns do you want to create?");
  if (chooseRows >= 100 || chooseCols >= 100 || chooseRows < 1 || chooseCols < 1) {
    alert(
      "Please write numbers inside 0-100."
    );
  } else {
    let grid1 = document.querySelectorAll(".grid-item");
    grid1.forEach((item) => {
      item.remove();
    });
    makeRows(chooseRows, chooseCols);
  }
});

clearButton.addEventListener("click", () => {
  let grid2 = document.querySelectorAll(".grid-item");
  grid2.forEach((item) => {
    item.style.backgroundColor = "white";
  });
});
