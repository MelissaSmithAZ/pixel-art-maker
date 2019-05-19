let grid = document.getElementById('grid')
let selectedColor = "";
let colors = ['red','green','blue','silver','purple','yellow','gold','orange']

function creatGrid(){
   
    for(let i=0;i<50;i++){
        let newRow = document.createElement('div');
        newRow.classList.add('row')
        for(let j=0;j<50;j++){
            let newCol = document.createElement('div');
            newCol.classList.add('square')
            newCol.onclick = function(){
                newCol.style.backgroundColor = selectedColor;

            }   
        newRow.appendChild(newCol)
        
        }
    grid.appendChild(newRow)
    }

}
creatGrid()


function createPalette(){

    let newRow = document.createElement('div');
    newRow.classList.add('row')
    for(let j=0;j<colors.length;j++){
        let newCol = document.createElement('div');
        newCol.classList.add('square')
        newCol.onclick = function(){
            selectedColor = colors[j];
           
        
        }   
        newCol.style.backgroundColor = colors[j]
        newCol.classList.add('circle')
        newRow.appendChild(newCol)
        
    }
    grid.appendChild(newRow)
}
createPalette();