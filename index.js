const btnOptionX = document.querySelector('.option__x');
const btnOptionO = document.querySelector('.option__o');

const o = '0';
const x = 'x';

let currentPlayer = x;
// let turn_O;

let cells = document.querySelectorAll('.cell');
const cell_0 = document.querySelector('.cell-0');
const cell_1 = document.querySelector('.cell-1');
const cell_2 = document.querySelector('.cell-2');
const cell_3 = document.querySelector('.cell-3');
const cell_4 = document.querySelector('.cell-4');
const cell_5 = document.querySelector('.cell-5');
const cell_6 = document.querySelector('.cell-6');
const cell_7 = document.querySelector('.cell-7');
const cell_8 = document.querySelector('.cell-8');

const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const buttonsRestart = document.querySelectorAll('.btn-restart');

const popUpGameStart = document.querySelector('.pop-up_game-start');
const popUpGameOver = document.querySelector('.pop-up_game-over');
popUpGameOver.classList.add('_hidden');

const messageResult = document.querySelector('.message-result');
const clicks = document.querySelector('.click-count');

const subtitlePlayer = document.querySelector('.subtitle-player');
const subtitleClicks = document.querySelector('.subtitle-clicks');

// Counter
let clickCount = 0;

function Counter() {
    clickCount++;
    clicks.innerHTML = clickCount;
    subtitleClicks.innerHTML = clickCount;
}

// resetCounter
function resetCounter() {
    clickCount = 0;
    clicks.innerHTML = clickCount;
}

// audio
const audio = new Audio();
let isPlay = false;

function playAudio() {
    audio.src = "./assets/audio/classic-click.wav";
    audio.currentTime = 0;
    audio.volume = 0.2;
    audio.play();
    isPlay = true;
}

// for (let i = 0; i < cells.length; i++) {
//     cells[i].addEventListener('click', cellClick);
// }

cells.forEach(cell => {
    cell.addEventListener('click', cellClick);
});

// cellClick
function cellClick() {
    this.innerHTML = currentPlayer;
    // currentPlayer === x ? o : x;
    if (currentPlayer === x) {
        currentPlayer = o;
    } else {
        currentPlayer = x;
    }
    this.removeEventListener('click', cellClick);

    cellClick_o();
    cellClick_x();
    playAudio();
    Counter();
}

// function cellClick(e) {
//   const cell = e.target;
//   let currentPlayer;
//   currentPlayer = turn_O ? o : x;
//   placeMark(cell, currentPlayer);
//   swapTurns();
// }

// function placeMark(cell, currentPlayer) {
//     cell.classList.add(currentPlayer.innerHTML);
// }

// function swapTurns() {
//     turn_O = !turn_O;
// }

btnOptionX.addEventListener('click', () => {
    popUpGameStart.classList.add('_hidden');
});

btnOptionO.addEventListener('click', () => {
    popUpGameStart.classList.add('_hidden');
    // cell_1.innerHTML = x;
});


function win_o() {
    popUpGameOver.classList.remove('_hidden');
    messageResult.innerHTML = `Player ${o} has won!`;
    subtitlePlayer.innerHTML = o;
}

function win_x() {
    popUpGameOver.classList.remove('_hidden');
    messageResult.innerHTML = `Player ${x} has won!`;
    subtitlePlayer.innerHTML = x;
}

function draw() {
    popUpGameOver.classList.remove('_hidden');
    messageResult.innerHTML = `Game ended in a draw!`;
    subtitlePlayer.innerHTML = '';
}

