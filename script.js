// heart effect
window.addEventListener("load", function () {
  setInterval(createHeart, 500);
});

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💖";

  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;

  const duration = Math.random() * 3 + 3;

  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  heart.style.animationDuration = `${duration}s`;

  document.getElementById("hearts-container").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

// selectors 
const yesBtn1 = document.getElementById("yesButton1");
const yesBtn2 = document.getElementById("yesButton2");
const yesBtn3 = document.getElementById("yesButton3");
const yesBtn4 = document.getElementById("yesButton4");
const nextBtn = document.getElementById("next");
const yesBtn6 = document.getElementById("yesButton6");

const noBtn1 = document.getElementById("noButton1");
const noBtn2 = document.getElementById("noButton2");
const noBtn3 = document.getElementById("noButton3");
const noBtn4 = document.getElementById("noButton4");
const noBtn6 = document.getElementById("noButton6");

const firstContainer = document.getElementById("first");
const secondContainer = document.getElementById("second");
const thirdContainer = document.getElementById("third");
const forthContainer = document.getElementById("forth");
const fifthContainer = document.getElementById("fifth");
const sixContainer = document.getElementById("six");


// yes button event
yesBtn1.addEventListener("click", () => {
  firstContainer.style.display = "none";
  secondContainer.style.display = "block";
});
yesBtn2.addEventListener("click", () => {
  secondContainer.style.display = "none";
  thirdContainer.style.display = "block";
});
yesBtn3.addEventListener("click", () => {
  thirdContainer.style.display = "none";
  forthContainer.style.display = "block";
});
yesBtn4.addEventListener("click", () => {
  forthContainer.style.display = "none";
  fifthContainer.style.display = "block";
  alert("You the queen of my dream!");
});
nextBtn.addEventListener("click", () => {
  fifthContainer.style.display = "none";
  sixContainer.style.display = "block";
});
yesBtn6.addEventListener("click", () => {
  sixContainer.style.display = "none";
  sevenContainer.style.display = "block";
  alert("You the queen of my dream!");
});

// no button event
noBtn1.addEventListener("mouseover", () => {
  moveButton(noBtn1, firstContainer);
});
noBtn2.addEventListener("mouseover", () => {
  moveButton(noBtn2, secondContainer);
});
noBtn3.addEventListener("mouseover", () => {
  moveButton(noBtn3, thirdContainer);
});
noBtn4.addEventListener("mouseover", () => {
  moveButton(noBtn4, forthContainer);
});
noBtn6.addEventListener("mouseover", () => {
  moveButton(noBtn6, sixContainer);
});

function moveButton(button, container) {
  const containerRect = container.getBoundingClientRect();
  const btnRect = button.getBoundingClientRect();

  const maxX = containerRect.width - btnRect.width;
  const maxY = containerRect.height - btnRect.height;

  let randomX = Math.random() * maxX;
  let randomY = Math.random() * maxY;

  button.style.position = "absolute";
  button.style.left = `${randomX}px`;
  button.style.top = `${randomY}px`;
}
