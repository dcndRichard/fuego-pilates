let mobileNavBtn = document.getElementById("mobile-nav-btn");
let mobileCloseBtn = document.getElementById("mobile-close-btn");
let mobileNavMenu = document.getElementById("hidden-nav-menu");

mobileNavBtn.addEventListener("click", e => {
  e.target.style.right = "-28px";
  e.target.style.transition = "right 500ms";

  mobileCloseBtn.style.right = "17px";
  mobileCloseBtn.style.transition = "right 500ms";

  mobileNavMenu.style.right = "0";
  mobileNavMenu.style.transition = "right 500ms";
  mobileNavMenu.style.transition = "transition-delay: 500ms;";
});

mobileCloseBtn.addEventListener("click", e => {
  e.target.style.right = "-25px";
  e.target.style.transition = "right 500ms";

  mobileNavBtn.style.right = "16px";
  mobileNavBtn.style.transition = "right 500ms";

  mobileNavMenu.style.right = "-50%";
  mobileNavMenu.style.transition = "right 500ms";
  mobileNavMenu.style.transition = "transition-delay: 500ms;";
});
