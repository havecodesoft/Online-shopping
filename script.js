const menu = document.querySelector(".burger");
const links = document.querySelector(".ul");
const bars = document.querySelectorAll(".bar");
const body = document.body;
const btnClose = document.querySelector(".btn-close");
const main = document.querySelector("main");
const questions = document.querySelectorAll(".questions");
const questAsk = document.querySelectorAll(".question-title p");
const text = document.querySelector(".brand-ani");

const year = document.querySelector(".year");
const loader = document.querySelector(".pre-loader");
const nav = document.querySelector("nav");

window.addEventListener("load", function () {
  loader.style.overflow = "hidden";
  loader.style.display = "none";

  const strText = text.textContent;
  const splitText = strText.split("");

  text.textContent = "";
  for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span class='span'>" + splitText[i] + "</span>";
  }

  let char = 0;
  let timer = setInterval(onTick, 100);

  function onTick() {
    const span = text.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++;
    if (char === splitText.length) {
      complete();
      return;
    }
  }
  function complete() {
    clearInterval(timer);
    timer = null;
  }
});

const countNum = document.querySelector(".counting");
const addToCart = document.querySelectorAll(".cart-add-btn");
let counter = parseInt(localStorage.getItem("counter")) || 0;

let countFine = localStorage.getItem("countFine", "count");

addToCart.forEach((add) => {
  add.addEventListener("click", () => {
    counter++;
    countNum.textContent = counter;
    localStorage.setItem("counter", counter.toString());
  });
});
countNum.textContent = counter;

menu.addEventListener("click", () => {
  links.classList.toggle("active");
});

const homeHero = document.querySelectorAll(".home-hero");
const welcomeSec = document.querySelectorAll(".welcome");
const tableData = document.querySelectorAll("td");

window.addEventListener("scroll", fadeIn);

fadeIn();
function fadeIn() {
  let imagePosition = window.innerHeight / 1.17;
  if (links.classList.contains("active")) {
    setTimeout(() => {
      links.classList.remove("active");
    }, 1000);
  }

  homeHero.forEach((hero) => {
    const home_hero = hero.getBoundingClientRect().top;
    if (home_hero < imagePosition) {
      hero.classList.add("show");
    } else {
      hero.classList.remove("show");
    }
    welcomeSec.forEach((wel) => {
      imagePosition = window.innerHeight / 1.3;
      let welcomeTop = wel.getBoundingClientRect().top;
      if (welcomeTop < imagePosition) {
        wel.classList.add("show");
      } else {
        wel.classList.remove("show");
      }
    });
    tableData.forEach((data) => {
      imagePosition = window.innerHeight / 1.1;
      let dataPos = data.getBoundingClientRect().top;
      if (dataPos < imagePosition) {
        data.classList.add("apear");
      } else {
        data.classList.remove("apear");
      }
    });
  });
  questions.forEach((question) => {
    imagePosition = window.innerHeight / 1.2;
    let questPosition = question.getBoundingClientRect().top;
    if (questPosition < imagePosition) {
      question.classList.add("show");
    } else {
      question.classList.remove("show");
    }
  });
}

let date = new Date();
let fullYear = date.getFullYear();
let month = date.getMonth();
let day = date.getDay();
year.textContent = ` ${fullYear}`;

questions.forEach((question) => {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", () => {
    questions.forEach((item) => {
      if (item != question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});

// what a change

// let lastScroll = 0;
// window.addEventListener("scroll", () => {
//   const currentScroll = window.pageYOffset;
//   if (currentScroll <= 0) {
//     body.classList.remove("scroll-up");
//     return;
//   }

//   if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
//     body.classList.remove("scroll-up");
//     body.classList.add("scroll-down");
//   } else if (
//     currentScroll < lastScroll &&
//     body.classList.contains("scroll-down")
//   ) {
//     body.classList.remove("scroll-down");
//     body.classList.add("scroll-up");
//     setTimeout(() => {
//       body.classList.remove("scroll-up");
//       body.classList.add("scroll-down");
//     }, 15000);
//   }
//   lastScroll = currentScroll;
// });

// let footerPosition = footerImg.

// function scrollAppear() {
//   const welcomes = document.querySelectorAll(".welcome");
//   let screenPosition = window.innerHeight / 4;
//   let wel = welcomes[2];
//   wel.getBoundingClientRect().top;
//   if (wel < screenPosition) {
//     wel.classList.add("appear-smoothly");
//   } else {
//     wel.classList.remove("appear-smoothly");
//   }
// }

// window.addEventListener("scroll", scrollAppear);
