window.onload = function(){

// Guardando información del mensaje y número de posiciones en el boton cifrar
const btnEncode = document.getElementById("btn1");//El elemento busca en mi html el id del botón
btnEncode.addEventListener ("click", function() { //el metodo hace que al hacer click en el botón la función guarde los valores de str y offset
let str = document.getElementById("str").value;
let offset = document.getElementById("numOffset").value;
document.getElementById("result").innerHTML = window.cipher.encode (str, offset);
});

// Guardando información del mensaje y número de posiciones en el boton descifrar
const btnDecode = document.getElementById("btn2");//El elemento busca en mi html el id del botón
 btnDecode.addEventListener("click", function(){ //el metodo hace que al hacer click en el botón la función guarde los valores de str y offset
let str = document.getElementById("str").value;
let offset = document.getElementById("numOffset").value;
document.getElementById("result").innerHTML = window.cipher.decode (str, offset);
});
}
   
   
   
   

