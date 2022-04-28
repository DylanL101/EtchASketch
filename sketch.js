const contain = document.getElementById("contain");
let click =true;

function createRows( rows, columns) {
    contain.style.setProperty('--grid-rows', rows);
    contain.style.setProperty('--grid-cols', columns);
    contain.style.overflow = 'hidden';
    contain.style.width = '960px';
    for (i = 0; i < (rows*columns); i++) {
        let box= document.createElement('div');
        box.style.minWidth ='0';
        box.style.minHeight = '0';
        boz.style.overflow = 'hidden';
        // box.innerText = (i + 1);
        contain.appendChild(box).className = "gridBox";
        box.addEventListener( 'mouseover', () => {
            box.style.backgroundColor = 'red';

        })
    };
};

createRows( 16, 16);
 //const button = document.createElement('BUTTON');
//contain.append(button);
//button.id = "RESTART";
//button.addEventListener('click', () => {


})

//document.querySelector('body').addEventListener('click', ()=>{
    click =!click
})