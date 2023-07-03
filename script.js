let userName = prompt("What's your name?");
let welcomeDiv = document.getElementById('welcome');
welcomeDiv.innerHTML = "Hi " + userName;


function getComputerChoice() {
    choice=['Rock','Paper','Scissors']
    let ComputerChoice=choice[Math.floor(Math.random()*3)]
    console.log(ComputerChoice)
}

function getResult(playerChoice, computerChoice) {
  if(computerChoice===playerChoice){
    score=0
  }
  else if(computerChoice==='Paper' && playerChoice==='Scissors') {
    score=1
  }
  else if(computerChoice==='Rock' && playerChoice==='Paper'){
    score=1
  }
  else if(computerChoice==='Scissors' && playerChoice==='Rock'){
    score=1
  }
  else{
    score=-1
  }
  return score  
}

function showResult(score, playerChoice, computerChoice) {
    let result = document.getElementById('result')
    switch(score){
        case 0:
            result.innerText=(`It's a Draw 🤷‍♂️`)
            break;
        case 1:
            result.innerText=(`You Win! 😎`)
            break;
        case 2:
            result.innerText=(`You Lose 😢`)
            break;
    }
    let playerScore = document.getElementById('player-score')
    let hands = document.getElementById('hands')
    playerScore.innerText=(`${Number(playerScore.innerText) + score}`)
    hands.innerText=(`👤Your Choice ${playerChoice} vs 🤖Computer Choice ${computerChoice}`)
}

function onClickRPS(PlayerChoice) {
    const computerChoice=getComputerChoice()
    const score=getResult(PlayerChoice.value,computerChoice)
    showResult(score,PlayerChoice.value,computerChoice)
}

function playGame() {
    let rpsButtons=document.querySelectorAll(`.rpsButton`)
    rpsButtons.forEach (rpsButton=> {
        rpsButton.onclick = () => onClickRPS(rpsButton)
    })

    let endGameButton=document.getElementById('endGameButton')
    endGameButton.onclick=()=>endGame()
}

function endGame() {
    let playerScore = document.getElementById('player-score')  
    let hands = document.getElementById('hands')
    let result = document.getElementById('result')
    playerScore.innerText=``
    hands.innerText=``
    result.innerText=``
}

playGame()