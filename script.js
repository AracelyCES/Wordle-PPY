const palabra = "APPLE";
let vidas = 6;

document.getElementById("guess-button").addEventListener("click", ()=>{
  const intento = leerIntento ();
  if (palabra === intento) {
    terminar ("Ganaste!😀")
    return;
  }
    const row = document.createElement ("div")
    row.className = "row";
    const grid = document.getElementById ("grid");

  for (const i in intento) {
  const span = document.createElement("span")
     span.className = "letter";
     span.innerText = intento[i];
    if (intento[i] === palabra[i]) {
      span.style.background = "green"
    } else if (palabra.includes(intento[i])) {
      span.style.background = "yellow"
    } else{
      span.style.background = "gray";
    }
     row.appendChild(span)
  } 
     grid.appendChild (row)
  vidas--;
if (!vidas){

  terminar ("Perdiste!😖");
  return;
}

}); 

function leerIntento (){
  const input = document.getElementById ("guess-input");
  const valor = input.value.toUpperCase ();
  return valor;
}

 function terminar (mensaje){
  let p = document.getElementById("guesses");
  p.innerHTML ="<h1>"+ mensaje + "</h1>";
  console.log (p)
 }