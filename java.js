var container = document.querySelector('#container');
var test = document.getElementsByClassName('text-box');
var btn = document.getElementById('btn');
var error = document.getElementById('error-message-nan');
console.log(error);
error.style.visibility = "hidden";
createGrid(16);





btn.addEventListener('click', checkInput);

function checkInput(e) {
    var n = test[0].value;
    n = n.trim();
    console.log(isNaN(n));


    if (isNaN(n)) {
        //show error if input is not a number
        error.textContent = "Your input is not a number";
        error.style.visibility = "visible";
        return;
    } else if (n < 1 || n > 100) {
        error.textContent = "ERROR: Please enter a number between 1 and 100";
        error.style.visibility = "visible";
    }
    else {
        createGrid(n);
    }

}



function createGrid(n) {
    removeOldGraph();
    var i = 700 / n;
    let boxSize = i + 'px';
    //create n x n squares
    for (let i = 0; i < n; i++) {
        const newRow = document.createElement('div');
        newRow.className = 'newRow';
        container.appendChild(newRow);
        for (let j = 0; j < n; j++) {
            //create a new div element
            const newDiv = document.createElement('div');
            //create a class name to the div
            newDiv.className = "boxes";

            //add style to the newdiv
            newDiv.style.borderStyle = 'solid';
            newDiv.style.minWidth = boxSize;
            newDiv.style.maxWidth = boxSize;
            newDiv.style.minHeight = boxSize;
            newDiv.style.maxHeight = boxSize;
            newDiv.style.backgroundColor = 'white';
            newDiv.style.borderWidth = '1px';

            newRow.appendChild(newDiv);
        }
        const aRow = document.querySelector('.newRow');

    }
    var aBox = document.querySelectorAll('.boxes');
    aBox.forEach(box => box.addEventListener('mouseover', boxHover));
}


function removeOldGraph() {
    let rows = document.querySelectorAll('.newRow');
    [].forEach.call(rows, function (row) {
        row.remove();
    });

}

function boxHover(e) {
    
    /*Choose a number between 0 and 255*/
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    e.target.style.background = 'rgb('+r+','+g+','+b+')';
}




