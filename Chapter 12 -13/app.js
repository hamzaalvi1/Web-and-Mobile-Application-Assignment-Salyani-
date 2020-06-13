// Task 1
let character = prompt("Enter a character string or number")
let characterCode = character.charCodeAt(0)

if(characterCode >= 65 && characterCode <= 91){
    alert(` ${character} Character is Upper Case`)
}
else if(characterCode >= 97 && characterCode <= 122){
    alert(`${character} Character is Lower Case`)
}
else if(characterCode >= 48 && characterCode <= 57){
    alert(`${character} Character is Numeric`)
}
else{
    alert("Character is not upper,lower or numeric!")
}
//Task 2
let number1 = parseInt(prompt("Enter 1st number"))
let number2 = parseInt(prompt("Enter 2st number"))

if(number1 > number2){
    alert(`${number1} is greater than ${number2}`)
}
else if(number1 < number2){
    alert(`${number1} is less than ${number2}`)
}
else if(number1 == number2){
    alert(`${number1} is equal to ${number2}`)
}
else{
    alert("Please enter a number")
}

let num = parseInt(prompt("Enter a number......"))
if(num > 0){
    alert("number is postive....")
}
else if(num < 0){
    alert("number is negative...")
}
else if(num == 0){
    alert("0 number is nor negative or positive......")
}
else{
    alert("Please enter a correct number...")
}
// Task 4 
const vowels = ["a","e","i","o","u"]
let alphabet  = prompt("Enter a character....")

for(let i = 0 ; i < vowels.length ; i++){
    if(alphabet === vowels[i]){
        alert(`${vowels[i]} is a vowel`)
        break
    }
    else{
        alert(`${alphabet} is not a vowel`)
        break
    }

}
//Task 5
let password = "abc@xyz.com"
let userPass = prompt("Enter your password")
if(userPass.toLowerCase() === ""){
    alert("Please Enter a password!!")
}
else if(userPass.toLowerCase() === password ){
    alert("You enter correct password")
}
else if(userPass.toLowerCase() !== password){
    alert("You enter a wrong password")
}
//Task 6
let hour = 13
let greeting;
if(hour <= 18){
 greeting = "Good day"
}
else{
    greeting = "Good Evening"
}
//Task 7
let timeinHours = prompt("Enter the time")
if(timeinHours <= 12){
    alert("Good Morning have a nice day....")
}
else if(timeinHours >= 12 && timeinHours <=18){
    alert("Good Evening gentlemen")
}
else if(timeinHours >= 19 && timeinHours <=24){
    alert("Hey there fellows Good Night")
}