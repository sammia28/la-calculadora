var opcion = parseInt(prompt("Escoge una operación: \n" + "1.Suma\n" + "2.Resta\n" + "3.Multiplicación\n" + "4.División\n" + "5.Mayor\n" + "6.Menor\n" + "7.Residuo\n" + "8.Igualdad\n"))
if(opcion <=0 || opcion >=9){
    window.alert("La opción es invalida")
}else{
    window.alert
var numero1 = parseInt(prompt("Ingresa el número 1"))
var numero2 = parseInt(prompt("Ingresa el número 2"))
switch(opcion){
    case 1:  
        var suma = numero1 + numero2;
        window.alert("La suma es " + suma);
        break;
    case 2:
        var resta = numero1 - numero2;
        window.alert("La resta es " + resta);
        break;
    case 3:
        var multiplicación = numero1 * numero2;
        window.alert("La multiplicación es " + multiplicación);
        break;
    case 4:
        var división = numero1 / numero2;
        window.alert("La división es " + división);
        break;
    case 5:
        var mayor = numero1 > numero2;
        if(numero1 > numero2){
            window.alert("El número mayor es " + numero1)
        }else{
            window.alert("El número mayor es " + numero2)
        }
        break;
    case 6:
        var menor = numero1 < numero2;
        if(numero1 < numero2){
            window.alert("El número menor es " + numero1)
        }else{
            window.alert("El número menor es " + numero2)
        }
        break;
    case 7:
        var residuo = numero1 % numero2;
        window.alert("El residuo es " + residuo); 
        break;
    case 8:
        var igualdad = numero1 == numero2;
        if(numero1 == numero2){
            window.alert("Los dos números son iguales");
        }else{
            window.alert("Los dos números son diferentes")
        }
        break;  
    }
}