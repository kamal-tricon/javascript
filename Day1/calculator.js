function add(num1, num2){
    return num1 + num2;
}

function substract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function activate(){
    var num1 = 45;
    var num2 = 9;

    var addition = add(num1, num2);
    var substraction = substract(num1, num2);
    var multiplication = multiply(num1, num2);
    var division = divide(num1, num2);

    console.log("Sum of the numbers is: "+ addition);
    console.log("Substraction of the numbers is: "+ substraction);
    console.log("Multiplaction of the numbers is: "+ multiplication);
    console.log("Division of the numbers is: "+ division);

}

activate();