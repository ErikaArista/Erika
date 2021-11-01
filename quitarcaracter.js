var ingresa = prompt("Ingresa una palabra");
quitar(ingresa);
function quitar (ingresa){
    let nueva = " ";
    let especiales = ["+","-","*","/","%","$","#","@","!"];
    for (let z = 0; z < ingresa.length; z++){
        for (let x = 0; x < especiales.length; x++){
            if (ingresa[z] == especiales[x]){
                nueva += ingresa[z-1];
                console.log(nueva);
            }
        }

        
    }
}