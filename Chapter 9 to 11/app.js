//Task1
let cityName = prompt("Enter city name","karachi")
    if(cityName === "karachi"){
        alert("Greetings user welcome to city of lights")
    }
    else{
        alert(`Welcome to ${cityName}`)
    }
//Task2
document.write(`<h2>Task 2</h2>`)
let colorName = prompt("Enter color name suggestion: RED , YELLOW , Green")

    if(colorName.toLowerCase() === "red"){
     document.write("You have to stop your car")
    }
    else if(colorName.toLowerCase() === "yellow"){
     document.write("Ready to move")
    }
    else if(colorName.toLowerCase() === "green"){
     document.write("Move Now")
    }
    else{
        document.write("Color is match")
    }
//Task3
let gender = prompt("Enter your gender")

    if(gender.toLowerCase() === "male"){
     alert("Greetings Sir! How may I help you")
    }
    else if(gender.toLowerCase() === "female"){
        alert("Greetings Ma'am! How may I help you")
    }
    else{
        alert("Please try again gender is not defined")
    }
//Task4
let fuel = prompt("How much fuel left in your car",1)

    if(fuel  <= 0.25){
     alert("Please refill your tank! ")
    }
    else{
        alert("Fuel is enough ")
    }
//Task5
let  a = 10;
    if(++a === 11){
        alert("Condition is true")
    }
//Task6
let obtainedMarks = prompt("Enter obtained marks out of 500",0)
    let percentage = (+obtainedMarks / 500) * 100
    if(percentage >= 85){
       alert("your grade is A+ Excellent!")
    }
    else if(percentage >= 79){
       alert("your grade is A Good")
    }else if(percentage >= 69){
       alert("your grade is B you need to improve")
    }else if(percentage >= 59){
       alert("Failed Sorry")
    }
//Task7
let _obtainedMarks = prompt("Enter obtained marks out of 500",0)
    let _percentage = (+_obtainedMarks / 500) * 100
    console.log(_percentage)
    if(_percentage >= 88){
       document.write(`Grade: A+ <br/>
       Marks obtained: ${_obtainedMarks} <br/>
       Percentage: ${_percentage}% <br/>
       Remarks: Excellent!<br/>
       `)
    }
        else if(_percentage >= 79 ){
        document.write(`Grade: A <br/>
       Marks obtained: ${_obtainedMarks} <br/>
       Percentage: ${_percentage}% <br/>
       Remarks: GOOD! <br/>
       `) 
    }else if(_percentage >= 69 ){
        document.write(`Grade: B <br/>
       Marks obtained: ${_obtainedMarks} <br/>
       Percentage: ${_percentage}% <br/>
       Remarks: Need some improvement <br/>
       `)
    }else if(_percentage <= 59 ){
        document.write(`Grade: C <br/>
       Marks obtained: ${_obtainedMarks} <br/>
       Percentage: ${_percentage}% <br/>
       Remarks: Failed!<br/>
       `)}
//Task8
let number = parseInt(prompt("Enter the number to check if it is divisble ny 3 or not"))
    if(number  % 3 === 0){
        alert( `${number} is divisble by 3`)
    }
    else{
        alert(`${number} is not divisible by 3`)
    }
//Task9
let _number = prompt("Enter _number to check if it is even or odd")

if(_number % 2 === 0){
    alert(`${_number} is even`)
}
else{
    alert(`${_number} is odd`)
}
//Task10
let _fuel = prompt("How much _fuel left in your car",1)

    if(_fuel  <= 0.25){
     alert("Please refill your tank! ")
    }
    else{
        alert("Fuel is enough ")
    }

