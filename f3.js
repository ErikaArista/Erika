function Preguntas(){
    var nombre = prompt("Como te llamas?");
    console.log("Tu nombre es:" +nombre);
    var edad = prompt("Ingresa tu edad");
    if(edad <= 11){
       console.log("Eres un peque");
    }   
    else{
        if(edad >= 12 && edad <= 17){
            console.log("Eres un adolescente");
        }
    }
    if(edad >= 18 && edad <= 49){
        console.log("Eres un adulto");
    }
    else{
        if( edad >=50){
            console.log("Eres un adulto mayor");

        }
    }
        
}
Preguntas();
