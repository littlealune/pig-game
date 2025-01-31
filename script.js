const playerOne = document.querySelector('.player--0')
const playerTwo = document.querySelector('.player--1')
const namePlayerOne = document.querySelector('#name--0')
const namePlayerTwo = document.querySelector('#name--1')
const playerOneScoreBoard = document.getElementById('score--0')
const playerTwoScoreBoard = document.getElementById('score--1')
const currentOneScore = document.getElementById('current--0')
const currentTwoScore = document.getElementById('current--1')
const newGameButton = document.querySelector('.btn--new')
const rollDiceButton = document.querySelector('.btn--roll')
const holdButton = document.querySelector('.btn--hold')
const currentDice = document.querySelector('.dice')
let currentPlayer = 1
let currentPlayerScore = 0

const initPigGame = function () {
  //Configure starting variables
  playerOneScoreBoard.textContent = '0'
  playerTwoScoreBoard.textContent = '0'
  currentOneScore.textContent = '0'
  currentTwoScore.textContent = '0'
  currentPlayer = 1
  currentPlayerScore = 0
  namePlayerOne.textContent = 'Player 1'
  namePlayerTwo.textContent = 'Player 2'
  playerOne.classList.add('player--active')
  playerTwo.classList.remove('player--active')
  playerOne.classList.remove('player--winner')
  playerTwo.classList.remove('player--winner')
  rollDice()
}
const rollDice = function () {
  //generates a random number betweeen 0-5 and selects the corresponding image, and in case it rolls a 1, it sets the sum of poinst to zero
  const diceImageArray = ['dice-1.png', 'dice-2.png', 'dice-3.png', 'dice-4.png', 'dice-5.png', 'dice-6.png']
  const currentDiceValue = Math.floor((Math.random() * 6) + 1)
  currentDice.src = diceImageArray[(currentDiceValue-1)]

  const currentScoreElement = (currentPlayer === 1 ) ? currentOneScore : currentTwoScore

  if(currentDiceValue!=1){
    currentPlayerScore += currentDiceValue
    currentScoreElement.textContent = currentPlayerScore
  }else{
    currentPlayerScore = 0
    currentScoreElement.textContent = currentPlayerScore
    changePlayer()
  }
}
const changePlayer = function(){
  //changes the players
  currentPlayer = (currentPlayer === 1) ? 2 : 1
  currentPlayerScore = 0
  togglePlayer()
}

const holdScore = function() {
  //function for the hold score button
  const currentScoreElement = (currentPlayer === 1) ? playerOneScoreBoard : playerTwoScoreBoard
  const currentScore = Number(currentScoreElement.textContent)

  if (!isNaN(currentScore)){
    currentScoreElement.textContent = currentScore + currentPlayerScore
    currentPlayerScore = 0
    if(isWinner(Number(currentScoreElement.textContent))){
      selectWinner()
    }else{
      changePlayer()
    }
  }
}

const togglePlayer = function(){
  //Toggles the "player--active" class on each player
  playerOne.classList.toggle('player--active')
  playerTwo.classList.toggle('player--active')
}
const isWinner = function(currentScoreElement)  {
  return currentScoreElement >= 100
}
const selectWinner = function() {
  //adds the class "player-winner" to the player that has reached 100 points or more
  if(currentPlayer === 1){
    playerOne.classList.add('player--winner')
    namePlayerOne.textContent= 'Winner'
  }else{
    playerTwo.classList.add('player--winner')
    namePlayerTwo.textContent= 'Winner'
  }
}

//listeners for the buttons

document.addEventListener('DOMContentLoaded' , initPigGame)

rollDiceButton.addEventListener('click', rollDice)

newGameButton.addEventListener('click',initPigGame)

holdButton.addEventListener('click', holdScore)