const playerOneScoreBoard = document.getElementById('score--0')
const playerTwoScoreBoard = document.getElementById('score--1')
const currentOneScore = document.getElementById('current--1')
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
  currentPlayer = 1
  playerOneScoreBoard.classList.add('player--active')
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
    togglePlayer
  }else{
    currentScoreBoard = playerTwoScoreBoard
    currentPlayer = 1
  }
  currentPlayerScore = currentScoreBoard.textContent
  togglePlayer
}

//TODO: holdScore

const holdScore = function() {
  currentScoreBoard.textContent += currentPlayerScore
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