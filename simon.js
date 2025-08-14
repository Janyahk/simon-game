let p=document.querySelector("h3");
let box=document.querySelectorAll(".box");
// let h3=document.querySelector("h3");
let g=[];
 let s=[];
// let high=0;
 let c=["red","green","yello","blue"];

 let started=false;
 let level=0;
let high = localStorage.getItem("highScore") || 0;
document.querySelector("h4").innerText = `Highest Score: ${high}`;

document.addEventListener("keypress",function(){
   if(started==false){
    console.log("game start");
       started=true;
       levelup();
   }else{
    levelup();
   }
   
      
});

function levelup(){
    s=[];
    level++;
    p.innerText=`level ${level}`;

    let i=Math.floor(Math.random()*4);
    console.log(box[i]);
        buttonflash(i);
        g.push(i);
        console.log(g);
}

function buttonflash(i){
    box[i].classList.add("white");
    setTimeout(()=>{
    //   console.log("color removed");
        box[i].classList.remove("white");
    },250);
    

}

// function userflash(i){
//     box[i].classList.add("userflash");
//     setTimeout(()=>{
//       console.log("color removed");
//         box[i].classList.remove("userflash");
//     },250);
// }

function check(i){
    // console.log("current level",level);
    
    if(s[i]==g[i]){
        if(s.length == g.length){
            setTimeout(levelup,1000);
            
        }
    //  console.log("same value");
    } else {
                Highest();

        p.innerHTML=`gamer over!Your score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },1500);
        reset();

    }
}
    let con=document.createElement("h1");

function Highest(){
if(high<level){
    high=level;
 con.innerText = "🎉 Congratulations! New highest score in the Simon game!";
    con.style.color = "gold";
    con.style.fontSize = "2rem";
    con.style.textShadow = "2px 2px 5px black";
    p.insertAdjacentElement("beforebegin", con);

    localStorage.setItem("highScore", high);
}
    document.querySelector("h4").innerText = `Highest Score: ${high}`;

}
function buttonpress(){
    if(started==true){
    // console.log("buttonpress");
    console.dir(this);
    buttonflash(this.id);

    usercolor=this.getAttribute("id");
    // console.log("id=",usercolor);
    s.push(usercolor);
    // console.log(s);
    check(s.length-1);}
    else{
       p.style.fontSize = "30px";
    p.style.color = "red";

    setTimeout(function () {
        p.style.removeProperty("color");
        p.style.removeProperty("font-size");
    }, 2000);
    }
}

for(btn of box){
    btn.addEventListener("click",buttonpress)
}
function reset(){
    started=false;
    g=[];
    s=[];
    level=0;
    con.innerText=" ";
}