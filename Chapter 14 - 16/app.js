//Task 1

const studentList = []

// Task 2

const _studentList = new Array()

// Task 3
const strings = ["lol","hahahaaa","omg","IKT"]
// Task 4
const numbers = [22,44,99,78,36,58,0]
//Task 5
const booleans = [true,false,true,true,false]
//Task 6 
const mixArr = ["abc",499,false,["xyz",285],{name:"Hamza Alvi",age:22}]
// Task 7
const qualifications = ["SSC","HSC","BS","BCS","BCOM","MS","M.Phil","PHD"]

document.write(`<h1>Qualifications in Pakistan</h1>`)
document.write(`1) ${qualifications[0]} <br/>`)
document.write(`2) ${qualifications[1]} <br/>`)
document.write(`3) ${qualifications[2]} <br/>`)
document.write(`4) ${qualifications[3]} <br/>`)
document.write(`5) ${qualifications[4]} <br/>`)
document.write(`6) ${qualifications[5]} <br/>`)
document.write(`7) ${qualifications[6]} <br/>`)
document.write(`8) ${qualifications[7]} <br/><br/>`)

// Task 8
const studentNames = ["Hamza Alvi","Haya Khan","Fawwad Khan"]
const scores = [435,488,430]

document.write(`Score of ${studentNames[0]} is ${scores[0]}. Percentage: ${(scores[0]/500)*100}%  <br/>`)
document.write(`Score of ${studentNames[1]} is ${scores[1]}. Percentage: ${(scores[1]/500)*100}%  <br/>`)
document.write(`Score of ${studentNames[2]} is ${scores[2]}. Percentage: ${(scores[2]/500)*100}%  <br/> <br/>`)

// Task 9
document.write(`<h2>Task 9a</h2>`)
const colorName = ["red","green","blue","yellow","orange"] 
document.write(`${colorName}`)
document.write(`<h2>Task 9b (add color in the Begining and Ending)</h2>`)
let color =  prompt("Enter color name in the ending")
colorName.push(color)
let color2 =  prompt("Enter color name in the begining")
colorName.unshift(color2)
document.write(`${colorName}`)
document.write(`<h2>Task 9c (add Two color in the Begining )</h2>`)
colorName.unshift("seagreen","silver")
document.write(`${colorName}`)
document.write(`<h2>Task 9d (delete first color in the Begining )</h2>`)
colorName.shift()
document.write(`${colorName}`)
document.write(`<h2>Task 9e (delete color in the Ending )</h2>`)
colorName.pop()
document.write(`${colorName}`)
document.write(`<h2>Task 9f (Add color according to index )</h2>`)
let color3 =  prompt("Enter color name")
let position = prompt("Enter index number to add color",0)
colorName.splice(+position,0,color3)
document.write(`${colorName}`)
document.write(`<h2>Task 9g (Delete color according to index )</h2>`)
let delColor = prompt("Enter index number to delete color",0)
let numOfColor = prompt("How many color you want to delete?",0)
colorName.splice(+delColor,numOfColor)
document.write(`${colorName}`)
// Task 10
document.write(`<h2>Task 10 Asscending numbers</h2>`)
document.write(`<h2>Unassorted</h2>`)
const studentsScores = [320,230,480,120]
document.write(`${studentsScores} <br/>`)
document.write(`<h2>Ascending</h2>`)
const ascending = studentsScores.sort()
document.write(`${ascending} <br/>`)
// Task 11
document.write(`<h2>Task 11 Selected City</h2>`)
const cities = ["Karachi", "Islamabad","Quetta","Kashmir","Hyderabad","Lahore"]
document.write(`<h3>Cities</h3>`)
document.write(`${cities} <br/>`)
document.write(`<h3>Selected Cities</h3>`)
const selectedCities = cities.slice(0,4)
document.write(`${selectedCities} <br/>`)
// Task 12
document.write(`<h2>Task 12 Join Method</h2>`)
const string = ["My","name","is","Hamza","Alvi","!"]
document.write(`${string} <br/>`)
document.write(`<h2>Join Method</h2>`)
document.write(`${string.join(" ")}`)
// Task 13
document.write(`<h2>Task 13 Devices:</h2>`)
const fifo = ["Mouse","Keyboard","Printer","Scanner","Speaker"]
document.write(`<h2>FIFO:</h2>`)
document.write(`<p>OUT: ${fifo[0]}</p>`)
document.write(`<p>OUT: ${fifo[1]}</p>`)
document.write(`<p>OUT: ${fifo[2]}</p>`)
document.write(`<p>OUT: ${fifo[3]}</p>`)
document.write(`<p>OUT: ${fifo[4]}</p>`)
// Task 14
document.write(`<h2>Task 14 LIFO Devices:</h2>`)
const fifo = ["Mouse","Keyboard","Printer","Scanner","Speaker"]
document.write(`<h2>FIFO:</h2>`)
document.write(`<p>OUT: ${fifo[4]}</p>`)
document.write(`<p>OUT: ${fifo[3]}</p>`)
document.write(`<p>OUT: ${fifo[2]}</p>`)
document.write(`<p>OUT: ${fifo[1]}</p>`)
document.write(`<p>OUT: ${fifo[0]}</p>`)
// Task 15
document.write(`<h2>Task 18 Mobile List DropDown:</h2>`)
const apple = ["iphone5","iphone6","iphone7","iphone8","iphoneX"]
const samsung = ["samsung S4","samsung S5","samsung S6","samsung S8","samsung S9"]
const motorolla = ["Moto X","Moto Razor","Moto Lite","Moto E4"]
document.write(`<h2>Apple:</h2>`)
document.write(`<p>${apple[0]}:</p>`)
document.write(`<p>${apple[1]}:</p>`)
document.write(`<p>${apple[2]}:</p>`)
document.write(`<p>${apple[3]}:</p>`)
document.write(`<p>${apple[4]}:</p>`)
document.write(`<h2>Samaihng:</h2>`)






















