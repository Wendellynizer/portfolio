let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // let classLength = entry.target.classList.length; 


        if(entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

let projectL = document.querySelectorAll('.project-left');
projectL.forEach((el) => observer.observe(el));

let projectR = document.querySelectorAll('.project-right');
projectR.forEach((el) => observer.observe(el));


let lastKnownScrollPosition = 0;
let ticking = false;

function showBackToTopBtn(scrollPos) {
    let backTopBtn = document.querySelector(".back-top");
    if(window.scrollY <= 20) {
        backTopBtn.classList.remove("back-top-show");
    }
    else {
        backTopBtn.classList.add("back-top-show");
    }
}

document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
        showBackToTopBtn(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});


function openProject(id) {
    console.log(id);
    
    $(".project-backdrop").toggleClass("show-backdrop");
} 

function closeProject() {
    $(".project-backdrop").toggleClass("show-backdrop");
}


//copy email
function copyEmail() {
   // Copy the text inside the text field
   navigator.clipboard.writeText("wendelsabelo27@gmail.com");

   let copyText = document.querySelector(".copyText");
   copyText.style.opacity = 1;

   setTimeout(function() {
    copyText.style.opacity = 0;
   }, 800);
}