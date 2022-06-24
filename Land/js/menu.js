const dropList = document.querySelectorAll(".nav__droplist");
const dropToggle = document.querySelectorAll(".nav__item--solution");

document.addEventListener("mouseover", e => {
 if (!e.target.closest(".js_solution") && !e.target.closest(".nav__droplist")) {
  for (let i = 0; i < dropList.length; i++) {
   dropList[i].classList.remove("active");
  }
  for (let i = 0; i < dropToggle.length; i++) {
   dropToggle[i].classList.remove("nav__item--active");
  }
 }

 if (e.target.closest(".nav__item--resourses")) {
  document
   .querySelector(".js_solution--sol")
   .classList.remove("nav__item--active");
 }
 if (e.target.closest(".js_solution--sol")) {
  document
   .querySelector(".nav__item--resourses")
   .classList.remove("nav__item--active");
 }

 if (
  e.target.closest(".js_solution") &&
  e.target.closest(".nav__item--resourses")
 ) {
  for (let i = 0; i < dropList.length; i++) {
   dropList[i].classList.remove("active");
  }
  e.target
   .closest(".js_solution")
   .querySelector(".nav__droplist")
   .classList.add("active");
  document
   .querySelector(".nav__item--resourses")
   .classList.add("nav__item--active");
 }
 if (
  e.target.closest(".js_solution") &&
  e.target.closest(".js_solution--sol")
 ) {
  for (let i = 0; i < dropList.length; i++) {
   dropList[i].classList.remove("active");
  }
  e.target
   .closest(".js_solution")
   .querySelector(".nav__droplist")
   .classList.add("active");
  document
   .querySelector(".js_solution--sol")
   .classList.add("nav__item--active");
 }
});

const toggle = document.querySelector(".nav__toggle");
const menuBox = document.querySelector(".nav__links");
const menuLine = document.querySelector(".nav__line");

toggle.addEventListener("click", menuToggle);

function menuToggle() {
  menuBox.classList.toggle("nav__links--active");
  menuLine.classList.toggle("nav__line--active");
}
