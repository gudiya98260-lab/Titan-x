/* ======================================
   TITAN-X v0.1 Alpha
   SCRIPT.JS - PART 1
====================================== */

// ===== LIVE CLOCK =====

const clock = document.getElementById("clock");

function updateClock(){

    const now = new Date();

    const time = now.toLocaleTimeString();

    if(clock){

        clock.innerHTML = time;

    }

}

setInterval(updateClock,1000);

updateClock();


// ===== MATRIX RAIN =====

const canvas = document.getElementById("matrix");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters =
"ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&@";

const fontSize = 16;

const columns = canvas.width / fontSize;

const drops = [];

for(let i=0;i<columns;i++){

    drops[i]=1;

}

function drawMatrix(){

    ctx.fillStyle="rgba(0,0,0,0.06)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="#00ff66";
    ctx.font=fontSize+"px monospace";

    for(let i=0;i<drops.length;i++){

        const text=
        letters[Math.floor(Math.random()*letters.length)];

        ctx.fillText(text,i*fontSize,drops[i]*fontSize);

        if(drops[i]*fontSize>canvas.height &&
        Math.random()>0.975){

            drops[i]=0;

        }

        drops[i]++;

    }

}

setInterval(drawMatrix,35);


// ===== TERMINAL =====

const terminal =
document.querySelector(".terminal");

setTimeout(()=>{

if(terminal){

terminal.innerHTML +=
"<br>> AI Core Loaded";

}

},2000);

setTimeout(()=>{

if(terminal){

terminal.innerHTML +=
"<br>> Security System Online";

}

},4000);

setTimeout(()=>{

if(terminal){

terminal.innerHTML +=
"<br>> Welcome Commander";

}

},6000);


// ===== WINDOW RESIZE =====

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

});