function cellClick_o() {
    if ((cell_0.innerHTML === o) & (cell_1.innerHTML === o) & (cell_2.innerHTML === o)) {
        cell_0.classList.add('_active');
        cell_1.classList.add('_active');
        cell_2.classList.add('_active');
        win_o();
    } else if ((cell_3.innerHTML === o) & (cell_4.innerHTML === o) & (cell_5.innerHTML === o)) {
        cell_3.classList.add('_active');
        cell_4.classList.add('_active');
        cell_5.classList.add('_active');
        win_o();
    } else if ((cell_6.innerHTML === o) & (cell_7.innerHTML === o) & (cell_8.innerHTML === o)) {
        cell_6.classList.add('_active');
        cell_7.classList.add('_active');
        cell_8.classList.add('_active');
        win_o();
    } else if ((cell_0.innerHTML === o) & (cell_3.innerHTML === o) & (cell_6.innerHTML === o)) {
        cell_0.classList.add('_active');
        cell_3.classList.add('_active');
        cell_6.classList.add('_active');
        win_o();
    } else if ((cell_1.innerHTML === o) & (cell_4.innerHTML === o) & (cell_7.innerHTML === o)) {
        cell_1.classList.add('_active');
        cell_4.classList.add('_active');
        cell_7.classList.add('_active');
        win_o();
    } else if ((cell_2.innerHTML === o) & (cell_5.innerHTML === o) & (cell_8.innerHTML === o)) {
        cell_2.classList.add('_active');
        cell_5.classList.add('_active');
        cell_8.classList.add('_active');
        win_o();
    } else if ((cell_0.innerHTML === o) & (cell_4.innerHTML === o) & (cell_8.innerHTML === o)) {
        cell_0.classList.add('_active');
        cell_4.classList.add('_active');
        cell_8.classList.add('_active');
        win_o();
    } else if ((cell_2.innerHTML === o) & (cell_4.innerHTML === o) & (cell_6.innerHTML === o)) {
        cell_2.classList.add('_active');
        cell_4.classList.add('_active');
        cell_6.classList.add('_active');
        win_o();
    } else if (clickCount === 9) {
        draw();
    }
};

function cellClick_x() {
    if ((cell_0.innerHTML === x) & (cell_1.innerHTML === x) & (cell_2.innerHTML === x)) {
        cell_0.classList.add('_active');
        cell_1.classList.add('_active');
        cell_2.classList.add('_active');
        win_x();
    } else if ((cell_3.innerHTML === x) & (cell_4.innerHTML === x) & (cell_5.innerHTML === x)) {
        cell_3.classList.add('_active');
        cell_4.classList.add('_active');
        cell_5.classList.add('_active');
        win_x();
    } else if ((cell_6.innerHTML === x) & (cell_7.innerHTML === x) & (cell_8.innerHTML === x)) {
        cell_6.classList.add('_active');
        cell_7.classList.add('_active');
        cell_8.classList.add('_active');
        win_x();
    } else if ((cell_0.innerHTML === x) & (cell_3.innerHTML === x) & (cell_6.innerHTML === x)) {
        cell_0.classList.add('_active');
        cell_3.classList.add('_active');
        cell_6.classList.add('_active');
        win_x();
    } else if ((cell_1.innerHTML === x) & (cell_4.innerHTML === x) & (cell_7.innerHTML === x)) {
        cell_1.classList.add('_active');
        cell_4.classList.add('_active');
        cell_7.classList.add('_active');
        win_x();
    } else if ((cell_2.innerHTML === x) & (cell_5.innerHTML === x) & (cell_8.innerHTML === x)) {
        cell_2.classList.add('_active');
        cell_5.classList.add('_active');
        cell_8.classList.add('_active');
        win_x();
    } else if ((cell_0.innerHTML === x) & (cell_4.innerHTML === x) & (cell_8.innerHTML === x)) {
        cell_0.classList.add('_active');
        cell_4.classList.add('_active');
        cell_8.classList.add('_active');
        win_x();
    } else if ((cell_2.innerHTML === x) & (cell_4.innerHTML === x) & (cell_6.innerHTML === x)) {
        cell_2.classList.add('_active');
        cell_4.classList.add('_active');
        cell_6.classList.add('_active');
        win_x();
    } else if (clickCount === 9) {
        draw();
    }
};

// buttonsRestart
buttonsRestart.forEach(button => {
    button.addEventListener('click', () => {
        restartGame();
        resetCounter();
        popUpGameOver.classList.add('_hidden');
        popUpGameStart.classList.remove('_hidden');
        currentPlayer = x;
    });
});

function restartGame() {
    cells.forEach(cell => {
        cell.innerHTML = '';
        cell.classList.remove('_active');
        cell.addEventListener('click', cellClick);
    });
}


// function setLocalStorage() {
//     localStorage.setItem('fillCell', cell.innerHTML);
// }
// window.addEventListener('beforeunload', setLocalStorage);

// function getLocalStorage() {
//     if (localStorage.getItem('fillCell')) {
//         cell.innerHTML = localStorage.getItem('fillCell');

//         restartGame();
//     }
// }
// window.addEventListener('load', getLocalStorage);



// function setLocalStorage() {
//     localStorage.setItem('clickCount', clicks.innerHTML);
// }
// window.addEventListener('beforeunload', setLocalStorage);

// function getLocalStorage() {
//     if (localStorage.getItem('clickCount')) {
//         clicks.innerHTML = localStorage.getItem('clickCount');
//     }
// }
// window.addEventListener('load', getLocalStorage);

