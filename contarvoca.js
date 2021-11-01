var frase = prompt("Ingrese una frase");

for (var i = 0; i < frase.length; i++) {
  if (frase[i] == "a" || frase[i] == "e" || frase[i] == "i" || frase[i] == "o" || frase[i] == "u") {
    console.log(frase[i]);
  }
}