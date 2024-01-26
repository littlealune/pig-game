const playerOneScoreBoard = document.getElementById('score--0')
const playerTwoScoreBoard = document.getElementById('score--1')
const currentOneScore = document.getElementById('current--0')
const currentTwoScore = document.getElementById('current--1')
const newGameButton = document.querySelector('.btn--new')
const rollDiceButton = document.querySelector('.btn--roll')
const holdButton = document.querySelector('.btn--hold')
const currentDice = document.querySelector('.dice')
let currentPlayer = 1
let currentPlayerScore
let currentScoreBoard
let currentDiceValue

const initPigGame = function () {
  //TODO: fix initPigGame
  playerOneScoreBoard.textContent = 0
  playerTwoScoreBoard.textContent = 0
  currentOneScore.textContent = 0
  currentTwoScore.textContent = 0
  currentPlayer = 1
  currentPlayerScore = 0
  playerOneScoreBoard.classList.add('player--active')
  rollDice
}
const rollDice = function () {
  const diceImageArray = ['dice-1.png', 'dice-2.png', 'dice-3.png', 'dice-4.png', 'dice-5.png', 'dice-6.png']
  currentDiceValue = Math.floor((Math.random() * 6) + 1)
  currentDice.src = diceImageArray[(currentDiceValue-1)]

  const currentScoreElement = (currentPlayer === 1 ) ? currentOneScore : currentTwoScore

  if(currentDiceValue!=1){
    currentPlayerScore += currentDiceValue
    currentScoreElement.textContent = currentPlayerScore
  }else{
    changePlayer
  }
}
const changePlayer = function(){
  currentPlayer = (currentPlayer === 1) ? 2 : 1
  currentPlayerScore = 0
  togglePlayer
}

const holdScore = function() {
  const currentScore = Number(currentScoreBoard.textContent)
  currentScoreBoard.textContent = isNaN() ? currentPlayerScore : currentScore + currentPlayerScore
  currentPlayerScore = 0
  changePlayer
}

const togglePlayer = function(){
  playerOneScoreBoard.classList.toggle('player--active')
  playerTwoScoreBoard.classList.toggle('player--active')
}

/*const selectWinner = function() {
  if(currentPlayer){

  }
}*/


initPigGame

rollDiceButton.addEventListener('click', rollDice)

newGameButton.addEventListener('click',initPigGame)

holdButton.addEventListener('click', holdScore)