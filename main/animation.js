const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const anchors1 = document.querySelector(".anch1");
const anchors2 = document.querySelector(".anch2");
const anchors3 = document.querySelector(".anch3");
const anchors4 = document.querySelector(".anch4");
const anchors5 = document.querySelector(".anch5");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

anchors1.addEventListener("click", () => {
    console.log("click closed");
    navLinks.classList.remove("open");
});

anchors2.addEventListener("click", () => {
    console.log("click closed");
    navLinks.classList.remove("open");
});

anchors3.addEventListener("click", () => {
    console.log("click closed");
    navLinks.classList.remove("open");
});

anchors4.addEventListener("click", () => {
    console.log("click closed");
    navLinks.classList.remove("open");
});

anchors5.addEventListener("click", () => {
    console.log("click closed");
    navLinks.classList.remove("open");
});