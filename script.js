const startBtn = document.querySelector('#start')
const gameBoard = document.querySelector('#game')
const timeHeader = document.querySelector('#time-header')
const resultHeader = document.querySelector('#result-header')
const timeElm = document.querySelector('#time')
const resultElm = document.querySelector('#result')
const gameTimeInput = document.querySelector('#game-time')

let score = 0
let time = Number(gameTimeInput.value)
let timerId = null