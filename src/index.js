/* Acá va tu código */
window.onload = function() {
encode:(offset, string)=> {
    for(let i= 0; i < string.let; i++){
        let newPositionAscii = (string[i].charCodeAt(i) - offset) % 26 + 65;
        String.fromCharCode(newPositionAscii);
    }
}
decode:(offset, string)=> {
    for(let i= 0; i < string.let; i++){
        let newPositionAscii = (string[i].charCodeAt(i) - offset) % 26 + 65;
        String.fromCharCode(newPositionAscii);
    }
}


    
}
