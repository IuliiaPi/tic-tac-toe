const btnOptionX = document.querySelector('.option__x');
const btnOptionO = document.querySelector('.option__o');

const o = '0';
const x = 'x';

let currentPlayer;

const cells = document.querySelectorAll('.cell');
const cell_0 = document.querySelector('.cell-0');
const cell_1 = document.querySelector('.cell-1');
const cell_2 = document.querySelector('.cell-2');
const cell_3 = document.querySelector('.cell-3');
const cell_4 = document.querySelector('.cell-4');
const cell_5 = document.querySelector('.cell-5');
const cell_6 = document.querySelector('.cell-6');
const cell_7 = document.querySelector('.cell-7');
const cell_8 = document.querySelector('.cell-8');

const buttonsRestart = document.querySelectorAll('.btn-restart');
const popUpGameStart = document.querySelector('.pop-up_game-start');
const popUpGameOver = document.querySelector('.pop-up_game-over');
popUpGameOver.classList.add('_hidden');

const messageResult = document.querySelector('.message-result');

const audio = new Audio();
let isPlay = false;

function playAudio() {
    audio.src = "./assets/audio/classic-click.wav";
    audio.currentTime = 0;
    audio.volume = 0.2;
    audio.play();
    isPlay = true;
}

// currentPlayer = "X";

// function click_X_O() {
//     this.innerHTML = currentPlayer;

//     if (currentPlayer.innerHTML === 'X') {
//         currentPlayer.innerHTML = 'O';
//     } else {
//         currentPlayer.innerHTML = 'X';
//     }
// }
// this.removeEventListener('click', click_X_O);


