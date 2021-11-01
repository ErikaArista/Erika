var frase = prompt("Ingrese una frase");
var numeros = "";
for (var i = 0; i < frase.length; i++) {
  if (frase[i] == "a") {
    numeros += "0";
   } 
   else if (frase[i] == "b") {
    numeros += "1";
   }
   else if (frase[i] == "c") {
    numeros += "2";
   } 
   else if (frase[i] == "d") {
    numeros += "3";
   } 
   else if (frase[i] == "e") {
    numeros += "4";
   } 
   else if (frase[i] == "f") {
    numeros += "5";
   } 
   else if (frase[i] == "g") {
    numeros += "6";
   } 
   else if (frase[i] == "h") {
   numeros += "7";
   } 
   else if (frase[i] == "i") {
    numeros += "8";
   }
   else if (frase[i] == "j") {
    numeros += "9";
   }
   else if (frase[i] == "k") {
    numeros += "10";
   }
   else if (frase[i] == "l") {
    numeros += "11";
   }
   else if (frase[i] == "m") {
    numeros += "12";
   }
   else if (frase[i] == "n") {
    numeros += "13";
   }
   else if (frase[i] == "o") {
    numeros += "14";
   }
   else if (frase[i] == "p") {
    numeros += "15";
   }
   else if (frase[i] == "q") {
    numeros += "16";
   }
   else if (frase[i] == "r") {
    numeros += "17";
   }
   else if (frase[i] == "s") {
    numeros += "18";
   }
   else if (frase[i] == "t") {
    numeros += "19";
   }
   else if (frase[i] == "u") {
    numeros += "20";
   }
   else if (frase[i] == "v") {
    numeros += "21";
   }
   else if (frase[i] == "w") {
    numeros += "22";
   }
   else if (frase[i] == "x") {
    numeros += "22";
   }
   else if (frase[i] == "y") {
    numeros += "23";
   }
   else if (frase[i] == "z") {
    numeros += "24";
   }
   else {
    numeros += frase[i];
  }
}
alert(numeros);