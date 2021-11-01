var palabra = prompt("Ingrese una palabra");
consta(palabra);
vocales(palabra);
voltear(palabra);

function consta (palabra){
    let consonantes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
    let contador = 0;
    for (let i = 0; i < palabra.length; i++) {
        for (let j = 0; j < consonantes.length; j++) {
            if (palabra[i] == consonantes[j]) {
                contador++;
            }
        }
    }
    console.log("Constantes: " +contador);
}


function vocales (palabra){
    let vocales = ["a", "e", "i", "o", "u"];
    let contador = 0;
    for (let i = 0; i < palabra.length; i++) {
        for (let j = 0; j < vocales.length; j++) {
            if (palabra[i] == vocales[j]) {
                contador++;
            }
        }
    }
    console.log("Vocales: " +contador);
}

function voltear (palabra){
    let palabraInvertida = "";
    for (let i = palabra.length - 1; i >= 0; i--) {
        palabraInvertida += palabra[i];
    }
    console.log(palabraInvertida);
}
//if (palabra.length > 0) {
    //var consonantes = "";
    //for (var i = 0; i < palabra.length; i++) {
        //if (palabra[i] != "a" && palabra[i] != "e" && palabra[i] != "i" && palabra[i] != "o" && palabra[i] != "u") {
        //    consonantes += palabra[i];
      //  }
    //}
  //  console.log("La palabra " + palabra + " tiene " + consonantes.length + " consonantes");
//}
//if (palabra.length > 0) {
  //  var vocales = "";
    //for (var z = 0; z < palabra.length; z++) {
      //  if (palabra[z] == "a" || palabra[z] == "e" || palabra[z] == "i" || palabra[z] == "o" || palabra[z] == "u") {
         //   vocales += palabra[z];
        //}
    //}
    //console.log("La palabra " + palabra + " tiene " + vocales.length + " vocales");
//}

