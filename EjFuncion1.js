var edad = parseInt(prompt("Ingrese su edad"));
var resultado1 = calcularEdad(edad);
var musica = prompt("Ingrese su musica favorita entre; 1) rock, 2) pop, 3)rap");
var resultado2 = calcularMusica(musica);
var deporte = prompt("Ingrese su deporte favorito entre; 1) futbol, 2) basquet, 3)tenis");
var resultado3 = verificarDeporte(deporte);
var estatura = parseInt(prompt("Ingrese su estatura"));
var resultado4 = calcularEstatura(estatura);
var resultado5 = calcularResultado(edad, musica, deporte, estatura);

alert (resultado1);
alert (resultado2);
alert (resultado3);
alert (resultado4);
alert (resultado5);


function calcularEdad(edad) {
    var edad = edad;
    if (edad >= 18) {
        return "Es mayor de edad";
    } else {
        return "Es menor de edad";
    }
}

function calcularMusica(musica) {
    var musica = musica;
    if (musica == "rock") {
        return "Es rock";
    } else if (musica == "pop") {
        return "Es pop";
    } else if (musica == "rap") {
        return "Es rap";
    } else {
        return "No es una musica valida";
    }
}

function verificarDeporte(deporte) {
    var deporte = deporte;
    if (deporte == "futbol") {
        return "Es futbol";
    } else if (deporte == "basquet") {
        return "Es basquet";
    } else if (deporte == "tenis") {
        return "Es tenis";
    } else {
        return "No es un deporte valido";
    }
}

function calcularEstatura(estatura) {
    var estatura = estatura;
    if (estatura >= 1.70) {
        return "Es alta";
    } else {
        return "Es baja";
    }
}

function calcularResultado(edad, musica, deporte, estatura) {
    var edad = edad;
    var musica = musica;
    var deporte = deporte;
    var estatura = estatura;
    if (edad == "Es mayor de edad" && musica == "Es rock" && deporte == "Es futbol" && estatura == "Es alta") {
        return "Es una persona que se puede considerar como una persona de la vida real";
    } else {
        return "Es una persona que no se puede considerar como una persona de la vida real";
    }
}

alert(calcularResultado(resultado1, resultado2, resultado3, calcularEstatura(estatura)));