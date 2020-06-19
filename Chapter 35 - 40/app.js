// Task 1

function showCurrentDate (){
    const currentDate = new Date()
    document.write(`<h2>Task 1</h2>`)
    document.write(`<p>Current Date: ${currentDate}</p>`)

}
showCurrentDate()
//  Task 2
function greet(){
    let firstName = prompt("Enter your First Name","Anonymous")
    let lastName = prompt("Enter your last Name","User")
    alert(`Hey there! ${firstName} ${lastName} nice to meet us`)

}
greet()
//  Task 3
function sum(){
    let firstNum = parseInt(prompt("Enter first number"))
    let secondNum = parseInt(prompt("Enter second number"))
     alert(`The sum of ${firstNum} and ${secondNum} is ${firstNum+secondNum}`)

}
sum()
//  Task 4
function calculator(){
    let firstNum = parseInt(prompt("Enter first number"))
    let secondNum = parseInt(prompt("Enter second number"))
    let operator = prompt("Enter Operator +,-*","+")
    if(operator === "+"){
        let result = firstNum + secondNum 
        alert(`The sum of ${firstNum} and ${secondNum} is ${result}`)
    }
    else if(operator === "-"){
        let result = firstNum - secondNum 
        alert(`The subtract of ${firstNum} and ${secondNum} is ${result}`)
    }
    else if(operator === "*"){
        let result = firstNum * secondNum 
        alert(`The multiple of ${firstNum} and ${secondNum} is ${result}`)
    }
    else if(operator === "/"){
        let result = firstNum * secondNum 
        alert(`The divison of ${secondNum} and ${firstNum} is ${result}`)
    }
    else{
        alert("operator is not available")
    }

    
    
}
calculator()
