var frase = prompt("Ingresa la frase");
var nueva = Noespacios(frase);
console.log(nueva);

function Noespacios(frase){
 var nuevap = " ";
 var letras = ["1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t"];
    for(i = 0; i < frase.length; i++){
        let verificacion = 1;
        for(a = 0; a < letras.length; a++){
             if(frase[i] == letras[j]){
                 verificacion = 0;  
            }
        }
        if(verificacion == 1){
         nuevap += frase[i];
        }
         else{
             nuevap += "";
        }
    }
    return nuevap;
}

