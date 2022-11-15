const menu_button = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
const div = document.querySelector(".code");

menu_button.addEventListener("click", () => {
  menu_button.classList.toggle("active");
  menu.classList.toggle("show-menu");
});

window.addEventListener("scroll", function () {
  var y = window.scrollY;
  if (y > 50) {
    navbar.style.cssText = "height: 55px;";
    menu.style.cssText = "padding-top: 60px;";
    bar.style.cssText = "top: 55px;";
  } else {
    navbar.style.cssText = "height: 75px;";
    menu.style.cssText = "padding-top: 80px;";
    bar.style.cssText = "top: 75px;";
  }
});

window.addEventListener("scroll", function () {
  var y = window.scrollY;
  if (y > 150) {
    div.style.cssText = "transform: translateX(0);opacity: 1;";
  } else {
    div.style.cssText = "transform: translateX(-900px);opacity: 0;";
  }
});

document.getElementById("valider").onclick = function () {
  var j, m, a;
  var cas1, cas2, cas3, cas4;

  j = document.getElementById("jour").value;
  m = document.getElementById("mois").value;
  a = document.getElementById("annee").value;

  cas1 =
    a > 0 &&
    (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) &&
    j >= 1 &&
    j <= 31;
  cas2 = a > 0 && (m == 4 || m == 6 || m == 9 || m == 11) && j >= 1 && j <= 30;
  cas3 = a > 0 && m == 2 && a % 4 == 0 && j >= 1 && j <= 29;
  cas4 = a > 0 && m == 2 && a % 4 != 0 && j >= 1 && j <= 28;

  if (cas1 || cas2 || cas3 || cas4) {
    document.getElementById("message").innerHTML = "la date est valide";
  } else {
    document.getElementById("message").innerHTML = "la date n'est pas valide";
  }
};
