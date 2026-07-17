/* ==========================================
   YUSRAH LOVE STORY
   SCRIPT.JS
   PART 1
========================================== */

"use strict";

/* ==========================================
   GET HTML ELEMENTS
========================================== */

const introScreen = document.getElementById("introScreen");
const enterButton = document.getElementById("enterButton");

const mainContainer = document.getElementById("mainContainer");

const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");

const typing = document.getElementById("typing");

const giftBox = document.getElementById("giftBox");

const envelope = document.getElementById("envelope");
const specialMessage = document.getElementById("specialMessage");
const closeMessage = document.getElementById("closeMessage");

const timer = document.getElementById("timer");

/* ==========================================
   LOVE LETTER
========================================== */

const letter = `

My Dearest Yusrah,

Every heartbeat reminds me of you.

Every sunrise gives me another reason
to thank God for bringing you into my life.

You are my peace.

You are my happiness.

You are my answered prayer.

If I had a thousand lives...

I would choose you in every one of them.

Thank you for being the beautiful person you are.

I promise to respect you,
support you,
pray for you,
and always care for you.

❤️

Forever Yours.

`;

/* ==========================================
   TYPEWRITER EFFECT
========================================== */

let currentCharacter = 0;

function typeLetter(){

    if(!typing) return;

    if(currentCharacter < letter.length){

        typing.textContent += letter.charAt(currentCharacter);

        currentCharacter++;

        setTimeout(typeLetter,35);

    }

}

/* ==========================================
   ENTER STORY
========================================== */

if(enterButton){

enterButton.addEventListener("click",()=>{

if(introScreen){

introScreen.style.opacity="0";

introScreen.style.pointerEvents="none";

setTimeout(()=>{

introScreen.style.display="none";

},700);

}

if(mainContainer){

mainContainer.classList.remove("hidden");

}

typeLetter();

});

}

/* ==========================================
   MUSIC BUTTON
========================================== */

if(musicButton){

musicButton.addEventListener("click",()=>{

if(music.paused){

music.play();

musicButton.textContent="⏸ Pause Music";

}else{

music.pause();

musicButton.textContent="🎵 Play Music";

}

});

}

/* ==========================================
   SCRIPT PART 2
   LOVE TIMER • GIFT • ENVELOPE
========================================== */

/* ==========================================
   LOVE TIMER
========================================== */

// Change this date to your special day
const loveDate = new Date("2025-01-01T00:00:00");

function updateLoveTimer(){

    if(!timer) return;

    const now = new Date();
    const diff = now - loveDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    timer.innerHTML =
    `
    ❤️ ${days} Days<br>
    ${hours} Hours • ${minutes} Minutes • ${seconds} Seconds
    `;
}

updateLoveTimer();
setInterval(updateLoveTimer,1000);

/* ==========================================
   FLOATING HEARTS
========================================== */

function createFloatingHearts(amount = 20){

    for(let i = 0; i < amount; i++){

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random()*100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = (18 + Math.random()*22) + "px";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "9999";
        heart.style.transition = "all 5s linear";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.style.transform =
            `translateY(-120vh) rotate(${Math.random()*720}deg)`;

            heart.style.opacity = "0";

        },50);

        setTimeout(()=>{

            heart.remove();

        },5200);

    }

}

/* ==========================================
   GIFT BOX
========================================== */

if(giftBox){

giftBox.addEventListener("click",()=>{

createFloatingHearts(40);

alert(`🎁

Dear Yusrah ❤️

You are the greatest gift
I have ever received.

Your smile brightens my days.

Your kindness inspires me.

Your love gives me strength.

I Love You Forever ❤️

`);

});

}

/* ==========================================
   ENVELOPE
========================================== */

if(envelope){

envelope.addEventListener("click",()=>{

if(specialMessage){

specialMessage.classList.remove("hidden");

}

createFloatingHearts(25);

});

}

if(closeMessage){

closeMessage.addEventListener("click",()=>{

specialMessage.classList.add("hidden");

});

}

/* ==========================================
   AUTO HEARTS
========================================== */

