window.cipher = {
  encode: (str, offset) => {
    let encodeResult = ""; //Guardo el mensaje cifrado con el número de desplazamiento
      for(let i = 0; i < str.length; i++) { //arreglo de caracteres
        if(65 <= str.charCodeAt(i) && str.charCodeAt(i) <= 90){ //Condicion para mayúsculas.Traducira al número de la letra en el Código ASCII
  	        let msgEncode = (((str.charCodeAt(i) - 65 + parseInt(offset)) % 26) + 65); //Se agrega el número de posiciones y nos da el número de código ASCII
          encodeResult += String.fromCharCode (msgEncode);//Pasando el mensaje de número a letra
  	    } else { 
  	      encodeResult += str.charAt(i)}; //En el caso de aparecer espacios o otro signo
  	  }
  	     return encodeResult;
  },
  
  decode: (str, offset) => {
    let decodeResult = "";  
      for(let i = 0; i < str.length; i++) {
        if(65 <= str.charCodeAt(i) && str.charCodeAt(i) <= 90){
            let msgEncode = (((str.charCodeAt(i) + 65 - parseInt(offset)) % 26) + 65); //Se resta el número de posiciones y nos da el número de código
          decodeResult += String.fromCharCode (msgEncode);
        } else { 
          decodeResult += str.charAt(i)}; 
          }
             return decodeResult;
 }
}
