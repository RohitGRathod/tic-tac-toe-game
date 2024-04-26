let boxes = document.querySelectorAll(".box")
let userchoice = "X";
let msg = document.querySelector(".msg");
let resetbtn = document.querySelector(".reset");

const winPattern=
[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

]
const showwinner =(winner)=>
{
    msg.classList.remove("hide");
    msg.innerText =`Winner is ${winner}`;
  
}
const wincheck = () =>
{
    for(pattern of winPattern)
    {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
      if(pos1 != "" && pos2!="" && pos3 != "")
      {
        if(pos1==pos2 && pos2 == pos3)
        {
            console.log("winner");
            showwinner(pos1);
            disablebtn();
        }
      }
    }

}
const disablebtn=()=>{
    for(box of boxes)
    {
        box.disabled=true;
    }
}
    
    
boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (userchoice === "X") {
            box.innerText = "X";
            userchoice = "O";
            box.classList.add("x");
        }
        else {
            userchoice = "X";
            box.innerText = "O";
            box.classList.add("o");
        }
        box.disabled=true;
        wincheck();
    })

});
resetbtn.addEventListener("click",() => {
    for(box of boxes)
    {
        box.innerText="";
        box.disabled=false;
        msg.classList.add("hide");
        userchoice="X";
    }

    
})


 

