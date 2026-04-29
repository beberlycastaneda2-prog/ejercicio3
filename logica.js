let Texto=document.getElementById("Texto")
let sumar=document.getElementById("sumar")
let restar=document.getElementById("restar")
let contador=0

sumar.addEventListener("click", resultado)

function resultado (){
contador++
Texto.textContent=contador

}

restar.addEventListener("click", resultado2)

function resultado2 (){
contador--
Texto.textContent=contador

}