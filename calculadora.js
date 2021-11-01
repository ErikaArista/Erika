var nombre = prompt("Ingrese el simbolo de la operacion");
switch (nombre){
    case "+" :
        suma();
break;
     case "-" :
    resta();
break;
     case "*" :
    multiplicacion();
break;
case "/" :
        division();
break;
    
}

function suma(){
    var n1 = 5, n2 = 10, total;
    total = n1 + n2;
    console.log(total);
}
function resta(){
    var n1 = 5, n2 = 10, total;
    total = n1 - n2;
    console.log(total);
}
function multiplicacion(){
    var n1 = 5, n2 = 10, total;
    total = (n1 * n2);
    console.log(total);
}
function division(){
    var n1 = 5, n2 = 10, total;
    total = (n1 / n2);
    console.log(total);
}