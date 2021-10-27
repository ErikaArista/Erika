function Saludar (){
console.log("Hola");
}
function Pregunta(){
    console.log("Como estas");
    var preguntar = prompt("Gustas gomitas");
    switch( preguntar){
        case "si":
            console.log("Toma unas gomitas");
            break;
        case "no":
            console.log("Lo intente");
            break;
    }
}
function Despedir(){
    console.log("Adios");
}
Saludar();
Pregunta();
Despedir();