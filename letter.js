// Get her name
const herName = localStorage.getItem("herName") || "Keito";

// Greeting
document.getElementById("greeting").innerHTML = `Hey, ${herName}... ❤️`;

const paragraphs = [

`My heart has been whispering something to me for a while now, and I think it's finally time to tell you.`,

`I just can't stop thinking about how amazing you are.`,

`There's something about you that keeps finding its way into my mind, even on ordinary days. You have this quiet effect on me that I can't really explain.....`,

`And honestly, I don't want to ignore it anymore.`,

`I think I'm starting to like you, ${herName}.`,

`If you're reading this, it means I made this little website just for you. Every line of code, every click, and every little detail here was made with you in mind.

It's my own little way of showing you how much you already mean to me.`,

`I just want you to know that I'd like to pursue you, ${herName}.`,

`Whether there's a chance or not, I'm still here, and I'll still choose to court you. I'm not doing this because I'm waiting for reassurance or because I need to know if I have a chance. I'm doing this because I like you and I want to show you that.`,

`For me kasi, courting someone isn't about asking, "May chance ba ako?" or saying, "If you tell me there's no chance, I'll stop." It's about being sincere, showing na you have pure intentions, and being willing to wait even if it takes a long time pa.`,

`I'm not here to pressure you into liking me back. I simply want to be consistent and genuine with how I feel.

And if one day you happen to see me differently and your heart slowly chooses me too, I'd be grateful for that.

But until then, I won't rush you.`,

`I'll let my actions speak louder than my words, because I believe sincerity is shown by what we consistently do, not just by what we say. I hope that, little by little, you'll see that my intentions are real.`,

`For now, allow me to prove to you that my feelings for you are true.`,

`I like you, ${herName}.

— Kai ❤️`

];

const letter = document.getElementById("letter");

let paragraphIndex = 0;

function typeParagraph(){

    if(paragraphIndex >= paragraphs.length){

        setTimeout(()=>{

            document.getElementById("endSection").style.display="block";

            document.getElementById("endSection").scrollIntoView({
                behavior:"smooth"
            });

        },1800);

        return;

    }

    const p = document.createElement("p");

    p.style.opacity = "0";
    p.style.marginBottom = "30px";
    p.style.lineHeight = "2";
    p.style.transition = "1s";

    letter.appendChild(p);

    const text = paragraphs[paragraphIndex];

    let i = 0;

    function typeCharacter(){

        if(i < text.length){

            p.textContent += text.charAt(i);

            i++;

            // Typing speed
            setTimeout(typeCharacter, 45);

        }else{

            // Fade in
            p.style.opacity = "1";

            paragraphIndex++;

            // Pause before next paragraph
            setTimeout(typeParagraph, 2200);

        }

    }

    typeCharacter();

}

typeParagraph();

function goToEnding(){

    window.location.href = "ending.html";

}
