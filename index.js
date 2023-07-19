const secHand = document.getElementById("sec");
const minHand = document.getElementById("min");
const hourHand = document.getElementById("hour");
const audio = document.querySelector("audio");
let gravityEnabled = false;
const setTime = () => {
  if (!gravityEnabled) {
    const now = new Date();
    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();
    audio.currentTime = 0;
    audio.play();
    const secondDegrees = (second / 60) * 360 + 90;
    const minDegrees = (minute / 60) * 360 + 90;
    const hourDegrees = (hour / 12) * 360 + 90;
    secHand.style.transform = `rotate(${secondDegrees}deg)`;
    minHand.style.transform = `rotate(${minDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  } else applyGravity();
};

setInterval(setTime, 1000);

// feature to make crack appear when clock is clicked.
const clock = document.getElementById("clock");
const clockCrack = document.getElementById("clock-crack");
const crackAudio = document.getElementById("crackAudio");
let clickCount = 0;

const handleClick = () => {
  clickCount++;
  setTimeout;
  clock.classList.add("shaking");
  if (clickCount == 3) {
    clockCrack.style.display = "block";
    crackAudio.play();
    gravityEnabled = !gravityEnabled;
  }
};

const handleAnimationEnd = () => {
  if (gravityEnabled) return;
  clock.classList.remove("shaking");
};

const applyGravity = () => {
  secHand.style.transform = "rotate(270deg)";
  minHand.style.transform = "rotate(270deg)";
  hourHand.style.transform = "rotate(270deg)";
  secHand.style.transition = "transform 2s cubic-bezier(.68,.15,.47,1.80)";
  minHand.style.transition = "transform 2s cubic-bezier(.68,.15,.47,1.80)";
  hourHand.style.transition = "transform 2s cubic-bezier(.68,.15,.47,1.80)";
};

clock.addEventListener("animationend", handleAnimationEnd);
clock.addEventListener("click", handleClick);
