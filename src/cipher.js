window.cipher = {
  encode: () => {
    /* Acá va tu código */
   function encode(itIsCoded){
   //Variable str guardara texto ingresado
    const str = text;
    //Variable guardara el número de posición
    const numPosition = position;
    /*Variable result para que aqui se guarde el texto ya codificado con el numero de desplazamientos*/
    const encodeResult = "";
    //Recorriendo el texto ingresado
    for(let i = 0, str.length; i++) {
   /*Al recorrer el texto con la fromula ira haciendo el cambio de posición y nos entregara el número*/
  let newPositionAscii = (str[i].charCodeAt(i) - position) % 26 + 65 
  //Ahora el número de posición se traducira a letra en el Código ASCII
  itIsCoded = encodeResult += String.fromCharCode(newPositionAscii);
   }
   return (encode(itIsCoded));
  }
  
  
  decode: () => {
    /* Acá va tu código */
    function decode(itIsCoded){
     //Variable str guardara texto ingresado
     const str = text;
     //Variable guardara el número de posición
     const numPosition = position;
     /*Variable result para que aqui se guarde el texto ya codificado con el numero de desplazamientos*/
     const decodeResult = "";
     //Recorriendo el texto ingresado
     for(let i = 0, str.length; i++) {
    /*Al recorrer el texto con la fromula ira haciendo el cambio de posición y nos entregara el número*/
   let newPositionAscii = (str[i].charCodeAt(i) - position) % 26 + 65;
   //Ahora el número de posición se traducira a letra en el Código ASCII
   itIsCoded = decodeResult += String.fromCharCode(newPositionAscii);  
  }
  return (decode(itIsCoded));
}




