//Recupero gli elementi
const grid = document.getElementById('grid');
const form = document.getElementById('form');




form.addEventListener('submit', function(event){
    event.preventDefault()
    
    
    //Creo una griglia
    const rows = 10;
    const cols = 10;
    const totalCells = rows * cols;
    
    for (let i = 0; i < totalCells; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
    }
    
})
