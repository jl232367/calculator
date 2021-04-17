let firstNumb = "";
let secondNumb = "";
let opVal = "";
const optCheck = /\+\-\*\//

let keyVal = 0;

const numbs = document.querySelectorAll('.numberBtn');
const ops = document.querySelectorAll('.opBtn');
const equalBtn = document.querySelector('.equals');

ops.forEach((opBtn) => {
    opBtn.addEventListener('click', () => {
        if (Number(firstNumb) >= 0 && Number(secondNumb) >= 0 && (opVal === "+" || opVal === "-" || opVal === "*" || opVal === "/")) {
            firstNumb = operate(opVal,Number(firstNumb),Number(secondNumb));
            let displayView = document.querySelector('#display');
            displayView.innerHTML = Number(firstNumb);
            opVal = opBtn.textContent;
        } else {
            opVal = opBtn.textContent;
            
            displayView.innerHTML = Number(firstNumb);
        }
        //If there is already a value in opval I should execute the operate function and set the new display value to the product

        //display = display. + opBtn.textContent;
        //let displayView = document.querySelector('#display');
        //displayView.innerHTML = display;
        secondNumb = "";
    });
});
numbs.forEach((numberBtn) => {
    numberBtn.addEventListener('click', () => {
        let displayView = document.querySelector('#display');
        
            
            if (opVal === "+" || opVal === "-" || opVal === "*" || opVal === "/") {
                //secondNumb = "";
                secondNumb = secondNumb + numberBtn.textContent;
                displayView.innerHTML = Number(secondNumb);
            } else {
                firstNumb = firstNumb + numberBtn.textContent;
                displayView.innerHTML = Number(firstNumb);
                // console.log(numberBtn.textContent);
            }
        
        
        
    });
});
equalBtn.addEventListener('click', () => {
    let displayView = document.querySelector('#display')
    displayView.innerHTML = operate(opVal,Number(firstNumb),Number(secondNumb));
});


const clear = document.querySelector('.clear');

clear.addEventListener('click', () => {
    firstNumb = "";
    secondNumb = "";
    opVal = "";
    let displayView = document.querySelector('#display')
    displayView.innerHTML = 0;
});

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
    return Number(num1 + num2); 
}

function sub(num1, num2) {
    return Number(num1 - num2);
}

function mult(num1, num2) {
    return Number(num1*num2);
}

function divide(num1, num2) { 
    return Number(num1/num2);
}

