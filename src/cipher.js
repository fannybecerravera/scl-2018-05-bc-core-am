window.cipher = {
  encode: (str, offset ) => {
    let encodeResult = "";  /* Aqui se guardara el texto ya codificado con el numero de desplazamientos*/
    for(let i = 0; i < str.length; i++) {//Recorriendo el texto ingresado
     let newPositionAscii = str.charCodeAt(i); //traducira al número de la letra en el Código ASCII
     if(64> str && str <91){ //Condicion para las mayusculas en ASCII
      encodeResult += String.fromCharCode((newPositionAscii - 65 + parseInt(offset)) % 26 + 65); //Agregando la nueva posicion y pasandolo a letra
     }else if(96 > str && str < 123){ //condicion para las minusculas
      encodeResult += String.fromCharCode((newPositionAscii - 97 + parseInt(offset)) % 26 + 97); //Agregando la nueva posicion y pasandolo a letra
     }else{ //En el caso de aparecer espacios 
      encodeResult += text.charAt(i) //por que es text
     };
     
      return document.getElementById("result").innerHTML= encodeResul;
     };
  
  
     decode: (str, offset) => {
      let decodeResult = "";  /* Aqui se guardara el texto ya codificado con el numero de desplazamientos*/
      for(let i = 0; i < str.length; i++) {//Recorriendo el texto ingresado
       let newPositionAscii = str.charCodeAt(i); //traducira al número de la letra en el Código ASCII
       if(65<= str && str <= 90){ //Condicion para las mayusculas en ASCII
        decodeResult += String.fromCharCode((newPositionAscii - 65 + parseInt(offset)) % 26 + 65); //Agregando la nueva posicion y pasandolo a letra
       }else if(97 <= str && str <= 122){ //condicion para las minusculas
        decodeResult += String.fromCharCode((newPositionAscii - 97 + parseInt(offset)) % 26 + 97); //Agregando la nueva posicion y pasandolo a letra
       }else{ //En el caso de aparecer espacios 
        decodeResult += text.charAt(i) //por que es text
       };
       
        return document.getElementById("result").innerHTML= decodeResul;
       };
      }

