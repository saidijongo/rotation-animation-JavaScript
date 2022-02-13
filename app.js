//query Selector for the Movement Animations
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//contents
const title = document.querySelector(".title");
const yonseilogo = document.querySelector(".yonseilogo img");
const nextbtn = document.querySelector(".nextbtn");
const description = document.querySelector(".info h3");
const edulevel = document.querySelector(".edulevel");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout
  title.style.transform = "translateZ(150px)";
  yonseilogo.style.transform = "translateZ(200px) rotateZ(-360deg)";
  description.style.transform = "translateZ(125px)";
  edulevel.style.transform = "translateZ(100px)";
  nextbtn.style.transform = "translateZ(75px)";
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 5 ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title.style.transform = "translateZ(0px)";
  yonseilogo.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  edulevel.style.transform = "translateZ(0px)";
  nextbtn.style.transform = "translateZ(0px)";
});
