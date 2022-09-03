const body = document.querySelector('body');
const container = document.createElement('div');
container.className += ('container');
body.appendChild(container);
let gridDivs = [];

initGrid();
function initGrid(cellNumber = 16) {
    for (let i = 0; i < cellNumber; i++) {
        gridDivs[i] = document.createElement('div');
        gridDivs[i].classList += ('columnDiv');
        for (let j = 0; j < cellNumber; j++) {
            gridDivs[i][j] = document.createElement('div');
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
    initGrid(cellNumber);
})