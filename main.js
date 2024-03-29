
let gridSize = 16;
let container = document.querySelector('#container');
createGrid(gridSize);

function clickEventHandler(event) {
    let newSize = +prompt('What size you want the grid to be? Please choose between 1-100.');
    if (!isNaN(newSize) && newSize>0 && newSize<=100) {
        gridSize=newSize;
        console.log(gridSize);
        createGrid(gridSize);
    } else {
        alert('Please write a valid input.');
    }
}

function clearGrid() {
    let lastChild = container.lastElementChild;
    while (lastChild) {
        container.removeChild(lastChild);
        lastChild = container.lastElementChild;
    }
}

function createGrid(size) {
    clearGrid();

    for (i = 0; i < size; i++) {
        let gridRow = document.createElement('div');
        gridRow.className = 'gridRow';
        for (j = 0; j < size; j++) {
            let gridItem = document.createElement('div');
            gridItem.className = 'gridItem';
            gridItem.style.width = 600/gridSize + "px";
            gridItem.style.height = 600/gridSize + "px";
            gridRow.appendChild(gridItem);
        }
        container.appendChild(gridRow);
    }

    buttonContainer.addEventListener('click', function(e) {
        let buttonAll = e.target
        switch (buttonAll.id) {
            case 'colorBlack':
                container.addEventListener('mouseover' , (event) => {
                    event.target.style.backgroundColor = 'Black';
                });
                break;
            case 'colorRandom':
                function getRandomColor() {
                    var letters = '0123456789ABCDEF';
                    var color = '#';
                    for (var i = 0; i < 6; i++) {
                      color += letters[Math.floor(Math.random() * 16)];
                    }
                    return color;
                }
                container.addEventListener('mouseover' , (event) => {
                    event.target.style.backgroundColor = getRandomColor();
                });
                break;
                
            case 'erase':
                container.addEventListener('mouseover' , (event) => {
                    event.target.style.backgroundColor = 'white';
                });
                break;
            case 'eraseAll':
                let gridItem = document.querySelectorAll('.gridItem');
                gridItem.forEach((gridItem) => gridItem.style.backgroundColor = 'white');
        }
    });
}

let updateBtn = document.querySelector('#updateBtn');
updateBtn.addEventListener('click', clickEventHandler)