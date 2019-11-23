//Esta forma esta obsoleta y en desuso
function crearNodo(event){
  var texto = event,
      nodo = document.createElement("p"),
      textoNodo = document.createTextNode(texto);

  nodo.appendChild(textoNodo);

  var atributoNodo = document.createAttribute("class");

  atributoNodo.value = "colorTexto";
  nodo.setAttributeNode(atributoNodo);

  var padreNodo = document.getElementsByClassName("cuerpo")[0];

  return padreNodo.appendChild(nodo);
}

//Forma actual de darle un atributo con un valor especifico a un nodo es de la siguiente forma:             
/*
function crearNodo(event){
  var texto = event,
      nodo = document.createElement("p"),
      textoNodo = document.createTextNode(texto);

  nodo.appendChild(textoNodo);
  nodo.setAttribute("class", "colorTexto");

  var padreNodo = document.getElementsByClassName("cuerpo")[0];

  return padreNodo.appendChild(nodo);
}
*/