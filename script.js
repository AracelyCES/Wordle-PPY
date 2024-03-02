let palabra = "APPLE";
let vidas = 6;

let diccionario = ["APPLE", "HOUSE", "ANGEL","PASTA", "NEVER", "AFTER"];
let max =diccionario.length -1;
let indice = Math.floor(Math.random()* 5 + 1);
palabra = diccionario [indice];

document.getElementById ("guess-input").addEventListener("keypress",(event) => {
  if (event.key === "Enter") {
    console.log ("Enter");
    document.getElementById("guess-button").click();
  }
    
});

const API = "https://random-word-api.vercel.app/api?words=1&length=5";

fetch(API).then ((response)=> {
  response.json ().then((body)=>{
   palabra= body[0].toUpperCase();
  })
})

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
    } else if (palabra.includes(intento[i]) && noSeRepite(palabra, intento[i])) {
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
  console.log(palabra);
  return;
}

}); 

function leerIntento (){
  const input = document.getElementById ("guess-input");
  const valor = input.value.toUpperCase ();
  return valor;
}

 function terminar (mensaje){
  document.getElementById("guess-button").disabled = true;
  let p = document.getElementById("guesses");
  p.innerHTML ="<h1>"+ mensaje + "</h1>";
  console.log (p)
 }
 function noSeRepite(palabra,letra){
  //ver despues
  return true;
  
 }


 
 
 