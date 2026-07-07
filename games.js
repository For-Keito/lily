// Get her name
const herName = localStorage.getItem("herName") || "Princess";
document.getElementById("welcome").innerHTML = `Welcome, ${herName} 🌹`;

const message = document.getElementById("message");

let game1Done = false;
let game2Done = false;
let game3Done = false;

let candlesLit = 0;
let bookOrder = [];
const correctOrder = ["blue","green","red"];

// -------------------------
// GAME 1
// -------------------------

function wrongFlower(){

    message.innerHTML = `
    ❌ That flower is beautiful...
    <br><br>
    But the enchanted rose is still waiting to be found.
    `;

}

function correctFlower(){

    if(game1Done) return;

    game1Done = true;

    message.innerHTML = `
    🌹✨ Wonderful!

    <br><br>

    You found the Enchanted Rose.

    <br><br>

    The library feels a little more magical now.
    `;

    document.getElementById("step1").classList.add("complete");

    setTimeout(()=>{

        document.getElementById("game1").style.display="none";
        document.getElementById("game2").style.display="block";

        message.innerHTML="";

    },2200);

}

// -------------------------
// GAME 2
// -------------------------

function lightCandle(candle){

    if(candle.classList.contains("lit")) return;

    candle.classList.add("lit");

    candle.innerHTML="🔥";

    candlesLit++;

    if(candlesLit===3){

        game2Done=true;

        document.getElementById("step2").classList.add("complete");

        message.innerHTML=`
        ✨ The library has become warm and bright.

        <br><br>

        One last challenge remains.
        `;

        setTimeout(()=>{

            document.getElementById("game2").style.display="none";
            document.getElementById("game3").style.display="block";

            message.innerHTML="";

        },2200);

    }

}

// -------------------------
// GAME 3
// -------------------------

function tapBook(color){

    bookOrder.push(color);

    if(bookOrder.length===correctOrder.length){

        if(JSON.stringify(bookOrder)===JSON.stringify(correctOrder)){

            game3Done=true;

            document.getElementById("step3").classList.add("complete");

            message.innerHTML=`
            📚✨

            Every book has returned to its place.

            <br><br>

            The library doors slowly open...

            <br><br>

            Someone has been waiting to tell you something.
            `;

            document.getElementById("continueBtn").style.display="inline-block";

        }else{

            message.innerHTML=`
            🤭 Oops!

            That wasn't the correct order.

            Try again.
            `;

            bookOrder=[];

        }

    }

}

// -------------------------
// CONTINUE
// -------------------------

function continueLetter(){

    document.querySelector(".card").style.transition="1.2s";
    document.querySelector(".card").style.opacity="0";
    document.querySelector(".card").style.transform="scale(.95)";

    setTimeout(()=>{

        window.location.href="letter.html";

    },1200);

}
