//Task 1
document.write(`<h2>Task 1</h2>`)
let num1 = parseFloat(prompt("Enter a number"))
if(num1 > 0){
    document.write(`<p>Number: ${num1}</p>`)
    document.write(`<p>Round off value: ${Math.round(num1)}</p>`)
    document.write(`<p>Floor : ${Math.floor(num1)}</p>`)
    document.write(`<p>Ceil : ${Math.ceil(num1)}</p>`)
}
else{
    alert("Number should be positive")
}
//Task 2
document.write(`<h2>Task 2</h2>`)
let num2 = parseFloat(prompt("Enter a number"))
if(num2 < 0){
    document.write(`<p>Number: ${num2}</p>`)
    document.write(`<p>Round off value: ${Math.round(num2)}</p>`)
    document.write(`<p>Floor : ${Math.floor(num2)}</p>`)
    document.write(`<p>Ceil : ${Math.ceil(num2)}</p>`)
}
else{
    alert("Number should be negative")
}
//Task 3
document.write(`<h2>Task 3</h2>`)
let num3 = parseFloat(prompt("Enter a absolute number"))
document.write(`<p>The absolute value of: ${num3} is ${Math.abs(num3)}</p>`)

//Task 4
document.write(`<h2>Task 4</h2>`)
let dice = Math.floor((Math.random()*6 )+ 1)
document.write(`<p>Random value of dice: ${dice}</p>`)
//Task 5
document.write(`<h2>Task 5</h2>`)
let toss = Math.floor((Math.random()*2 )+ 1)
if(toss === 2){
    document.write(`<p>${toss}</p>`)
    document.write(`<p>Random coin value: Heads</p>`)

}
else{
    document.write(`<p>${toss}</p>`)
    document.write(`<p>Random coin value: Tails</p>`)

}
//Task 6
document.write(`<h2>Task 6</h2>`)
let randNum = Math.floor((Math.random()*100 )+ 1)
document.write(`<p>Random number between 1 to 100 is: ${randNum}</p>`)

//Task 7
document.write(`<h2>Task 7</h2>`)

let weight = parseFloat(prompt("Enter your Weight"))
document.write(`<p>a: ${Math.floor(weight)}</p>`)
document.write(`<p>b: ${Math.floor(weight)}kgs</p>`)
document.write(`<p>a: ${weight}kgs</p>`)
document.write(`<p>a: ${weight}kilograms</p>`)
//Task 7
let secretNum = parseInt(prompt("Enter a secret number"))
if(secretNum === 7){
    alert("Congrats you guess a secret number")
}
else if(secretNum === 6 || secretNum === 5){
    alert("You are to close")
   
}
else if(secretNum < 5 && secretNum >= 0){
    alert("Try Again")
   
}
else{
    alert("Keep try again")
}

