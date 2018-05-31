window.cipher = {
  encode: (str, offset) => {
    let encodeResult = "";  
  /* Aqui se guardara el texto ya codificado con el numero de desplazamientos*/
     for(let i = 0; i < str.length; i++) {
        //traducira al número de la letra en el Código ASCII
  	    if(65 <= str.charCodeAt(i) && str.charCodeAt(i) <= 90){
  	        //Condicion para las mayusculas en ASCII
          let msgEncode = (((str.charCodeAt(i) - 65 + parseInt(offset)) % 26) + 65);
          encodeResult += String.fromCharCode (msgEncode);
  	     //Agregando la nueva posicion y pasandolo a letra
  	    } else { 
  	       //En el caso de aparecer espacios 
        encodeResult += str.charAt(i)}; //por que es text
  	  }
  	     return encodeResult;
  },
  
    decode: (str, offset) => {
      let decodeResult = "";  
      /* Aqui se guardara el texto ya codificado con el numero de desplazamientos*/
         for(let i = 0; i < str.length; i++) {
            //traducira al número de la letra en el Código ASCII
            if(65 <= str.charCodeAt(i) && str.charCodeAt(i) <= 90){
                //Condicion para las mayusculas en ASCII
              let msgEncode = (((str.charCodeAt(i) + 65 - parseInt(offset)) % 26) + 65);
              decodeResult += String.fromCharCode (msgEncode);
             //Agregando la nueva posicion y pasandolo a letra
            } else { 
               //En el caso de aparecer espacios 
            decodeResult += str.charAt(i)}; //por que es text
          }
             return decodeResult;

     }
}
