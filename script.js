/* ==========================================
   MUSKAN'S BIRTHDAY WEBSITE
========================================== */


/* ==========================================
   ELEMENTS
========================================== */

const countdownScreen = document.getElementById("countdown-screen");
const birthdayScreen = document.getElementById("birthday-screen");

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const countdownMessage = document.getElementById("countdown-message");

const startSurprise = document.getElementById("start-surprise");

const welcomeSection = document.getElementById("welcome-section");
const letterSection = document.getElementById("letter-section");
const finalSection = document.getElementById("final-section");

const envelope = document.getElementById("envelope");
const openLetterButton = document.getElementById("open-letter");
const letter = document.getElementById("letter");

const nextButtons = document.querySelectorAll(".next-button");

const confettiContainer = document.getElementById("confetti-container");


/* ==========================================
   TEST DATE
   This makes the birthday reveal immediately.

   AFTER TESTING, change this to:

   new Date(2026, 7, 20, 0, 0, 0)
========================================== */

const birthdayDate = new Date(Date.now() - 1000);


/* ==========================================
   COUNTDOWN
========================================== */

let countdownInterval;


function updateCountdown() {

    const now = new Date();

    const difference = birthdayDate - now;


    /* If birthday has arrived */

    if (difference <= 0) {

        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";

        countdownMessage.textContent =
            "It's time... 🥹💗";

        showBirthday();

        return;
    }


    /* Calculate remaining time */

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    daysElement.textContent =
        String(days).padStart(2, "0");

    hoursElement.textContent =
        String(hours).padStart(2, "0");

    minutesElement.textContent =
        String(minutes).padStart(2, "0");

    secondsElement.textContent =
        String(seconds).padStart(2, "0");
}


/* ==========================================
   BIRTHDAY REVEAL
========================================== */

function showBirthday() {

    /* Stop countdown */

    if (countdownInterval) {
        clearInterval(countdownInterval);
    }


    /* Hide countdown */

    countdownScreen.classList.add("hidden");


    /* Show birthday screen */

    birthdayScreen.classList.remove("hidden");


    /* Celebration */

    createConfetti();
}


/* ==========================================
   START COUNTDOWN
========================================== */

updateCountdown();

countdownInterval = setInterval(
    updateCountdown,
    1000
);


/* ==========================================
   CONFETTI
========================================== */

function createConfetti() {

    for (let i = 0; i < 120; i++) {

        const piece = document.createElement("div");

        piece.classList.add("confetti");

        piece.style.left =
            Math.random() * 100 + "vw";

        const size =
            Math.random() * 8 + 5;

        piece.style.width =
            size + "px";

        piece.style.height =
            size + "px";

        piece.style.animationDuration =
            Math.random() * 3 + 3 + "s";

        piece.style.animationDelay =
            Math.random() * 2 + "s";

        piece.style.background =
            [
                "#ff4f81",
                "#ff8fb1",
                "#ffd166",
                "#ffffff",
                "#c94c78"
            ][Math.floor(Math.random() * 5)];

        piece.style.borderRadius =
            Math.random() > 0.5
                ? "50%"
                : "2px";

        confettiContainer.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 8000);
    }
}


/* ==========================================
   OPEN BIRTHDAY SURPRISE
========================================== */

startSurprise.addEventListener("click", function () {

    birthdayScreen.classList.add("hidden");

    welcomeSection.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


/* ==========================================
   NEXT SECTION BUTTONS
========================================== */

nextButtons.forEach(button => {

    button.addEventListener("click", function () {

        const nextSectionId =
            button.getAttribute("data-next");

        const nextSection =
            document.getElementById(nextSectionId);


        document.querySelectorAll(".content-section")
            .forEach(section => {

                section.classList.add("hidden");

            });


        nextSection.classList.remove("hidden");


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});


/* ==========================================
   OPEN LETTER
========================================== */

openLetterButton.addEventListener("click", function () {

    envelope.classList.add("open");

    openLetterButton.textContent =
        "Opening your letter... 💌";


    setTimeout(() => {

        envelope.classList.add("hidden");

        openLetterButton.classList.add("hidden");

        letter.classList.remove("hidden");


        setTimeout(() => {

            letter.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 300);

    }, 900);
});


/* ==========================================
   FLOATING HEARTS
========================================== */

function createHeart() {

    const heart = document.createElement("div");

    heart.textContent = "♡";

    heart.style.position = "fixed";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.bottom = "-30px";

    heart.style.fontSize =
        Math.random() * 20 + 15 + "px";

    heart.style.opacity =
        Math.random() * 0.5 + 0.3;

    heart.style.color = "#c94c78";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "20";

    heart.style.transition =
        "transform 5s linear, opacity 5s linear";

    document.body.appendChild(heart);


    setTimeout(() => {

        heart.style.transform =
            "translateY(-110vh) rotate(180deg)";

        heart.style.opacity = "0";

    }, 100);


    setTimeout(() => {

        heart.remove();

    }, 5500);
}


setInterval(() => {

    if (
        !birthdayScreen.classList.contains("hidden") ||
        !welcomeSection.classList.contains("hidden") ||
        !letterSection.classList.contains("hidden") ||
        !finalSection.classList.contains("hidden")
    ) {

        createHeart();
    }

}, 1500);


/* ==========================================
   READY
========================================== */

console.log("Muskan Birthday Website Ready! 🎂💗");
