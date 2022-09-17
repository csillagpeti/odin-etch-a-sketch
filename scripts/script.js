const body = document.querySelector('body');
const container = document.createElement('div');
container.className += ('container');
body.appendChild(container);
let gridDivs = [];

// drawing the grid
initGrid();
function initGrid(cellNumber = 16) {
    let properSize = 960/cellNumber;
    for (let i = 0; i < cellNumber; i++) {
        gridDivs[i] = document.createElement('div');
        gridDivs[i].style.width = `${properSize}px`;
        gridDivs[i].style.height = `${properSize}px`;
        gridDivs[i].classList += ('columnDiv');
        for (let j = 0; j < cellNumber; j++) {
            gridDivs[i][j] = document.createElement('div');
            gridDivs[i][j].style.width = `${properSize}px`;
            gridDivs[i][j].style.height = `${properSize}px`;
            gridDivs[i][j].classList += ('gridDiv');
            gridDivs[i][j].addEventListener("mousemove", function (event) {
              //  if (event.buttons > 0) {
                    gridDivs[i][j].style.backgroundColor = "red";
             //   }
            })
            gridDivs[i].appendChild(gridDivs[i][j]);
        }
        container.appendChild(gridDivs[i]);
    }

}

//start button - resets grid, asks for grid size
const button = document.getElementById('start');
button.addEventListener("click", () => {
    const allGridDivs = document.querySelectorAll('.gridDiv');
    allGridDivs.forEach(div => {
        div.remove();
    });
    const allColumnDivs = document.querySelectorAll('.columnDiv');
    allColumnDivs.forEach(div => {
        div.remove();
    });
    cellNumber = prompt('How many cells?');
    if (cellNumber > 100) cellNumber = 100;
    initGrid(cellNumber);
})

//cellSize calculator and setter for fix grid size

/*function resizeCells(cellNumber){

    let columnDivSelector = document.querySelector('.columnDiv');
    let gridDivSelector = document.querySelector('.gridDiv');

    columnDivSelector.style.width = `${properSize}px`;
    columnDivSelector.style.height = `${properSize}px`;
    gridDivSelector.style.width = `${properSize}px`;
    gridDivSelector.style.height = `${properSize}px`;
}*/