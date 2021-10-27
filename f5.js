function Palabras(text){
    var text = prompt("Ingresa la frase");
    let array = [];
    for(let i = 0; i < text.length; i++){
        if(text[i] != " "){
        array.push(text[i]);
        console.log(array);
        }
    }
    return array;
} 
Palabras();