cells.forEach(cell => {

    // cell.addEventListener('click', click_X_O);


    function cellClick_o() {
        currentPlayer = 'O';
        messageResult.innerHTML = `Player ${currentPlayer} has won!`;

        cell.innerHTML = o;
        playAudio();


        if ((cell_0.innerHTML === o) & (cell_1.innerHTML === o) & (cell_2.innerHTML === o)) {
            cell_0.classList.add('_active');
            cell_1.classList.add('_active');
            cell_2.classList.add('_active');
            popUpGameOver.classList.remove('_hidden');
        } else if ((cell_3.innerHTML === o) & (cell_4.innerHTML === o) & (cell_5.innerHTML === o)) {
            cell_3.classList.add('_active');
            cell_4.classList.add('_active');
            cell_5.classList.add('_active');
            popUpGameOver.classList.remove('_hidden');
        } else if ((cell_6.innerHTML === o) & (cell_7.innerHTML === o) & (cell_8.innerHTML === o)) {
            cell_6.classList.add('_active');
            cell_7.classList.add('_active');
            cell_8.classList.add('_active');
            popUpGameOver.classList.remove('_hidden');
        } else if ((cell_0.innerHTML === o) & (cell_3.innerHTML === o) & (cell_6.innerHTML === o)) {
            cell_0.classList.add('_active');
            cell_3.classList.add('_active');
            cell_6.classList.add('_active');
            popUpGameOver.classList.remove('_hidden');
        } else if ((cell_1.innerHTML === o) & (cell_4.innerHTML === o) & (cell_7.innerHTML === o)) {
            cell_1.classList.add('_active');
            cell_4.classList.add('_active');
            cell_7.classList.add('_active');
            popUpGameOver.classList.remove('_hidden');
        } else if ((cell_2.innerHTML === o) & (cell_5.innerHTML === o) & (cell_8.innerHTML === o)) {
            cell_2.classList.add('_active');
            cell_5.classList.add('_active');
            cell_8.classList.add('_active');
            popUpGameOver.classList.remove('_hidden');
        } else if ((cell_0.innerHTML === o) & (cell_4.innerHTML === o) & (cell_8.innerHTML === o)) {
            cell_0.classList.add('_active');
            cell_4.classList.add('_active');
            cell_8.classList.add('_active');
            popUpGameOver.classList.remove('_hidden');
        } else if ((cell_2.innerHTML === o) & (cell_4.innerHTML === o) & (cell_6.innerHTML === o)) {
            cell_2.classList.add('_active');
            cell_4.classList.add('_active');
            cell_6.classList.add('_active');
            popUpGameOver.classList.remove('_hidden');
        }

    };

    function cellClick_x() {
        currentPlayer = 'X';
        messageResult.innerHTML = `Player ${currentPlayer} has won!`;

        cell.innerHTML = x;
        playAudio();
        // click_XO();

        if ((cell_0.innerHTML === x) & (cell_1.innerHTML === x) & (cell_2.innerHTML === x)) {
            cell_0.classList.add('_active');
            cell_1.classList.add('_active');
            cell_2.classList.add('_active');
            popUpGameOver.classList.remove('_hidden');
        } else if ((cell_3.innerHTML === x) & (cell_4.innerHTML === x) & (cell_5.innerHTML === x)) {
            cell_3.classList.add('_active');
            cell_4.classList.add('_active');
            cell_5.classList.add('_active');
            popUpGameOver.classList.remove('_hidden');
        } else if ((cell_6.innerHTML === x) & (cell_7.innerHTML === x) & (cell_8.innerHTML === x)) {
            cell_6.classList.add('_active');
            cell_7.classList.add('_active');
            cell_8.classList.add('_active');
            popUpGameOver.classList.remove('_hidden');
        } else if ((cell_0.innerHTML === x) & (cell_3.innerHTML === x) & (cell_6.innerHTML === x)) {
            cell_0.classList.add('_active');
            cell_3.classList.add('_active');
            cell_6.classList.add('_active');
            popUpGameOver.classList.remove('_hidden');
        } else if ((cell_1.innerHTML === x) & (cell_4.innerHTML === x) & (cell_7.innerHTML === x)) {
            cell_1.classList.add('_active');
            cell_4.classList.add('_active');
            cell_7.classList.add('_active');
            popUpGameOver.classList.remove('_hidden');
        } else if ((cell_2.innerHTML === x) & (cell_5.innerHTML === x) & (cell_8.innerHTML === x)) {
            cell_2.classList.add('_active');
            cell_5.classList.add('_active');
            cell_8.classList.add('_active');
            popUpGameOver.classList.remove('_hidden');
        } else if ((cell_0.innerHTML === x) & (cell_4.innerHTML === x) & (cell_8.innerHTML === x)) {
            cell_0.classList.add('_active');
            cell_4.classList.add('_active');
            cell_8.classList.add('_active');
            popUpGameOver.classList.remove('_hidden');
        } else if ((cell_2.innerHTML === x) & (cell_4.innerHTML === x) & (cell_6.innerHTML === x)) {
            cell_2.classList.add('_active');
            cell_4.classList.add('_active');
            cell_6.classList.add('_active');
            popUpGameOver.classList.remove('_hidden');
        }
    };



    btnOptionX.addEventListener('click', () => {
        popUpGameStart.classList.add('_hidden');
        cell.addEventListener('click', cellClick_x);
    });

    btnOptionO.addEventListener('click', () => {
        popUpGameStart.classList.add('_hidden');
        cell_0.innerHTML = x;
        cell.addEventListener('click', cellClick_o);
    });


    function setLocalStorage() {
        localStorage.setItem('enterText', cell.innerHTML);
    }
    window.addEventListener('beforeunload', setLocalStorage);

    function getLocalStorage() {
        if (localStorage.getItem('enterText')) {
            cell.innerHTML = localStorage.getItem('enterText');

            restartGame();
        }
    }
    window.addEventListener('load', getLocalStorage);

});


// if (cell_0.classList.contains('_active')) {
//     // cells.forEach(cell => {
//     cell_0.classList.add('_active-3');
//     // });
// }


buttonsRestart.forEach(button => {
    button.addEventListener('click', () => {
        restartGame();
        popUpGameOver.classList.add('_hidden');
        popUpGameStart.classList.remove('_hidden');
    });
});

function restartGame() {
    cells.forEach(cell => {
        cell.innerHTML = '';
        cell.classList.remove('_active');
    });
}



// const winningMessage = () => `Player ${currentPlayer} has won!`;
// const drawMessage = () => `Game ended in a draw!`;
// const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;