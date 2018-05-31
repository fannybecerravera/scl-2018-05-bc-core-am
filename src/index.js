window.onload = function(){
    
    //Guardando información del mensaje y numero de posiciones en el boton cifrar
    const btnEncode = document.getElementById("btn1");
    btnEncode.addEventListener ("click", function() {
    let str = document.getElementById("str").value;
    let offset = document.getElementById("numOffset").value;
    document.getElementById("result").innerHTML = window.cipher.encode (str, offset);
});

//Guardando información del mensaje y numero de posiciones en el boton descifrar
    const btnDecode = document.getElementById("btn2");
    btnDecode.addEventListener("click", function(){
    let str = document.getElementById("str").value;
    let offset = document.getElementById("numOffset").value;
    document.getElementById("result").innerHTML = window.cipher.decode (str, offset);
});
   
}
   
   
   
    /*const btn1 = document.getElementById ("btn1");
    btn1.addEventListener ("click", function (){
        let result = document.getElementById("result");
        result.innerHTML= encodeResul;

    });

/*const text = document.getElementById ("text");
position.innerHTML = 

const btn1 = document.getElementById ("btn1");
btn.addEventListener ("click", function (encode));

const btn2 = document.getElementById ("btn2"); 
btn.addEventListener ("click", function (decode));

const result = document.getElementById ("result"); 
result.innerHTML = */

