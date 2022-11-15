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


document.getElementById('dessiner').onclick=function(){
    let etoil=document.getElementById('nombr1').value;
    let E,i,j,h,n,f;
for (E = etoil; E >= 0;E--){
    for(j=E;j<=etoil;j++){
        document.getElementById('res').innerHTML +="&nbsp";
    }
    for (i = E; i >=1; i--){
        document.getElementById('res').innerHTML +=" *";
    }
    document.getElementById('res').innerHTML+="<br>";
}
for(f=1;f<etoil;f++){
    for(h=etoil;h>=f;h--){
        document.getElementById('reh').innerHTML +="&nbsp";
    }
    for (n = 1; n<=f; n++){
        document.getElementById('reh').innerHTML +=" *";
    }
document.getElementById('reh').innerHTML+="<br>";
}
}
