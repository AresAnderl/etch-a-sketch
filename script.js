// query selectors

const squareGrid = document.querySelector(".square--grid");

// boolean values to check if the border radious of the small squares in the upper-corners have been created yet

let upperLeftCorner = false;
let upperRightCorner = false;

// create function that creates default 16 * 16 grid when page is loaded

const createGrid = (grids) => {
  const length = grids;
  for (let i = 0; i < length; i++) {
    // Create new row
    const newRow = document.createElement("div");
    newRow.classList.add("row--container");
    squareGrid.appendChild(newRow);

    for (let j = 0; j < length; j++) {
      //Add columns to the new row
      const newColumn = document.createElement("div");
      newColumn.classList.add("inner--square");
      newRow.appendChild(newColumn);
    }
  }
};

createGrid(7);

// create function that randomize the colors of the small squares

// add event listener to small squares (via parent element) and use randomize colors to color the small squares

// add event listener to button create new grid

// -----------------additional---------------
// create function that darkens 10% the small squares
