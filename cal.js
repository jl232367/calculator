const 

function operate(exp,num1,num2) {
    if (exp === "+") {
        return add(num1,num2);
    } else if (exp === "-") {
        return sub(num1,num2);
    } else if (exp === "*") {
        return mult(num1,num2);
    } else if (exp === "/") {
        return divide(num1,num2);
    } else {
        alert("Please provide a valid operator!");
    }
}

function add(num1, num2) {
    return num1 + num2; 
}

function sub(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1*num2;
}

function divide(num1, num2) { 
    return num1/num2;
}

