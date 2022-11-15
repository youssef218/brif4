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
  if (y > 300) {
    div.style.cssText = "transform: translateX(0);opacity: 1;";
  } else {
    div.style.cssText = "transform: translateX(-400px);opacity: 0;";
  }
});

document.getElementById('mul').onclick=function(){
    var num1=document.getElementById('nombr1').value;
    var num2=document.getElementById('nombr2').value;
    num1=Number(num1) ;num2=Number(num2);
    document.getElementById('result').innerHTML=num1*num2
}
document.getElementById('dev').onclick=function(){
    var num1=document.getElementById('nombr1').value;
    var num2=document.getElementById('nombr2').value;
    num1=Number(num1) ;num2=Number(num2);
    document.getElementById('result').innerHTML=num1/num2
}
document.getElementById('moin').onclick=function(){
    var num1=document.getElementById('nombr1').value;
    var num2=document.getElementById('nombr2').value;
    num1=Number(num1) ;num2=Number(num2);
    document.getElementById('result').innerHTML=num1-num2
}
document.getElementById('plus').onclick=function(){
    var num1=document.getElementById('nombr1').value;
    var num2=document.getElementById('nombr2').value;
    num1=Number(num1) ;num2=Number(num2);
    document.getElementById('result').innerHTML=num1+num2
}