// Get the name from the first page
const herName = localStorage.getItem("herName");

// Show her name
document.getElementById("herName").textContent = herName || "Princess";

// Selected flower
let selectedFlower = "";

// Choose a flower
function chooseFlower(flower){

    selectedFlower = flower;

    // Save for later pages
    localStorage.setItem("flower", flower);

    // Remove previous selection
    document.querySelectorAll(".flower").forEach(card=>{
        card.classList.remove("selected");
    });

    // Highlight selected card
    document.querySelector("." + flower).classList.add("selected");

    const message = document.getElementById("selectedMessage");

    if(flower==="rose"){

        message.innerHTML=`
        🌹 <b>A Rose.</b><br><br>

        A flower that symbolizes admiration, courage, and love.
        It somehow reminded me of you.

        I hope you'll keep this little rose with you as we continue our story together.
        `;

    }

    if(flower==="lily"){

        message.innerHTML=`
        🤍 <b>A Lily.</b><br><br>

        A flower that represents purity, kindness, and elegance.

        It reminded me of the gentle way you carry yourself.

        Let's keep this lily with us as we turn the next page.
        `;

    }

    // Enable button
    const btn=document.getElementById("continueBtn");

    btn.classList.add("enabled");

}

// Continue
function continueStory(){

    if(selectedFlower==="") return;

    const btn=document.getElementById("continueBtn");

    btn.innerHTML="Turning the page... 📖";

    document.querySelector(".card").style.transition="1.2s";

    document.querySelector(".card").style.transform="rotateY(90deg) scale(.9)";

    document.querySelector(".card").style.opacity="0";

    setTimeout(()=>{

        // Next page
        window.location.href="games.html";

    },1200);

}
