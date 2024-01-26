const playerOneScoreBoard = document.querySelector('#score--0')
const playerTwoScoreBoard = document.querySelector('#score--1')
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
  currentPlayer = 1
  enablePlayer
  rollDice
}
const rollDice = function () {
  const diceImageArray = ['dice-1.png', 'dice-2.png', 'dice-3.png', 'dice-4.png', 'dice-5.png', 'dice-6.png']
  currentDiceValue = Math.floor((Math.random() * 6) + 1)
  currentDice.src = diceImageArray[(currentDiceValue-1)]
  if(currentDiceValue!=1){
    currentPlayerScore += currentDiceValue
    currentScoreBoard.textContent = currentPlayerScore
  }else{
    changePlayer
  }
}
const changePlayer = function(){
  if (currentPlayer == 1){
    currentScoreBoard = playerTwoScoreBoard
    currentPlayer = 2
  }else{
    currentScoreBoard = playerTwoScoreBoard
    currentPlayer = 1
  }
  currentPlayerScore = currentScoreBoard.textContent
}


const enablePlayer = function(){
  //TODO: add enable player function
}

initPigGame

rollDiceButton.addEventListener('click', rollDice)