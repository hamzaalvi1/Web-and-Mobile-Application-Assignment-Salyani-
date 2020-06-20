// // Task 1

// function showCurrentDate (){
//     const currentDate = new Date()
//     document.write(`<h2>Task 1</h2>`)
//     document.write(`<p>Current Date: ${currentDate}</p>`)

// }
// showCurrentDate()
// //  Task 2
// function greet(){
//     let firstName = prompt("Enter your First Name","Anonymous")
//     let lastName = prompt("Enter your last Name","User")
//     alert(`Hey there! ${firstName} ${lastName} nice to meet us`)

// }
// greet()
// //  Task 3
// function sum(){
//     let firstNum = parseInt(prompt("Enter first number"))
//     let secondNum = parseInt(prompt("Enter second number"))
//      alert(`The sum of ${firstNum} and ${secondNum} is ${firstNum+secondNum}`)

// }
// sum()
// //  Task 4
// function calculator(){
//     let firstNum = parseInt(prompt("Enter first number"))
//     let secondNum = parseInt(prompt("Enter second number"))
//     let operator = prompt("Enter Operator +,-*","+")
//     if(operator === "+"){
//         let result = firstNum + secondNum 
//         alert(`The sum of ${firstNum} and ${secondNum} is ${result}`)
//     }
//     else if(operator === "-"){
//         let result = firstNum - secondNum 
//         alert(`The subtract of ${firstNum} and ${secondNum} is ${result}`)
//     }
//     else if(operator === "*"){
//         let result = firstNum * secondNum 
//         alert(`The multiple of ${firstNum} and ${secondNum} is ${result}`)
//     }
//     else if(operator === "/"){
//         let result = firstNum * secondNum 
//         alert(`The divison of ${secondNum} and ${firstNum} is ${result}`)
//     }
//     else{
//         alert("operator is not available")
//     }

    
    
// }
// calculator()
// //Task 5
// let square = parseInt(prompt("Enter a number to square"))
// function squareNumber(sqNum){
//     alert(`The number ${sqNum} of square is ${sqNum * sqNum}`)
// }
// squareNumber(square)
// //Task 7
// document.write(`<h2>Task 7</h2>`)
// let countStart = parseInt(prompt("Enter a number to start counting"))
// let countEnd = parseInt(prompt("Enter a number to end counting"))
// document.write(`<h2>Task 7</h2>`)
// function counting(start,end){
// for(let c = start ; c <= end; c++){
//    document.write(`<p>${c}</p>`)

// }

// }
// counting(countStart,countEnd)
//Task 8
// document.write(`<h2>Task 8</h2>`)
// let base = parseInt(prompt("Enter base number"))
// let perpendicular = parseInt(prompt("Enter perpendicular number"))

// function hypotenuse (initBase,initPerpendicular){
//     let baseSquare , perpendicularSquare ;
//     function square(){
//       baseSquare = Math.pow(initBase,2)
//       perpendicularSquare = Math.pow(initPerpendicular,2)
//       document.write(`<p>Base square value is ${baseSquare}</p>`)
//       document.write(`<p>Perpendicular square value is ${perpendicularSquare} </p>`)
  
//     }
//     square()
//     let _hypotenuse = Math.sqrt((baseSquare + perpendicularSquare))
//     document.write(`<p>Hypotenuse value is ${_hypotenuse} </p>`)
     
    
// }
// hypotenuse(base,perpendicular)
//Task 9
// document.write(`<h2>Task 9</h2>`)
// let width = 9
// let height = 10

// function area(_width,_height){
//     let area = _width * _height
//     document.write(`<p>The area of ${_width} and ${_height} is ${area}</p>`)
// }

// area(width,height)
// area(18,10)
//Task 10
// document.write(`<h2>Task 10</h2>`)
// let word = prompt("Enter a Word!!!")
// function palindromeCheck(_word){
// let str = _word.split("").reverse().join("")

// if(_word ===  str  ){
//     document.write(`<p>${_word} is a pailndrome word</p>`)
// }
// else{
//     document.write(`<p>${_word} is a not pailndrome word</p>`)

// }

// }
// palindromeCheck(word)
//Task 11
 document.write(`<h2>Task 11</h2>`)
let string = prompt("Enter a sentence!")
function capFirstLett(str){

let strArr = str.split(" ")
let capArr = []
console.log(strArr)
for(let s = 0; s < strArr.length; s++){
let firstLetter = strArr[s].charAt(0).toUpperCase()
let leftWords = strArr[s].slice(1,strArr[s].length).toLowerCase()
let completeWord = firstLetter.concat(leftWords)
capArr.push(completeWord)    
}
document.write(`<p>The given sentence is: ${str}</p>`)
document.write(`<p>The given sentence first word capital: ${capArr.join(" ")}</p>`)

}
capFirstLett(string)
