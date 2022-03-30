const letters = document.querySelectorAll(".word span");

letters.forEach((letter) => {
  letter.addEventListener("click", (e) => {
    e.target.classList.add("active");
  });
  
  letter.addEventListener("animationend", (e) => {
    e.target.classList.remove("active");
  });
  
  setTimeout(() => {
    letter.classList.add("active");
  }, 100)
});