const preloader = document.getElementById("preloader");
setTimeout(() => {
  document.getElementById("preloder").classList.add("d-none");
  document.body.classList.remove("overflow_hidden");
}, 4000);
let a = document.getElementById("nav");
let flow = document.querySelector(".flow");
let cross4 = document.querySelector(".cross-4");
let cross5 = document.querySelector(".cross-5");
let cross6 = document.querySelector(".cross-6");
let menuicon = document.querySelector("#menuIcon");
let How = document.querySelector(".How");
let Brand = document.querySelector(".Brand");
let About = document.querySelector(".About");
let Career = document.querySelector(".Career");
let Token = document.querySelector(".Token");
let myBtn = document.querySelector(".myBtn");

let mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


menuicon.addEventListener("click", function () {
  if(a.classList !== document.querySelector("fix-lft")){
  a.classList.toggle("fix-lft");
  flow.classList.toggle("flow-hidden");
  cross4.classList.toggle("cross-1");
  cross5.classList.toggle("cross-2");
  cross6.classList.toggle("cross-3")}
});
How.addEventListener("click", function () {
  a.classList.toggle("fix-lft");
  flow.classList.remove("flow-hidden");
  cross4.classList.toggle("cross-1");
  cross5.classList.toggle("cross-2");
  cross6.classList.toggle("cross-3");
});
Brand.addEventListener("click", function () {
  a.classList.remove("fix-lft");
  flow.classList.remove("flow-hidden");
  cross4.classList.toggle("cross-1");
  cross5.classList.toggle("cross-2");
  cross6.classList.toggle("cross-3");
});
About.addEventListener("click", function () {
  a.classList.remove("fix-lft");
  flow.classList.remove("flow-hidden");
  cross4.classList.toggle("cross-1");
  cross5.classList.toggle("cross-2");
  cross6.classList.toggle("cross-3");
});

Career.addEventListener("click", function () {
  a.classList.remove("fix-lft");
  flow.classList.remove("flow-hidden");
  cross4.classList.toggle("cross-1");
  cross5.classList.toggle("cross-2");
  cross6.classList.toggle("cross-3");
});
Token.addEventListener("click", function () {
  a.classList.remove("fix-lft");
  flow.classList.remove("flow-hidden");
  cross4.classList.toggle("cross-1");
  cross5.classList.toggle("cross-2");
  cross6.classList.toggle("cross-3");
});
