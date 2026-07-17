alert("script.js loaded");



// ===============================
// Love Letter JavaScript
// ===============================

// Buttons
const openButton = document.getElementById("openLetter");
const nextButton = document.getElementById("nextMessage");

// Letter
const letter = document.getElementById("letter");

// Typing Area
const typing = document.getElementById("typing");

// Music
const music = document.getElementById("music");
// Romantic Messages
const messages = [

`My Beautiful Love ❤️

Every day with you is another beautiful chapter in my life.
You make my darkest moments shine brighter than the stars.
I never knew love could feel this magical until I met you.`,

`Whenever I see your smile,
my heart beats a little faster.

Your happiness is my greatest wish.

Thank you for being my light. ❤️`,

`Distance means nothing
when someone means everything.

No matter where life takes us,
my heart will always belong to you.`,

`I promise to stand beside you,
support you,
respect you,
and love you forever.

You are my today,
my tomorrow,
and my forever. ❤️`,

`Thank you for reading my little love letter.

I Love You ❤️
Forever & Always.`
];

let currentMessage = 0;

// ===============================
// Open Letter
// ===============================

openButton.onclick = () => {

letter.classList.remove("hidden");

typeMessage(messages[currentMessage]);

if(music){

music.play().catch(()=>{});

}

};

// ===============================
// Next Button
// ===============================

nextButton.onclick = ()=>{

currentMessage++;

if(currentMessage >= messages.length){

currentMessage = 0;

}

typeMessage(messages[currentMessage]);

};

// ===============================
// Typewriter Effect
// ===============================

function typeMessage(text){

typing.innerHTML="";

let index=0;

const speed=35;

const timer=setInterval(()=>{

typing.innerHTML += text.charAt(index);

index++;

if(index>=text.length){

clearInterval(timer);

}

},speed);

}

// ===============================
// Floating Hearts Generator
// ===============================

const hearts=document.querySelector(".hearts");

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="absolute";

heart.style.left=Math.random()*100+"%";

heart.style.bottom="-30px";

heart.style.fontSize=(20+Math.random()*30)+"px";

heart.style.animation="floatHeart 8s linear";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

},400);

// ===============================
// Heart Animation
// ===============================

const style=document.createElement("style");

style.innerHTML=`

@keyframes floatHeart{

0%{

transform:translateY(0) scale(1);

opacity:1;

}

100%{

transform:translateY(-110vh)
rotate(360deg)
scale(1.8);

opacity:0;

}

}

`;

document.head.appendChild(style);

// ===============================
// Sparkles
// ===============================

setInterval(()=>{

const star=document.createElement("div");

star.innerHTML="✨";

star.style.position="absolute";

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.fontSize="18px";

star.style.opacity=".8";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},2000);

},300);

// ===============================
// End
// ===============================


 // ==============================
// FIREWORKS SYSTEM
// ==============================

