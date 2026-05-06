const startBtn = document.querySelector('#start');
const gameBoard = document.querySelector('#game');
const timeHeader = document.querySelector('#time-header');
const resultHeader = document.querySelector('#result-header');
const timeElm = document.querySelector('#time');
const resultElm = document.querySelector('#result');
const gameTimeInput = document.querySelector('#game-time');

const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink'];
let score = 0;
let time;
let timerId;

startBtn.addEventListener('click', startGame);

function startGame() {
    score = 0;
    time = Number(gameTimeInput.value);
    startBtn.classList.add('hide');
    resultHeader.classList.add('hide');
    timeHeader.classList.remove('hide');
    timeElm.textContent = time.toFixed(1);
    renderBox();

    timerId = setInterval(function () {
        time -= 0.1;
        timeElm.textContent = time.toFixed(1);
        if (time <= 0) {
            endGame();
        }
    }, 100);
}

function endGame() {
    clearInterval(timerId);

    gameBoard.innerHTML = '';
    startBtn.classList.remove('hide');
    timeHeader.classList.add('hide');
    resultHeader.classList.remove('hide');
    resultElm.textContent = score;
}

function renderBox() {
    gameBoard.innerHTML = '';

    const box = document.createElement('div');
    const boxSize = getRandomNumber(30, 100);

    box.style.width = box.style.height = boxSize + 'px';
    box.style.top = getRandomNumber(0, gameBoard.clientHeight - boxSize) + 'px';
    box.style.left = getRandomNumber(0, gameBoard.clientWidth - boxSize) + 'px';
    box.style.backgroundColor = colors[getRandomNumber(0, colors.length - 1)];
    box.style.position = 'absolute';
    box.style.cursor = 'pointer';
    box.addEventListener('click', function () {
        score++;
        renderBox();
    });

    gameBoard.append(box);
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
