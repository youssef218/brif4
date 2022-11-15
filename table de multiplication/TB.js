
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

document.getElementById('afficher').onclick=function(){
    let i,res="";
    let v= document.getElementById('nombr1').value;
    for(i=1;i<=10;i++){
        res=res+"<p>"+v+"x"+i+"="+ i*v+ "</p>";
        document.getElementById('rs').innerHTML=res;
    }
}
