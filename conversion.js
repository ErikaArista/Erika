function letras(){
    var numero = prompt("Ingresa el numero");
    var numer = numero.split(" ");
        var nueva = [];
        switch(numero){
            case "0" :
                var r = "cero";
                nueva.push(r);
                break;
            case "1" :
                 var m = "Uno";

                 nueva.push(m);
                 break;
            case "2" :
                 var k = "dos";

                 nueva.push(k);
                 break;
            case "3" :
                var n = "tres";
                nueva.push(n);
                break;
             case "4" :
                var o = "cuatro";
                nueva.push(o);
                break;
            case "5" :
                var p = "cinco";
                nueva.push(p);
                break;
            case "6" :
                var q = "seis";
                nueva.push(q);
                break;
            case "7" :
                var s = "siete";
                nueva.push(s);
                break;
            case "8" :
                var t = "ocho";
                nueva.push(t);
                break;
            case "9" :
                var b = "nueve";
                nueva.push(b);
                break;
                default:
                    console.log("No existe ese numero");
        }
    console.log(nueva);
}   
letras();