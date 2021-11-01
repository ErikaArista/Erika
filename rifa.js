alert("Bienvenido a la rifa");
var nombres = [];
registro(nombres);
function registro(nombres){
var registar = parseInt(prompt("Ingrese la cantidad de nombres a registrar"));
for (var i = 0; i < registar; i++) {
    var nombre = prompt("Ingrese su nombre");
    nombres.push(nombre);
    alert (" Particpante registrado");
}
alert ("Participantes:   " +nombres);
rifa(nombres);
}

function rifa(nombres){
var rifa = parseInt(prompt("Ingrese la cantidad de nombres a rifar"));
for (var i = 0; i < rifa; i++) {
    var rifar = Math.floor(Math.random() * nombres.length);
    alert(nombres[rifar]);
}
}
