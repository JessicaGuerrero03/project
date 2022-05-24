//function changeColor(event){
  //  document.getElementById("main").style.backgroundColor = event.value;
//}
var muestrario;
var colorPredeterminado = "#0000f";

window.addEventListener("load", startup, false);

function startup() {
    muestrario = document.querySelector("#muestrario");
    muestrario.value = colorPredeterminado;
    muestrario.addEventListener("input", actualizarPrimero, false);
    muestrario.addEventListener("change", actualizarTodo, false);
    muestrario.select();
  }