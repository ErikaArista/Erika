var nombre = [Ana, Laura, Kenia, Luis, Erick, Johan, Michel, Rony];
var apellido = [Arista, Torres, Aranda, Gonzales, Rico, Vite, Lopez, Avila];
var sexo = [Masculino, femenino];
var edad = [17,18,19];
function Aleatorio(nombre, apellido, sexo, edad) {
    for (var i = 0; i < 1000; i++) {
        var nombre = nombre[Math.floor(Math.random() * nombre.length)];
        var apellido = apellido[Math.floor(Math.random() * apellido.length)];
        var sexo = sexo[Math.floor(Math.random() * sexo.length)];
        var edad = edad[Math.floor(Math.random() * edad.length)];
        alert(nombre + " " + apellido + " " + sexo + " " + edad);
    }
}