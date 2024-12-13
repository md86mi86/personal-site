const $ = document;
const mediaQuery = window.matchMedia("(max-width: 1024px)");
let menuButton = $.getElementById("menuButton");
let menu = $.getElementById("menu");
let closeButton = $.getElementById("closeButton");
let darkModeButton = $.getElementById("darkModeButton");

function handle() {
  if (mediaQuery.matches) {
    menu.style.display = "none";
    menu.style.transform = "translateX(100%)";
  } else {
    menu.style.display = "flex";
    menu.style.transform = "translateX(0%)";
  }
}

menuButton.addEventListener("click", () => {
  $.querySelector("body").style.overflowY = "hidden";
  menu.style.display = "flex";
  setTimeout(() => {
    menu.style.transform = "translateX(0%)";
  }, 200);
});

closeButton.addEventListener("click", () => {
  $.querySelector("body").style.overflowY = "scroll";
  menu.style.transform = "translateX(100%)";
  setTimeout(() => {
    menu.style.display = "none";
  }, 200);
});

darkModeButton.addEventListener("click", () => {
  const html = $.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    localStorage.setItem("darkmode", "disabled");
  } else {
    html.classList.add("dark");
    localStorage.setItem("darkmode", "enabled");
  }
});

window.addEventListener("resize", handle);
handle();

window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("darkmode") === "enabled") {
    const html = $.querySelector("html");
    html.classList.add("dark");
  }
});
