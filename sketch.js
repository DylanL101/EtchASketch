const contain = document.getElementById("contain");
//let click =true;
let error = "ERROR: insert a number between 2 and 100!";



function createGrid( rows, columns) {
 while (document.querySelector('button') !== null) {
     document.querySelector('button').remove();
 }
    
    contain.style.setProperty('--grid-rows', rows);
    contain.style.setProperty('--grid-cols', columns);
    contain.style.overflow = 'hidden';
    contain.style.width = '960px';
    for (i = 0; i < (rows*columns); i++) {
        let box= document.createElement('div');
        box.style.minWidth ='0';
        box.style.minHeight = '0';
        box.style.overflow = 'hidden';
        // box.innerText = (i + 1);
        contain.appendChild(box).className = "gridBox";
        box.addEventListener( 'mouseover', () => {
            box.style.backgroundColor = 'red';

        })
    };
    userButton();
};
function userButton(){
    const btn = document.querySelector('#btn');
    const restart = document.createElement('button');
    restart.textContent ="Restart Game!";
    restart.style.padding = "10px";
    restart.style.margin = "20px";
    btn.appendChild(restart);
    restart.addEventListener('click', () => {
        document.querySelectorAll('.gridBox').forEach(e => e.remove());
        let input = prompt('select a grid size from 2 to 100');
        if ( (input < 2) || (input >100)){
            alert(error);
        }
        rows = input; 
        columns = input;
        createGrid(rows, columns);
    })


}
function createRandomColor(){
    let b = 255;
    let d= Math.round;
    let r = Math.random;
    return 'rgb(' + d(r()*b) + "," + d(r()*b) + ',' + d(r()*b) + ')';
    }
    
createGrid( 16, 16);
 //const button = document.createElement('BUTTON');
//contain.append(button);
//button.id = "RESTART";
//button.addEventListener('click', () => {


//})

 

//document.querySelector('body').addEventListener('click', ()=>{
   
