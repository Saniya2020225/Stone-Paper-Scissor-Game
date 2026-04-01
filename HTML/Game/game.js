let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const genComputerChoice = () => {
    const options = ["stone","paper","scissor"];
   const randIdx =  Math.floor(Math.random() * 3);
   return options[randIdx];
    //stone,paper,scissor
};

const drawGame = () => {
    msg.innerText = "Game was draw, play again!🧐";
    msg.style.backgroundColor = "blue";
};

const showWinner = (userWin, userChoice,computerChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win!🏆 Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = `you lost!🙁 ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
} ;

const playGame = (userChoice) => {
 console.log("user choice = ",userChoice);
 //Generate computer choice
 const computerChoice = genComputerChoice();
 console.log("computer choice = ",computerChoice);

 if(userChoice === computerChoice){
    //drawgame
    drawGame();
 } else{
    let userWin = true;
    if(userChoice === "stone"){
        //scissor,paper
        userWin = computerChoice === "paper" ? false: true;
    }else if(userChoice === "paper") {
        //stone,scissor
       userWin= computerChoice === "scissor" ? false : true;
    } else{
       //stone,paper
       userWin = computerChoice === "stone" ? false : true;
    }
    showWinner(userWin,userChoice,computerChoice);
 }
};


choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
    });
});