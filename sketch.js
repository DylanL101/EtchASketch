const contain = document.getElementById("contain");

function createRows( rows, columns) {
    contain.style.setProperty('-grid-rows', rows);
    contain.style.setProperty('-grid-cols', columns);
    for (i = 0; i < (rows*columns); i++) {
        let box= document.createElement('div');
        box.innerText = (i + 1);
        contain.appendChild(box).className = "gridBox";
    };
};

createRows( 16, 16);