setInterval(()=>{

createFloatingHearts(4);

},4000);

/* ==========================================
   SCRIPT PART 3
   FIREWORKS • SPARKLES • CONFETTI
========================================== */

/* ==========================================
FIREWORKS
========================================== */

function createFireworks(amount = 60){

    for(let i = 0; i < amount; i++){

        const particle = document.createElement("div");

        particle.innerHTML = "✨";

        particle.style.position = "fixed";
        particle.style.left = "50%";
        particle.style.top = "50%";
        particle.style.fontSize = (10 + Math.random()*18) + "px";
        particle.style.pointerEvents = "none";
        particle.style.zIndex = "99999";

        document.body.appendChild(particle);

        const angle = Math.random() * Math.PI * 2;
        const distance = 80 + Math.random() * 220;

        particle.animate([

            {
                transform:"translate(0,0) scale(1)",
                opacity:1
            },

            {
                transform:`translate(${Math.cos(angle)*distance}px,${Math.sin(angle)*distance}px) scale(0)`,
                opacity:0
            }

        ],{

            duration:1800,
            easing:"ease-out"

        });

        setTimeout(()=>{

            particle.remove();

        },1800);

    }

}

/* ==========================================
SPARKLES
========================================== */

function createSparkle(){

    const sparkle = document.createElement("div");

    sparkle.innerHTML = "✨";

    sparkle.style.position = "fixed";
    sparkle.style.left = Math.random()*100 + "vw";
    sparkle.style.top = Math.random()*100 + "vh";
    sparkle.style.fontSize = (10 + Math.random()*16) + "px";
    sparkle.style.pointerEvents = "none";
    sparkle.style.opacity = ".9";
    sparkle.style.zIndex = "9998";

    document.body.appendChild(sparkle);

    sparkle.animate([

        {opacity:1,transform:"scale(0.3)"},
        {opacity:0,transform:"scale(2)"}

    ],{

        duration:2000

    });

    setTimeout(()=>{

        sparkle.remove();

    },2000);

}

setInterval(createSparkle,700);

/* ==========================================
CONFETTI
========================================== */

function createConfetti(){

    const colors = [

        "#ff0080",
        "#00ffff",
        "#00ff66",
        "#ffff00",
        "#ffffff",
        "#ff8800"

    ];

    for(let i=0;i<80;i++){

        const piece = document.createElement("div");

        piece.style.position="fixed";
        piece.style.width="8px";
        piece.style.height="14px";
        piece.style.background=
        colors[Math.floor(Math.random()*colors.length)];

        piece.style.left=Math.random()*100+"vw";
        piece.style.top="-30px";

        piece.style.pointerEvents="none";

        piece.style.zIndex="99999";

        document.body.appendChild(piece);

        piece.animate([

            {
                transform:"translateY(0) rotate(0deg)",
                opacity:1
            },

            {
                transform:`translateY(${window.innerHeight+100}px) rotate(720deg)`,
                opacity:0
            }

        ],{

            duration:3000+Math.random()*1500,
            easing:"linear"

        });

        setTimeout(()=>{

            piece.remove();

        },4500);

    }

}

/* ==========================================
ADD EFFECTS TO BUTTONS
========================================== */

if(giftBox){

    giftBox.addEventListener("click",()=>{

        createFireworks();
        createConfetti();
        createFloatingHearts(40);

    });

}

if(envelope){

    envelope.addEventListener("click",()=>{

        createFireworks();
        createConfetti();
        createFloatingHearts(30);

    });

}

if(enterButton){

    enterButton.addEventListener("click",()=>{

        createFireworks();
        createConfetti();
        createFloatingHearts(50);

    });

}
/* ==========================================
   SCRIPT PART 4
   ROSES • BUTTERFLIES • STARS • FINALE
========================================== */

/* ==========================================
FALLING ROSES
========================================== */

