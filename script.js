function openBook(){

const name=document.getElementById("name").value.trim();

if(name===""){

alert("Please enter your name first 🌹");

return;

}

localStorage.setItem("herName",name);

document.querySelector(".book").style.transition="1.5s";

document.querySelector(".book").style.transform="scale(.9) rotateY(90deg)";

document.querySelector(".book").style.opacity="0";

setTimeout(()=>{

window.location.href="flowers.html";

},1500);

}
