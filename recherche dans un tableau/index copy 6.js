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
  if (y > 500) {
    div.style.cssText = "transform: translateX(0);opacity: 1;";
  } else {
    div.style.cssText = "transform: translateX(-900px);opacity: 0;";
  }
});


document.getElementById('reverse').onclick=function(){
  let inp="";
    let caros=document.getElementById('enter').value ;
    if(caros<=10){
      for (let i = 0; i <caros;i++) {
        inp=inp+"<input id=en"+i+">"
        document.getElementById('pr').innerHTML=inp      
      }
    }
    else{
      document.getElementById('pr').innerHTML="enter valeur entre 1 et 10"
    }
  }
  document.getElementById('rechr').onclick=function(){
    let objt=document.getElementById('obj').value;
    let rpe="";
    for(let j=0 ; j<=10 ; j++){
      rpe=rpe+" "+document.getElementById("en"+j).value
      if(rpe.includes(objt)){
      document.getElementById('ed').innerHTML=" valeur à rechercher existe dans table "
      }
      else {
        document.getElementById('ed').innerHTML=" valeur à rechercher ne existe pas  "
      }
    }
}