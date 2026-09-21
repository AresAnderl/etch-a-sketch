// query selectors

const squareGrid = document.querySelector(".square--grid");
const button = document.querySelector("button");

// boolean values to check if the border radious of the small squares in the upper-corners have been created yet

let upperLeftCorner = false;
let upperRightCorner = false;

// create function that creates default 16 * 16 grid when page is loaded

const createGrid = (grids) => {
  const length = grids;

  // check if grids have been created in order to remove them
  if (document.querySelector(".row--container")) {
    const allElements = document.querySelectorAll(".row--container");
    for (let i = 0; i < allElements.length; i++) {
      squareGrid.removeChild(allElements[i]);
    }
  }
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

createGrid(16);
// create function that randomize the colors of the small squares

const createRandomColor = () => {
  return Math.round(Math.random() * 255);
};

const addDarkness = (target) => {
  const colors = target.style.backgroundColor
    .slice(4)
    .replace(")", "")
    .split(", ");

  const r = Number(colors[0]);
  const g = Number(colors[1]);
  const b = Number(colors[2]);

  target.style.backgroundColor = `rgb(${Math.floor(r * 0.9)}, ${Math.floor(g * 0.9)}, ${Math.floor(b * 0.9)})`;
};

const addRGBOrDarkness = (event) => {
  const target = event.target;
  if (target.classList.contains("square--grid")) {
    return;
  }

  const red = createRandomColor();
  const green = createRandomColor();
  const blue = createRandomColor();

  if (target.classList.contains("colored")) {
    addDarkness(target);
    return;
  }

  target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  target.classList.add("colored");
};

const buttonClick = () => {
  const number = Number(prompt("select your number"));
  if (number > 0 && number <= 100) {
    createGrid(number);
  }
};

squareGrid.addEventListener("mouseover", addRGBOrDarkness);

// add event listener to small squares (via parent element) and use randomize colors to color the small squares
button.addEventListener("click", buttonClick);
// add event listener to button create new grid

// -----------------additional---------------
// create function that darkens 10% the small squares
