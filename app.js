let userScore=0;
let comScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#computer-score");

const genCompChoice=()=>{
    const option=["rock","paper","scissors"];
    const randIndx=Math.floor(Math.random()*3);
    return option[randIndx];
}
const drawGame=()=>{
    
    msg.innerText="game was draw!.play again!";
    msg.style.backgroundColor="#081b31";
}
const showWin=(userWin)=>{
    if(userWin){
        userScore++
        userScorePara.innerText=userScore;
        msg.innerText="You Win!";
        msg.style.backgroundColor="green";
    }else{
        comScore++;
        compScorePara.innerText=comScore;
        msg.innerText="You lose!";
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    console.log("userchoice",userChoice);
    //computer choice
    const compChoice=genCompChoice();
    console.log("compchoice",compChoice);
    if(userChoice==compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //comp=scissors,paper
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            //compchoice=rock,scissors
            userWin=compChoice==="scissors"?false:true;
        }else{
            //compChoice
            userWin=compChoice==="rock"?false:true;
        }
        showWin(userWin);
    }
}


//function to select userchoice
choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})