function scrollToNext() {
    document.getElementById("gallery").scrollIntoView({
        behavior: "smooth"
    });
}

function showMessage() {
    document.getElementById("hiddenMessage").classList.remove("hidden");
}

/* Anniversary Counter */
window.onload = function() {  

    let weddingDate = new Date("2025-03-01T00:00:00").getTime(); // Change date here

    setInterval(function() {

        let now = new Date().getTime();
        let difference = now - weddingDate;

        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;

    }, 1000);

};

const signature = document.querySelector(".signature-content");

window.addEventListener("scroll", () => {
    const position = signature.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
        signature.style.opacity = "1";
        signature.style.transform = "translateY(0)";
    }
});

window.addEventListener("load", function() {
    const music = document.getElementById("bgMusic");

    // Try autoplay
    music.play().catch(() => {
        console.log("Autoplay blocked");
    });

    // Unmute after small delay
    setTimeout(() => {
        music.muted = false;
    }, 2000);
});

const enterBtn = document.getElementById("enterBtn");
const entryScreen = document.getElementById("entryScreen");
const bgMusic = document.getElementById("bgMusic");

enterBtn.addEventListener("click", function() {
    bgMusic.play();

    entryScreen.style.opacity = "0";
    entryScreen.style.transition = "1s";

    setTimeout(() => {
        entryScreen.style.display = "none";
    }, 1000);
});

const card = document.getElementById("surpriseCard");

card.addEventListener("click", function() {
    card.classList.toggle("flipped");

    document.body.style.background =
        "radial-gradient(circle at center, #ff4da6, #1a1a2e)";
});

card.addEventListener("click", function() {

    for (let i = 0; i < 20; i++) {
        let heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = "20px";
        heart.style.animation = "floatUp 3s linear forwards";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
});


setInterval(() => {
    let heart = document.createElement("div");
    heart.innerHTML = "💗";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = "18px";
    heart.style.opacity = "0.7";
    heart.style.animation = "floatUp 6s linear forwards";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}, 800);



