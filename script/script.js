const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length)
  {
    slideIndex = 1;
  }
  if (n < 1)
  {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++)
  {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

// navList.addEventListener("click", function(){
//   hamburger.classList.remove("active");
//   navMenu.classList.remove("active");
// })

document.querySelectorAll(".nav-lists").forEach(n => n.addEventListener("click",function(){
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
} ))