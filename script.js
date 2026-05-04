let userScore=0;
let comptuerScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#userScore");
const compScorepara=document.querySelector("#computerScore");

const genCompChoice=()=>{
    //rock, paper, scissors
    const options=["rock","paper","scissors"]
   const randomIndx = Math.floor(Math.random() * 3);
    return options[randomIndx];
    
}

const drawGame=()=>{
    console.log("The Game was a draw");
    msg.innerText="Game was Draw, Play Again!";
     msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,computerChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
       comptuerScore++;
        compScorepara.innerText=comptuerScore;
        msg.innerText=`You Lose! Computer ${computerChoice} beats ${userChoice}`;
         msg.style.backgroundColor="red";
    }
}

const playGame=(UserChoice) =>{
    console.log("User CHoice is: ", UserChoice);
    //Generated computer choice-->Modular way of work
    const computerChoice=genCompChoice();
       console.log("Computer Choice is: ", computerChoice);

       if(UserChoice===computerChoice){
            drawGame();
       }
       else{
        let userWin=true;
        if(UserChoice==="rock"){
          userWin =computerChoice ==="paper"? false : true;
        }
         if(UserChoice==="paper"){
           userWin= computerChoice ==="scissors"?false: true;
        } 
        if(UserChoice==="scissors"){
           userWin = computerChoice ==="rock"?false: true;
        }
        showWinner(userWin,UserChoice,computerChoice);
       }
}

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
       const UserChoice=choice.getAttribute("id");
       playGame(UserChoice);
    });
});