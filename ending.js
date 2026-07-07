// =====================================
// Ending Page
// ending.js
// =====================================

// Get the name entered on the first page
const herName = localStorage.getItem("herName") || "Keito";

// Display greeting
document.getElementById("finalGreeting").innerHTML =
`Thank you for reading, ${herName}. 💗`;


// ------------------------------
// Fade-in animation
// ------------------------------

window.onload = () => {

    document.querySelector(".card").style.opacity = "0";
    document.querySelector(".card").style.transform = "translateY(40px)";

    setTimeout(() => {

        document.querySelector(".card").style.transition = "1.5s";

        document.querySelector(".card").style.opacity = "1";

        document.querySelector(".card").style.transform = "translateY(0)";

    },300);

    startConfetti();

}


// ------------------------------
// Read Again Button
// ------------------------------

function restartStory(){

    document.querySelector(".card").style.transition="1s";
    document.querySelector(".card").style.opacity="0";
    document.querySelector(".card").style.transform="scale(.95)";

    setTimeout(()=>{

        window.location.href="index.html";

    },1000);

}



// ------------------------------
// Tiny Confetti
// ------------------------------

function startConfetti(){

    for(let i=0;i<60;i++){

        createHeart();

    }

}

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML=Math.random()>0.5?"💗":"🌹";

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.top="-40px";

    heart.style.fontSize=(18+Math.random()*18)+"px";

    heart.style.opacity=".9";

    heart.style.pointerEvents="none";

    heart.style.transition="transform linear";

    document.body.appendChild(heart);

    const duration=5000+Math.random()*4000;

    requestAnimationFrame(()=>{

        heart.style.transform=
        `translateY(${window.innerHeight+100}px)
         rotate(${Math.random()*720}deg)`;

        heart.style.transition=`transform ${duration}ms linear`;

    });

    setTimeout(()=>{

        heart.remove();

    },duration);

}



// ------------------------------
// Floating Hearts Forever
// ------------------------------

setInterval(()=>{

    createHeart();

},700);



// ------------------------------
// Console Easter Egg 💗
// ------------------------------

console.log(
"%cMade with love for Keito 💗",
"color:#e91e63;font-size:18px;font-weight:bold;"
);

console.log(
"%cEvery line of code was written with sincerity.",
"color:#8B4513;font-size:14px;"
);
