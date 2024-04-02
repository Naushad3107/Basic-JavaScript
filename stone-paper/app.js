let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = [rock,paper,scissors];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const showWinner =(userWin,userChoice,compChoice,compsc) => {
    if (userWin) {
        // console.log("you win!");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win , ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        // console.log("you lose");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerHTML =`You Lose , ${userChoice} loses to ${compChoice}`;
        msg.style.backgroundColor = "red";
    }

}


const playgame = (userChoice) => {
    // console.log("user choice :" , userChoice);
    //generate comp choice
    const compChoice = genCompChoice().getAttribute("id");
    // console.log("comp choice :" , compChoice)

    if(userChoice === compChoice){
        drawGame();
        msg.innerHTML = "Its a Draw. Play again?"
        msg.style.backgroundColor = "grey";
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors ,paper
            userWin = compChoice === "paper" ? false :true ;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false :true;
        }else {
            userWin = compChoice === "rock" ? false :true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
};

const drawGame = () =>{
    console.log("game is draw");
}

choices.forEach((choice) => {
// console.log(choice);
choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id")
    // console.log("choice was clicked", userChoice);
    playgame(userChoice);
});
});