function createRose(){

    const rose=document.createElement("div");

    rose.innerHTML="🌹";

    rose.style.position="fixed";
    rose.style.left=Math.random()*100+"vw";
    rose.style.top="-50px";
    rose.style.fontSize=(24+Math.random()*18)+"px";
    rose.style.pointerEvents="none";
    rose.style.zIndex="9997";

    document.body.appendChild(rose);

    rose.animate([

        {transform:"translateY(0) rotate(0deg)",opacity:1},

        {transform:`translateY(${window.innerHeight+80}px) rotate(720deg)`,opacity:0}

    ],{

        duration:6000+Math.random()*2000,
        easing:"linear"

    });

    setTimeout(()=>{

        rose.remove();

    },8000);

}

setInterval(createRose,2500);

/* ==========================================
BUTTERFLIES
========================================== */

function createButterfly(){

    const butterfly=document.createElement("div");

    butterfly.innerHTML="🦋";

    butterfly.style.position="fixed";
    butterfly.style.left="-40px";
    butterfly.style.top=Math.random()*80+"vh";
    butterfly.style.fontSize="30px";
    butterfly.style.pointerEvents="none";
    butterfly.style.zIndex="9996";

    document.body.appendChild(butterfly);

    butterfly.animate([

        {transform:"translateX(0)",opacity:1},

        {transform:`translateX(${window.innerWidth+80}px)`,opacity:.8}

    ],{

        duration:10000,
        easing:"linear"

    });

    setTimeout(()=>{

        butterfly.remove();

    },10000);

}

setInterval(createButterfly,7000);

/* ==========================================
SHOOTING STARS
========================================== */

function shootingStar(){

    const star=document.createElement("div");

    star.innerHTML="🌠";

    star.style.position="fixed";
    star.style.left=Math.random()*100+"vw";
    star.style.top="0";
    star.style.fontSize="24px";
    star.style.pointerEvents="none";
    star.style.zIndex="9995";

    document.body.appendChild(star);

    star.animate([

        {transform:"translate(0,0)",opacity:1},

        {transform:"translate(-350px,500px)",opacity:0}

    ],{

        duration:2500,
        easing:"ease-out"

    });

    setTimeout(()=>{

        star.remove();

    },2500);

}

setInterval(shootingStar,12000);

/* ==========================================
LOVE QUOTES
========================================== */

const quotes=[

"❤️ Every heartbeat whispers your name.",

"🌹 Loving you is my favourite adventure.",

"✨ My happiest place is wherever you are.",

"💖 You make ordinary days feel magical.",

"🌙 Every prayer includes your happiness."

];

function randomQuote(){

    const box=document.createElement("div");

    box.textContent=quotes[Math.floor(Math.random()*quotes.length)];

    box.style.position="fixed";
    box.style.bottom="30px";
    box.style.left="50%";
    box.style.transform="translateX(-50%)";
    box.style.padding="15px 25px";
    box.style.background="rgba(0,0,0,.65)";
    box.style.color="white";
    box.style.borderRadius="30px";
    box.style.fontSize="16px";
    box.style.zIndex="99999";

    document.body.appendChild(box);

    setTimeout(()=>{

        box.remove();

    },5000);

}

setInterval(randomQuote,20000);

/* ==========================================
FINAL SURPRISE
========================================== */

setTimeout(()=>{

    createFireworks();

    createConfetti();

    createFloatingHearts(80);

    const ending=document.createElement("div");

    ending.innerHTML=`

    <div style="
    position:fixed;
    inset:0;
    background:rgba(0,0,0,.88);
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    z-index:999999;
    text-align:center;
    ">

    <h1 style="
    font-size:4rem;
    color:#ff4da6;
    margin:0;
    font-family:cursive;
    ">
    ❤️ I LOVE YOU ❤️
    </h1>

    <h2 style="
    color:white;
    font-size:2.2rem;
    margin-top:15px;
    ">
    YUSRAH
    </h2>

    <p style="
    color:#ffd6ec;
    font-size:1.2rem;
    margin-top:20px;
    ">
    Forever ♾️ & Always
    </p>

    </div>

    `;

    document.body.appendChild(ending);

},90000);

/* ==========================================
END OF FILE
========================================== */

console.log("❤️ Yusrah Love Story Loaded Successfully ❤️");

