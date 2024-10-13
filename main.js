let userScore=0;
let compScore=0;

const Choices= document.querySelectorAll(".game")
const Mess=document.querySelector("#msg")
const user=document.querySelector("#user-score")
const comp=document.querySelector("#comp-score")

const computerchoice=()=>{
    const own=["stone","paper","scissor"];
    const owns= Math.floor(Math.random()*3);
    return own[owns];
}

const drawGame=()=>{
    console.log("Game draw");
    Mess.innerHTML = "Game was draw play again!";
    Mess.style.backgroundColor="#2f4f4f";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        user.innerHTML=userScore;
        console.log("You Win!");
        Mess.innerHTML = `You won the match! ${userChoice}  beats ${compChoice}`;
        Mess.style.backgroundColor="green";
    }
    else{
        compScore++;
        comp.innerHTML=compScore;
        console.log("You lost!");
        Mess.innerHTML = `You lost the match! ${compChoice} beats your ${userChoice}`;
        Mess.style.backgroundColor="red";
    }
}

const playgame=(userChoice)=>{
    const compChoice= computerchoice();
    console.log("user choice =", userChoice, "computer choice =", compChoice)

    if(userChoice === compChoice)drawGame();
    else{
        let userWin=0;
        if(userChoice === "stone")
            userWin = compChoice === "paper"?false:true;
        else if(userChoice === "paper")
            userWin = compChoice === "scissor"?false:true;
        else{
            userWin = compChoice === "stone"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}


Choices.forEach((game)=>{
    game.addEventListener("click",()=>{
        const userChoice=game.getAttribute("id");
        //console.log("This was selected")
        playgame(userChoice);
    })
})
