//FOR SLIDE
const slider = document.getElementById("slider");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");

nextBtn.addEventListener("click", () => {
  slider.scrollBy({ left: 260, behavior: "smooth" });
});

backBtn.addEventListener("click", () => {
  slider.scrollBy({ left: -260, behavior: "smooth" });
});

//2
const slider2 = document.getElementById("slider2");
const nextBtn2 = document.getElementById("nextBtn2");
const backBtn2 = document.getElementById("backBtn2");

nextBtn2.addEventListener("click", () => {
  slider2.scrollBy({ left: 260, behavior: "smooth" });
});
backBtn2.addEventListener("click", () => {
  slider2.scrollBy({ left: -260, behavior: "smooth" });
});


//FOR SLIDE3
const slider3 = document.getElementById("slider3");
const nextBtn3 = document.getElementById("nextBtn3");
const backBtn3 = document.getElementById("backBtn3")

nextBtn3.addEventListener("click", () => {
  slider3.scrollBy({left: 260, behavior: "smooth"})
});
backBtn3.addEventListener("click", () => {
  slider3.scrollBy({left: -260, behavior: "smooth"})
});


//FOR SLIDE4
const slider4 = document.getElementById("slider4");
const nextBtn4 = document.getElementById("nextBtn4");
const backBtn4 = document.getElementById("backBtn4");

nextBtn4.addEventListener("click", () => {
  slider4.scrollBy({ left: 260, behavior: "smooth" });
});

backBtn4.addEventListener("click", () => {
  slider4.scrollBy({ left: -260, behavior: "smooth" });
});
