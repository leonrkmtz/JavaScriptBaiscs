var formaText = document.querySelector("h1");
var formaTextdos = document.querySelector("h3");
var boton = document.querySelector(".button");

boton.addEventListener("click", function(){

  formaText.setAttribute("class","uno");
  formaTextdos.setAttribute("class","dos py-3");
  boton.setAttribute("class","boton");

});