function createFirework(){

    const colors=[
        "#ff0080",
        "#ff4444",
        "#00ffff",
        "#ffff00",
        "#00ff88",
        "#ffffff",
        "#ff9900"
    ];

    for(let i=0;i<40;i++){

        const particle=document.createElement("div");

        particle.style.position="fixed";

        particle.style.left="50%";

        particle.style.top="50%";

        particle.style.width="8px";

        particle.style.height="8px";

        particle.style.borderRadius="50%";

        particle.style.background=
        colors[Math.floor(Math.random()*colors.length)];

        particle.style.pointerEvents="none";

        particle.style.zIndex="9999";

        document.body.appendChild(particle);

        const angle=Math.random()*360;

        const distance=100+Math.random()*250;

        particle.animate([

        {
            transform:
            "translate(0px,0px) scale(1)",
            opacity:1
        },

        {
            transform:
            `translate(
                ${Math.cos(angle*Math.PI/180)*distance}px,
                ${Math.sin(angle*Math.PI/180)*distance}px
            ) scale(0)`,

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

 // ==============================
// HEART EXPLOSION
// ==============================

function explodeHearts(){

    for(let i=0;i<30;i++){

        const heart=document.createElement("div");

        heart.innerHTML="💖";

        heart.style.position="fixed";

        heart.style.left="50%";

        heart.style.top="65%";

        heart.style.fontSize=(18+Math.random()*20)+"px";

        heart.style.pointerEvents="none";

        heart.style.zIndex="9999";

        document.body.appendChild(heart);

        const x=(Math.random()-0.5)*700;

        const y=(Math.random()-0.5)*700;

        heart.animate([

        {

            transform:"translate(0,0) scale(1)",

            opacity:1

        },

        {

            transform:`translate(${x}px,${y}px) scale(0)`,

            opacity:0

        }

        ],{

            duration:1500,

            easing:"ease-out"

        });

        setTimeout(()=>{

            heart.remove();

        },1500);

    }

}


 // ==============================
// HEART EXPLOSION
// ==============================

function explodeHearts(){

    for(let i=0;i<30;i++){

        const heart=document.createElement("div");

        heart.innerHTML="💖";

        heart.style.position="fixed";

        heart.style.left="50%";

        heart.style.top="65%";

        heart.style.fontSize=(18+Math.random()*20)+"px";

        heart.style.pointerEvents="none";

        heart.style.zIndex="9999";

        document.body.appendChild(heart);

        const x=(Math.random()-0.5)*700;

        const y=(Math.random()-0.5)*700;

        heart.animate([

        {

            transform:"translate(0,0) scale(1)",

            opacity:1

        },

        {

            transform:`translate(${x}px,${y}px) scale(0)`,

            opacity:0

        }

        ],{

            duration:1500,

            easing:"ease-out"

        });

        setTimeout(()=>{

            heart.remove();

        },1500);

    }

}


 nextButton.onclick = ()=>{

currentMessage++;

if(currentMessage >= messages.length){

currentMessage = 0;

}

typeMessage(messages[currentMessage]);

};

 
nextButton.onclick = ()=>{

explodeHearts();

currentMessage++;

if(currentMessage >= messages.length){

currentMessage=0;

createFirework();

}

typeMessage(messages[currentMessage]);

};

 

// ===============================
// Falling Roses
// ===============================

setInterval(()=>{

    const rose=document.createElement("div");

    rose.className="rose";

    rose.innerHTML="🌹";

    rose.style.left=Math.random()*100+"vw";

    rose.style.animationDuration=
    (5+Math.random()*5)+"s";

    document.body.appendChild(rose);

    setTimeout(()=>{

        rose.remove();

    },10000);

},900);


 // ===============================
// Beating Heart
// ===============================

const beat=document.createElement("div");

beat.innerHTML="❤️";

beat.style.position="fixed";

beat.style.bottom="25px";

beat.style.right="25px";

beat.style.fontSize="55px";

beat.style.zIndex="9999";

beat.style.animation="beatHeart 1s infinite";

document.body.appendChild(beat);

const beatStyle=document.createElement("style");

beatStyle.innerHTML=`

@keyframes beatHeart{

0%{transform:scale(1);}

50%{transform:scale(1.3);}

100%{transform:scale(1);}

}

`;

document.head.appendChild(beatStyle);


 


// ===============================
// LOVE TIMER
// ===============================

// Change this date to any special date you want.
const loveDate = new Date("2026-01-01 00:00:00");

function updateLoveTimer(){

    const now = new Date();

    const diff = now - loveDate;

    const days = Math.floor(diff/(1000*60*60*24));

    const hours = Math.floor((diff/(1000*60*60))%24);

    const minutes = Math.floor((diff/(1000*60))%60);

    const seconds = Math.floor((diff/1000)%60);

    document.getElementById("timer").innerHTML=

    days+" Days "

    +hours+" Hours "

    +minutes+" Minutes "

    +seconds+" Seconds";

}

setInterval(updateLoveTimer,1000);

updateLoveTimer();

 // ===============================
// SHOOTING STARS
// ===============================

setInterval(()=>{

const star=document.createElement("div");

star.innerHTML="☄️";

star.style.position="fixed";

star.style.left=Math.random()*100+"vw";

star.style.top="-40px";

star.style.fontSize="25px";

star.style.zIndex="999";

star.style.pointerEvents="none";

document.body.appendChild(star);

star.animate([

{

transform:"translate(0,0)",

opacity:1

},

{

transform:"translate(-350px,700px)",

opacity:0

}

],{

duration:2500,

easing:"linear"

});

setTimeout(()=>{

star.remove();

},2500);

},3500);

 



 // =========================================
// CHERRY BLOSSOM PETALS
// =========================================

setInterval(()=>{

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌸";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=(6+Math.random()*6)+"s";

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},12000);

},700);


// =========================================
// BUTTERFLIES
// =========================================

setInterval(()=>{

const butterfly=document.createElement("div");

butterfly.innerHTML="🦋";

butterfly.style.position="fixed";

butterfly.style.left="-40px";

butterfly.style.top=Math.random()*70+"vh";

butterfly.style.fontSize="30px";

butterfly.style.zIndex="9999";

document.body.appendChild(butterfly);

butterfly.animate([

{

transform:"translateX(0)",

opacity:1

},

{

transform:"translateX(120vw)",

opacity:0.8

}

],{

duration:12000,

easing:"linear"

});

setTimeout(()=>{

butterfly.remove();

},12000);

},4500);


 


 // =========================================
// CONFETTI
// =========================================

function confetti(){

const colors=[
"#ff0080",
"#00ffff",
"#ffff00",
"#00ff00",
"#ff6600",
"#ffffff"
];

for(let i=0;i<120;i++){

const c=document.createElement("div");

c.style.position="fixed";

c.style.left=Math.random()*100+"vw";

c.style.top="-20px";

c.style.width="8px";

c.style.height="12px";

c.style.background=
colors[Math.floor(Math.random()*colors.length)];

c.style.zIndex="9999";

document.body.appendChild(c);

c.animate([

{

transform:"translateY(0)",

opacity:1

},

{

transform:`translateY(${window.innerHeight+50}px)`,

opacity:0

}

],{

duration:3000+Math.random()*2000,

easing:"linear"

});

setTimeout(()=>{

c.remove();

},5000);

}

}

// =========================================
// GIFT BOX
// =========================================
const gift = document.getElementById("giftBox");

if(gift){

gift.onclick=()=>{

createFirework();

explodeHearts();

confetti();

alert(
"❤️ Dear Yusrah ❤️\n\nYou are the most beautiful gift in my life.\n\nEvery heartbeat reminds me of how lucky I am to have you.\n\nI Love You Forever. 💖"
);

};




/* ===========================
PHOTO GALLERY
=========================== */

#gallery{

position:fixed;

left:50%;

bottom:120px;

transform:translateX(-50%);

text-align:center;

color:white;

z-index:999;

}

.photos{

display:flex;

gap:20px;

margin-top:15px;

justify-content:center;

flex-wrap:wrap;

}

.photo{

width:130px;

height:130px;

overflow:hidden;

border-radius:50%;

border:4px solid hotpink;

box-shadow:0 0 25px hotpink;

animation:photoGlow 3s infinite;

}

.photo img{

width:100%;

height:100%;

object-fit:cover;

}

@keyframes photoGlow{

0%{

transform:scale(1);

}

50%{

transform:scale(1.08);

box-shadow:0 0 40px deeppink;

}

100%{

transform:scale(1);

}

}

/* ===========================
MUSIC BUTTON
=========================== */

#musicButton{

position:fixed;

left:20px;

top:20px;

z-index:9999;

}


// ===============================
// MUSIC BUTTON
// ===============================

const musicButton=document.getElementById("musicButton");

if(musicButton){

musicButton.onclick=()=>{

if(music.paused){

music.play();

musicButton.innerHTML="⏸ Pause Music";

}else{

music.pause();

musicButton.innerHTML="🎵 Play Music";

}

};

}

// ======================================
// ENVELOPE
// ======================================

const envelope = document.getElementById("envelope");
const specialMessage = document.getElementById("specialMessage");
const closeMessage = document.getElementById("closeMessage");

if(envelope){

envelope.onclick=()=>{

createFirework();

explodeHearts();

confetti();

specialMessage.classList.remove("hidden");

};

}

if(closeMessage){

closeMessage.onclick=()=>{

specialMessage.classList.add("hidden");

};

}


// ======================================
// INTRO SCREEN
// ======================================

const intro=document.getElementById("introScreen");
const enter=document.getElementById("enterButton");

if(enter){

enter.onclick=()=>{

createFirework();

explodeHearts();

confetti();

intro.classList.add("fadeOut");

setTimeout(()=>{

intro.style.display="none";

},1500);

};

}


