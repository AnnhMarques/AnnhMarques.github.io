let names = document.querySelector ("#name");
let img = document.querySelector ("#Photo");

// remember the width from the beginning
let originalWidth = img.width;

// do breath 1000 times every second
setInterval(breathe, 10) // ms!

function breathe() {

   let time = timeInSeconds();

   let widthDifference = Math.sin(time) * 10;

   img.width = originalWidth + widthDifference;
}

function timeInSeconds() {
   return Date.now() / 1000;
}
  

names.addEventListener("mouseover", TrocaRosa);

function TrocaRosa (){
    names.style.color="rgb(255, 0, 191)";
 }
 
 
 names.addEventListener("mouseout", TrocaBranco);
 function TrocaBranco (){
    names.style.color="white";
 }
 
 

 let Position = document.querySelector ("#Position");

 
 Position.addEventListener("mouseover", TrocaWhite);
 
 function TrocaWhite (){
    Position.style.color="white";
  }
  
  
  Position.addEventListener("mouseout", TrocaPink);
  function TrocaPink (){
    Position.style.color="rgb(255, 0, 191)";
  }
  
  