
function createDiv(str, className) {
    let div = document.createElement('div');
    div.classList.add(className);
    div.textContent = str;
    return div;
}

function createActiveCell(color, classname) {
    let div = document.createElement('div');
    div.classList.add ('cell');
    if (color === 'light') {
        div.classList.add('light');
        div.classList.add(classname)
    } else {
        div.classList.add('brown');
        div.classList.add(classname)
    }
    return div;
}
function createChess(type, color) {
    let chess = document.createElement('i');
    let type_chess = 'fa-chess-' + type;
    chess.classList.add('fas', type_chess, color);
    return chess
}

let container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

let alph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
for (let i = 0; i < 8; i++) {
    if (i === 0) {
        container.appendChild(createDiv('', 'border_div_min'));
        container.appendChild(createDiv('', 'border_div'));
    } else if (i === 7) {
        container.appendChild(createDiv('', 'border_div'));
        container.appendChild(createDiv('', 'border_div_min'));
    } else {
        container.appendChild(createDiv('', 'border_div'));
    }
}
for (let j = 8; j >= 1; j--) {
    container.appendChild(createDiv(j, 'border_div_min'));
    for (let i = 0; i <= 7; i++)
        if (j % 2 === 0) {
            if( i % 2 === 0){
                container.appendChild(createActiveCell('light', alph[i] + j));
            } else{
                container.appendChild(createActiveCell('brown', alph[i] + j));
            }
        } else {
            if( i % 2 === 0){
                container.appendChild(createActiveCell('brown', alph[i] + j));
            } else{
                container.appendChild(createActiveCell('light', alph[i] + j));
            }
        }
    container.appendChild(createDiv('', 'border_div_min'));
}

for (let i = 0; i < 8; i++) {
    if (i === 0) {
        container.appendChild(createDiv('', 'border_div_min'));
        container.appendChild(createDiv(alph[i], 'border_div'));
    } else if (i === 7) {
        container.appendChild(createDiv(alph[i], 'border_div'));
        container.appendChild(createDiv('', 'border_div_min'));
    } else {
        container.appendChild(createDiv(alph[i], 'border_div'));
    }
}

let cells = container.getElementsByClassName('cell');

cells[0].appendChild(createChess('rook', 'black'));
cells[1].appendChild(createChess('knight', 'black'));
cells[2].appendChild(createChess('bishop', 'black'));
cells[3].appendChild(createChess('queen', 'black'));
cells[4].appendChild(createChess('king', 'black'));
cells[5].appendChild(createChess('bishop', 'black'));
cells[6].appendChild(createChess('knight', 'black'));
cells[7].appendChild(createChess('rook', 'black'));
cells[8].appendChild(createChess('pawn', 'black'));
cells[9].appendChild(createChess('pawn', 'black'));
cells[10].appendChild(createChess('pawn', 'black'));
cells[11].appendChild(createChess('pawn', 'black'));
cells[12].appendChild(createChess('pawn', 'black'));
cells[13].appendChild(createChess('pawn', 'black'));
cells[14].appendChild(createChess('pawn', 'black'));
cells[15].appendChild(createChess('pawn', 'black'));


cells[48].appendChild(createChess('pawn', 'white'));
cells[49].appendChild(createChess('pawn', 'white'));
cells[50].appendChild(createChess('pawn', 'white'));
cells[51].appendChild(createChess('pawn', 'white'));
cells[52].appendChild(createChess('pawn', 'white'));
cells[53].appendChild(createChess('pawn', 'white'));
cells[54].appendChild(createChess('pawn', 'white'));
cells[55].appendChild(createChess('pawn', 'white'));
cells[56].appendChild(createChess('rook', 'white'));
cells[57].appendChild(createChess('knight', 'white'));
cells[58].appendChild(createChess('bishop', 'white'));
cells[59].appendChild(createChess('queen', 'white'));
cells[60].appendChild(createChess('king', 'white'));
cells[61].appendChild(createChess('bishop', 'white'));
cells[62].appendChild(createChess('knight', 'white'));
cells[63].appendChild(createChess('rook', 'white'));
let status = false;
for (const el of cells){
    el.addEventListener('mouseover', function() {
        this.classList.add('blue');
    });
    el.addEventListener('mouseout', function() {
        this.classList.remove('blue');
    });
    el.addEventListener('click', function() {
        if(status === true){

        }
        status = !status;
    })
}
