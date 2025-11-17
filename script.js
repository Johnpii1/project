
  const slider = document.getElementById("slider");
  const nextBtn = document.getElementById("nextBtn");
  const backBtn = document.getElementById("backBtn");

  nextBtn.addEventListener("click", () => {
    slider.scrollBy({ left: 260, behavior: "smooth" });
  });

  backBtn.addEventListener("click", () => {
    slider.scrollBy({ left: -260, behavior: "smooth" });
  });

