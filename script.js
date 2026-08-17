/* ==========================================
   MUSKAN'S BIRTHDAY WEBSITE
   Birthday: 20 August 2026
   Reveal: 12:00 AM
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
   BIRTHDAY DATE
========================================== */

/*
   August 20, 2026 at exactly 12:00 AM.

   JavaScript month numbers start from 0:
   January = 0
   February = 1
   ...
   August = 7
*/

const birthdayDate = new Date(2026, 7, 20, 0, 0, 0);


/* ==========================================
   COUNTDOWN
========================================== */

function updateCountdown() {

    const now = new Date();

    const difference = birthdayDate.getTime() - now.getTime();


    /* Birthday has arrived */

    if (difference <= 0) {

        showBirthday();

        return;
    }


    /* Calculate time */

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


    /* Display time */

    daysElement.textContent = String(days).padStart(2, "0");

    hoursElement.textContent = String(hours).padStart(2, "0");

    minutesElement.textContent = String(minutes).padStart(2, "0");

    secondsElement.textContent = String(seconds).padStart(2, "0");


    /* Change message depending on days */

    if (days === 3) {

        countdownMessage.textContent =
            "Only 3 days until your special day... 🥹💗";

    } else if (days === 2) {

        countdownMessage.textContent =
            "Only 2 days left, birthday girl! 🎀";

    } else if (days === 1) {

        countdownMessage.textContent =
            "ONE MORE DAY!!! 👀🎂";

    } else if (days === 0) {

        countdownMessage.textContent =
            "It's almost time... stay here. 🥹💗";

    } else {

        countdownMessage.textContent =
            "Your special day is getting closer... ✨";
    }
}


/* ==========================================
   START COUNTDOWN
========================================== */

updateCountdown();


/*
   Update every second
*/

const countdownInterval = setInterval(
    updateCountdown,
    1000
);


/* ==========================================
   BIRTHDAY REVEAL
========================================== */

function showBirthday() {

    clearInterval(countdownInterval);


    /*
       Hide countdown
    */

    countdownScreen.classList.add("hidden");


    /*
       Show birthday screen
    */

    birthdayScreen.classList.remove("hidden");


    /*
       Create celebration
    */

    createConfetti();
}


/* ==========================================
   CONFETTI
========================================== */

function createConfetti() {

    /*
       Create lots of confetti pieces
    */

    for (let i = 0; i < 120; i++) {

        const piece = document.createElement("div");

        piece.classList.add("confetti");


        /*
           Random position
        */

        piece.style.left =
            Math.random() * 100 + "vw";


        /*
           Random size
        */

        const size =
            Math.random() * 8 + 5;

        piece.style.width =
            size + "px";

        piece.style.height =
            size + "px";


        /*
           Random animation duration
        */

        piece.style.animationDuration =
            Math.random() * 3 + 3 + "s";


        /*
           Random delay
        */

        piece.style.animationDelay =
            Math.random() * 2 + "s";


        /*
           Random shape
        */

        if (Math.random() > 0.5) {

            piece.style.borderRadius = "50%";

        } else {

            piece.style.borderRadius = "2px";
        }


        /*
           Add to page
        */

        confettiContainer.appendChild(piece);


        /*
           Remove after animation
        */

        setTimeout(() => {

            piece.remove();

        }, 7000);
    }
}


/* ==========================================
   START SURPRISE BUTTON
========================================== */

startSurprise.addEventListener("click", function () {

    /*
       Hide birthday welcome
    */

    birthdayScreen.classList.add("hidden");


    /*
       Show personal welcome
    */

    welcomeSection.classList.remove("hidden");


    /*
       Scroll to beginning
    */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ==========================================
   SECTION NAVIGATION
========================================== */

nextButtons.forEach(button => {

    button.addEventListener("click", function () {

        const nextSectionId =
            button.getAttribute("data-next");

        const nextSection =
            document.getElementById(nextSectionId);


        /*
           Hide currently visible content sections
        */

        document.querySelectorAll(".content-section")
            .forEach(section => {

                section.classList.add("hidden");

            });


        /*
           Show requested section
        */

        nextSection.classList.remove("hidden");


        /*
           Scroll to top
        */

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});


/* ==========================================
   ENVELOPE
========================================== */

openLetterButton.addEventListener("click", function () {

    /*
       Open envelope
    */

    envelope.classList.add("open");


    /*
       Change button text
    */

    openLetterButton.textContent =
        "Opening your letter... 💌";


    /*
       Wait for envelope animation
       before showing letter
    */

    setTimeout(() => {

        envelope.classList.add("hidden");

        openLetterButton.classList.add("hidden");

        letter.classList.remove("hidden");


        /*
           Scroll gently to letter
        */

        setTimeout(() => {

            letter.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 300);

    }, 900);

});


/* ==========================================
   EXTRA HEART EFFECT
========================================== */

function createHeart() {

    const heart =
        document.createElement("div");

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


/*
   Create a heart occasionally
*/

setInterval(() => {

    /*
       Only create floating hearts
       after birthday reveal
    */

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
   PREVENT OLD SECTIONS SHOWING TOGETHER
========================================== */

document.querySelectorAll(".content-section")
    .forEach(section => {

        /*
           Make sure all content sections
           start hidden.
        */

        section.classList.add("hidden");

    });


/* ==========================================
   FINISHED ❤️
========================================== */

console.log(
    "Muskan's birthday website is ready! 🎂💗"
);
