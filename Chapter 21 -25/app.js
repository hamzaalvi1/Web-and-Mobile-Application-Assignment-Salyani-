//Task 1
let firstName = prompt("Enter your first name")
let lastName = prompt("Enter your last name")

let fullName = firstName + " " + lastName
alert(`Hey there ${fullName} nice to meet u`)
//Task 2
document.write(`<h2>Task 2</h2>`)
let favMobile = prompt("Enter your favourite mobile name....")
document.write(`Your favourite mobile is: ${favMobile} <br/>`)
document.write(`length of mobile string is: ${favMobile.length} <br/>`)
//Task 3
document.write(`<h2>Task 3</h2>`)
let nationality = "Pakistani"
document.write(`String: ${nationality} <br/>`)
document.write(`Index of "n" in ${nationality} is ${nationality.indexOf("n")} <br/>`)
//Task 4
document.write(`<h2>Task 4</h2>`)
let greet = "Hello World"
document.write(`String: ${greet} <br/>`)
document.write(`Index of "n" in ${greet} is ${greet.lastIndexOf("l")} <br/>`)
//Task 5
document.write(`<h2>Task 5</h2>`)
let characterAt = "Pakistani"
document.write(`String: ${characterAt} <br/>`)
document.write(`Character at index 3 in ${characterAt} is ${characterAt.charAt(3)} <br/>`)
//Task 6
let _firstName = prompt("Enter your first name")
let _lastName = prompt("Enter your last name")

let _fullName = _firstName.concat(" ",_lastName)
alert(`Hey there ${_fullName} nice to meet u`)
//Task 7
document.write(`<h2>Task 7</h2>`)
let city = "Hyderabad"
document.write(`String: ${city} <br/>`)
document.write(`After replacement of "Hyder" is ${city.replace("Hyder","Islam")} <br/>`)
//Task 8
document.write(`<h2>Task 8</h2>`)
let message = `Ali and Sami are best friends. They play cricket and football together`
document.write(`String: ${message} <br/>`)
document.write(`After replacement of "and" is ${message.replace(/and/gi,"&")} <br/>`)
//Task 9
document.write(`<h2>Task 9</h2>`)
let value = `1507`
document.write(`Type of: ${value} is ${typeof(value)} <br/>`)
document.write(`Type of: ${value} is ${typeof(Number(value))} <br/>`)
//Task 10
document.write(`<h2>Task 10</h2>`)
let userInp = prompt("Enter something.....")
document.write(`User Input: ${userInp} <br/>`)
document.write(`Uppercase: ${userInp.toUpperCase()} <br/>`)
//Task 11
document.write(`<h2>Task 11</h2>`)
let _userInp = prompt("Enter something.....")
let firstCap = _userInp.slice(0,1).toUpperCase()
let lastLetters = _userInp.slice(1,(userInp.length - 1)).toLowerCase()
document.write(`User Input: ${_userInp} <br/>`)
document.write(`Titlecase: ${firstCap}${lastLetters} <br/>`)
//Task 12
document.write(`<h2>Task 12</h2>`)
let num = 19.07
let numStr = num.toString().replace(".","")
document.write(`Number: ${num} <br/>`)
document.write(`Result: ${numStr} <br/>`)
//Task 13
let _userName = prompt("Enter Your User Name...")
let splituserName = _userName.split("")
for(let i = 0; i < splituserName.length; i++){
    if(splituserName[i].includes("!") || splituserName[i].includes(",") || splituserName[i].includes(".") 
|| splituserName[i].includes("@")){
    alert(`UserName contain invalid character ${splituserName[i]}`)
}
}
//Task 14
let order = prompt("Welcome to xyz bakery what u want to order")
const bakeryItems = ["cake","apple pie","chips","cookie","patties"]
for(let k = 0 ; k < bakeryItems.length; k++){
    if(bakeryItems[k].includes(order.toLowerCase())){
       alert(`${bakeryItems[k]} is available at index ${k}`)
    } 
    else{
        alert(`Item is not available`)
    }
}
//Task 15
// let password = prompt("Enter your password")
// let splitpass = password.split("")
// for(let p = 0 ; p < splitpass.length; p++){
//     let character = splitpass(p)
//     if((character >= 65 && character <= 91)
//     || (character >= 97 && character <= 122) 
//     || (character >= 48 && character <= 57)){
//       alert("") 
//     }
// }
//Task 16
document.write(`<h2>Task 16</h2>`)
let uni = "University of Karachi"
let splitWords = uni.split("")
for(let u = 0; u < splitWords.length; u++){
    document.write(`<p>${splitWords[u]}</p>`)
}
//Task 17
document.write(`<h2>Task 17</h2>`)
let lastChar = "Pakistan"
document.write(`String: ${lastChar} <br/>`)
document.write(`last character of ${lastChar} is ${lastChar.indexOf((lastChar.length - 1))} <br/>`)








