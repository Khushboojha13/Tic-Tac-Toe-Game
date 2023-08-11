let boxes=document.querySelectorAll(".boxes");
let arr= Array.from(boxes);
let winaudio= new Audio("crowd-cheer-ii-6263.mp3");
let pressaudio=new Audio("ping-82822.mp3");
let turn="0";
let para1=document.querySelector(".para1");


function changeturn(){
    pressaudio.play();
    if(turn=="0")
     {
        turn="X";
        pressaudio.play();
        para1.innerText="Turn for Player 0";
        return turn;
     }
    if(turn=="X")
    {
        turn="0";
        pressaudio.play();
        para1.innerText="Turn for Player X";
        return turn;
    }
}

arr.forEach(element=>{
    element.addEventListener("click",()=>{
    //let boxtext=document.querySelector(".text");
    let boxtext=element.querySelector(".text");
   // console.log(boxtext.innerText);
    if(boxtext.innerText==="")
    {
      
        turn=changeturn();
        pressaudio.play();
        boxtext.innerText=turn;
        checkwin();
}
    });

});


let image=document.querySelector("img");


function checkwin(){
    let s1=document.getElementById("s1");
    let s2=document.getElementById("s2");
    let s3=document.getElementById("s3");
    let s4=document.getElementById("s4");
    let s5=document.getElementById("s5");
    let s6=document.getElementById("s6");
    let s7=document.getElementById("s7");
    let s8=document.getElementById("s8");
    let s9=document.getElementById("s9");
    
    if((s1.innerText=="X")&&(s2.innerText=="X")&&(s3.innerText=="X"))
    {
          para1.innerText="Player X won the game";
          image.src="trophy-6387_256.gif";
          reset();
    }
   else if((s1.innerText=="X")&&(s4.innerText=="X")&&(s7.innerText=="X"))
    {
        para1.innerText="Player X won the game";
        image.src="trophy-6387_256.gif";
        reset();
    }
   else if((s7.innerText=="X")&&(s8.innerText=="X")&&(s9.innerText=="X"))
    {
        para1.innerText="Player X won the game";
        image.src="trophy-6387_256.gif";
        reset();
    }
   else if((s3.innerText=="X")&&(s6.innerText=="X")&&(s9.innerText=="X"))
    {
        para1.innerText="Player X won the game";
        image.src="trophy-6387_256.gif";
        reset();
    }

   else if((s2.innerText=="X")&&(s5.innerText=="X")&&(s8.innerText=="X"))
    {
        para1.innerText="Player X won the game";
        image.src="trophy-6387_256.gif";
        reset();
    }

  else  if((s4.innerText=="X")&&(s5.innerText=="X")&&(s6.innerText=="X"))
    {
        para1.innerText="Player X won the game";
        image.src="trophy-6387_256.gif";
        reset();
    } 

   else if((s3.innerText=="X")&&(s5.innerText=="X")&&(s7.innerText=="X"))
    {
        para1.innerText="Player X won the game";
        image.src="trophy-6387_256.gif";
        reset();
    }

  else  if((s1.innerText=="X")&&(s5.innerText=="X")&&(s9.innerText=="X" ))
    {
        para1.innerText="Player X  won the game";
        image.src="trophy-6387_256.gif";
        reset();
    }

    
    //Checking for 0 to win
   else if((s1.innerText=="0")&&(s2.innerText=="0")&&(s3.innerText=="0"))
    {
          para1.innerText="Player 0 won the game";
          image.src="trophy-6387_256.gif";
          reset();
    }
   else if((s1.innerText=="0")&&(s4.innerText=="0")&&(s7.innerText=="0"))
    {
        para1.innerText="Player 0 won the game";
        image.src="trophy-6387_256.gif";
        reset();
    }
   else if((s7.innerText=="0")&&(s8.innerText=="0")&&(s9.innerText=="0"))
    {
        para1.innerText="Player 0 won the game";
        image.src="trophy-6387_256.gif";
        reset();
    }
   else if((s3.innerText=="0")&&(s6.innerText=="0")&&(s9.innerText=="0"))
    {
        para1.innerText="Plyer 0 won the game";
        image.src="trophy-6387_256.gif";
        reset();
    }

   else if((s2.innerText=="0")&&(s5.innerText=="0")&&(s8.innerText=="0"))
    {
        para1.innerText="Player 0 won the game";
        image.src="trophy-6387_256.gif";
        reset();
    }

  else  if((s4.innerText=="0")&&(s5.innerText=="0")&&(s6.innerText=="0"))
    {
        para1.innerText="Player 0 won the game";
        image.src="trophy-6387_256.gif";
        reset();
    } 

   else if((s3.innerText=="0")&&(s5.innerText=="0")&&(s7.innerText=="0"))
    {
        para1.innerText="Player 0 won the game";
        image.src="trophy-6387_256.gif";
        reset();
    }

  else  if((s1.innerText=="0")&&(s5.innerText=="0")&&(s9.innerText=="0" ))
    {
        para1.innerText="Player 0 won the game";
        image.src="trophy-6387_256.gif";
        reset();
    }

    else if((s1.innerText=="X"||s1.innerText=="0")&&(s2.innerText=="X"||s2.innerText=="0")&&(s3.innerText=="X"||s3.innerText=="0")&&(s4.innerText=="X"||s4.innerText=="0")&&(s5.innerText=="X"||s5.innerText=="0")&&(s6.innerText=="X"||s6.innerText=="0")&&(s7.innerText=="X"||s7.innerText=="0")&&(s8.innerText=="X"||s8.innerText=="0")&&(s9.innerText=="X"||s9.innerText=="0")){
        para1.innerText="Game Tie";
        reset();
    }
}


function reset(){
     let btn=document.querySelector("button");
     let spans=document.querySelectorAll(".text");
      let arr1=Array.from(spans);
     console.log(arr1);
     btn.addEventListener("click",()=>{
        arr1.forEach(e=>{
            console.log(e.inertext);
            e.innerText=" ";
            image.src=" ";
            textchange();
        })        
     })
}

function textchange(){
    para1.innerText="Turn for Player X";
}


