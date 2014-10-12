var menu = document.querySelector(".menu"),
    toggle = document.querySelector(".menu-toggle");

function toggleToggle() {
  toggle.classList.toggle("menu-open");
  toggle.classList.toggle("");
};

function toggleMenu() {
  menu.classList.toggle("active");
  menu.classList.toggle("");
};

toggle.addEventListener("click", toggleToggle, false);
toggle.addEventListener("click", toggleMenu, false);
