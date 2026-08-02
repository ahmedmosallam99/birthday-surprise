function showMessage() {
    document.getElementById("message").innerHTML =
    "Koll sana w ntyy tybaa ya yoyty ya habibibty w o3bal milion sana w ydeam al bena w al 3omr kolo yarab w a3milik koll al b2edy w di 2a2al haga testhaleha w ykhalina le b3ad w nkon sanad le b3ad na koll lma afakar fiky atbsett nty b2ety masdar s3adty walahy ya aya ay haga nty feha na mabsout ay haga bgd btitklmy fiha batmen rabena alem nty eh andy walahy 8alya awiii ya ayaa nty agmal haga hasltly w agamal haga shoftha fy hyaty yarab yg3alek men naseby men kolll alby nty agmal haga fy al donya ay had mt3amelsh m3aky khasran agd3 sahba w ahan sahba mafesh fy gamalekk yabkhty biky w o3bal milion sana yarab habibibty yaa yoytyy😘❤️❤️🎂";
}

// Floating Hearts
function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤";
    heart.className = "heart";

    heart.style.left = Math.random() * window.innerWidth + "px";

    heart.style.fontSize = (15 + Math.random() * 35) + "px";

    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 250);

const photos = [
    {
        img: "images/photo1.jpeg",
        text: "The first day we met ❤️"
    },
    {
        img: "images/photo2.jpeg",
        text: "One of my favorite memories with you 🌸"
    },
    {
        img: "images/photo3.jpeg",
        text: "You always make me smile 😊"
    },
    {
        img: "images/photo4.jpeg",
        text: "Every memory with you is a treasure I'll always keep. 💕"
    },
    {
        img: "images/photo5.jpeg",
        text: "Another unforgettable moment ❤️"
    },
    {
        img: "images/photo6.jpeg",
        text: "Your smile is my favorite place in the world. 😊"
    }
];

let current = 0;

const image = document.getElementById("photo");
const caption = document.getElementById("caption");

function showPhoto() {
    image.src = photos[current].img;
    caption.textContent = photos[current].text;
}

function nextPhoto() {
    current++;
    if (current >= photos.length) current = 0;
    showPhoto();
}

function prevPhoto() {
    current--;
    if (current < 0) current = photos.length - 1;
    showPhoto();
}

showPhoto();