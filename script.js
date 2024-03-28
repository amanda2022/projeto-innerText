let titulo = document.getElementById("titulo")
let link = document.querySelector("a")

titulo.innerText = "Manipulando elementos"
link.innerText = " com duas prpriedades que esta sendo usada aqui"

let listaOrdenada = document.querySelector("ul")
let listaNaoOrdenada = document.querySelector("ol")

listaOrdenada.innerHTML =
  <li> Propriedades do js</li>
  <li>innerHTML</li>
  <li>innerText</li>