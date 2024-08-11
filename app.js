let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg"); 

let turnO = true; //playerX playerO

let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const showWinner = (winner)=>{
    msg.innerText = `${winner} won`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const resetGame=()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const checkWinner= () =>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val !=="" && pos2Val !== "" && pos3Val !== ""){
        if(pos1Val == pos2Val && pos2Val == pos3Val){
            disableBoxes();
            showWinner(pos1Val);
        }
    }
}}

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

resetBtn.addEventListener("click",resetGame);

for(let i =0;i<9;i++){
    let cond = "";
    if(box[0]==cond && box[1]==cond && box[2]==cond && box[3]==cond && box[4]==cond && box[5]==cond && box[6]==cond && box[7]==cond && box[8]==cond){
        showWinner("No One\n DRAW");
    }
}