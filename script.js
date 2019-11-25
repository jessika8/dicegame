
let playerOneScore = 0;
let playerTwoScore = 0;
let playerOneTurn = true;
let playerTwoTurn = false;


const rollButton = document.querySelector(".rollButton");
const newGameButton = document.querySelector(".newGameButton");
const diceImage = document.querySelector(".diceImage");
document.querySelector(".newGameButton").style.color ="red"

rollButton.style.visibility = "hidden"


newGameFunction = () => {
        document.querySelector(".playerOneScore").textContent = `Your score is ${playerOneScore}`;
        document.querySelector(".playerTwoScore").textContent = `Your score is ${playerTwoScore}`;
        document.querySelector(".playerOneInfo").textContent = ("Player One");
        document.querySelector(".playerOneInfo").style.color ="white"
        document.querySelector(".playerTwoInfo").textContent = ("Player Two");
        document.querySelector(".playerTwoInfo").style.color ="white";
    
    newGameButton.style.visibility = "hidden";
    rollButton.style.visibility = "visible"
}

newGameButton.addEventListener("click", () => {
    newGameFunction();
})

rollButton.addEventListener("click", () => {
    let randomRoll = Math.floor(Math.random() * 6) + 1;
    diceImage.src = `img/dice${randomRoll}.png`;

    if (playerOneTurn == true) {
        if (randomRoll != 1) {
            playerOneScore += randomRoll
            playerOneTurn = false
            playerTwoTurn = true
            // console.log(`Your score is ${playerOneScore}`)
            document.querySelector(".playerOneScore").textContent = `Your score is ${playerOneScore}`;
            document.querySelector(".playerOneInfo").textContent = "Player ONE is rolling";
            hasThePlayerWon();
        }
        else {
            playerOneScore = 0;
            // console.log(`Your score is ${playerOneScore}`)
            document.querySelector(".playerOneScore").textContent = "You rolled a ONE"
            document.querySelector(".playerOneInfo").textContent = "GAME OVER!"
            document.querySelector(".playerOneInfo").style.color ="red"
            document.querySelector(".playerTwoInfo").textContent = "Start a new game!"
            document.querySelector(".playerTwoScore").textContent = `Player TWO score is: ${playerTwoScore}`;
            playerTwoScore = 0;
            gameOver()
           
        }

    }
    else if (playerTwoTurn == true) {
        if (randomRoll != 1) {
            playerTwoScore += randomRoll
            playerTwoTurn = false;
            playerOneTurn = true
            console.log(`Your score is ${playerTwoScore}`)
            document.querySelector(".playerTwoScore").textContent = `Your score is ${playerTwoScore}`;
            document.querySelector(".playerTwoInfo").textContent = "Player TWO is rolling";
            hasThePlayerWon();
        }
        else{
            playerTwoScore = 0;
            document.querySelector(".playerTwoScore").textContent = "You rolled a ONE";
            document.querySelector(".playerTwoInfo").textContent = "GAME OVER";
            document.querySelector(".playerTwoInfo").style.color ="red"
            document.querySelector(".playerOneInfo").textContent = "Start a new game";
            document.querySelector(".playerOneScore").textContent = `Player ONE score is: ${playerTwoScore}`;
            playerOneScore = 0;
            gameOver()
            
        }
    }
    
})

const hasThePlayerWon = () => {
    if (playerOneScore > 20) {
        console.log("Winner")
        document.querySelector(".playerOneInfo").textContent = ("YOU WON!");
        document.querySelector(".playerOneInfo").style.color ="red"
        document.querySelector(".playerTwoInfo").textContent = ("YOU LOSE!");
        playerOneScore = 0;
        playerTwoScore = 0;
        gameOver()
        
    }
    else if ( playerTwoScore > 20) {
        console.log("Winner")
        document.querySelector(".playerTwoInfo").textContent = ("YOU WON!");
        document.querySelector(".playerOneInfo").style.color ="red"
        document.querySelector(".playerOneInfo").textContent = ("YOU LOSE!")
        playerTwoScore = 0;
        playerOneScore = 0;
        gameOver()
    }
}

const gameOver = () => {
        playerOneScore = 0;
        playerTwoScore = 0;
        newGameButton.style.visibility = "visible";
        rollButton.style.visibility = "hidden"
       

}


// const takingTurns = () => {
//     if (playerOneTurn) {
//         playerOneTurn = false
//         playerOneTurn.classList.toggle("playerTwoScore")
//         console.log("Its not Player one turn")
//     }
//     else {
//         playerOneTurn = true
//     }
// }