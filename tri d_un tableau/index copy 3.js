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
  if (y > 350) {
    div.style.cssText = "transform: translateX(0);opacity: 1;";
  } else {
    div.style.cssText = "transform: translateX(-900px);opacity: 0;";
  }
});


let i = 0 ;
let arrt=[];
document.getElementById('reverse').onclick=function(){
    let inp=""; 
      let caros=document.getElementById('enter').value ;
      if(caros<=10){
        for (i; i <caros;i++) {
          inp=inp+"<input type=number id=en"+i+">"
          document.getElementById('pr').innerHTML=inp       
        }
      }
      else{
        document.getElementById('pr').innerHTML="enter valeur entre 1 et 10"
      }
    }
    document.getElementById('Trier').onclick=function(){
      let aff="";
        for(let k=0;k<i;k++){
            arrt.push(document.getElementById('en'+k).value);
        }
        for(let j=0;j<i;j++){
          for(let n=j;n<=i;n++){
            if(arrt[j]-arrt[n]>0){
              let c=arrt[n];
              arrt[n]=arrt[j];
              arrt[j]=c;
            }
          }
          aff=aff+"<td>"+arrt[j]+"</td>"
        document.getElementById('ed').innerHTML="<table><tr>"+aff+"</tr></table><style>table, th, td {border: 1px solid black;border-collapse: collapse;}table{width:100%}</style>" 
        
        }
        
    }