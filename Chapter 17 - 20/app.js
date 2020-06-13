// Task 1
const arr1 = [[],[[],[]],[]]
// Task 2
const multiArr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]
//Task 3
document.write(`<h2>Task 3: Print Counting</h2>`)
for(let i = 1; i <= 10; i++ ){
    document.write(`${i} <br/>`)
}
//Task 4
document.write(`<h2>Task 4: Table</h2>`)
const tableNum = parseInt(prompt("Enter a number to print table"),0)
const length = parseInt(prompt("Please give a length to print a table"),0)
document.write(`<h4>Number: ${tableNum}</h4>`)
document.write(`<h4>Length: ${length}</h4>`)
for(let t = 1 ; t <= length ; t++ ){
    document.write(`${tableNum} X ${t} = ${tableNum*t} <br/>`)
}
// Task 5
document.write(`<h2>Task 5: Print Fruits</h2>`)
const fruits = ["Apple","Mango","Cherry","Stawberry","Watermelon","Guava"]
for(let f = 0; f < fruits.length; f++){
    document.write(`${fruits[f]} <br/>`)
}
document.write(`<h2>Task 5: Print Fruits according to element </h2>`)

for(let j = 0; j < fruits.length; j++){
    document.write(`Element at index ${j} is ${fruits[j]} <br/>`)

}
// Task 6 

document.write(`<h2>Task 6: Some Series </h2>`)
document.write(`Counting: `)
for(let a = 1 ; a <= 20 ; a++){
    document.write(`${a},`)    
}
document.write(`<br/> `)
document.write(`Reverse Counting: `)
for(let b = 10 ; b >= 1 ; b--){
    document.write(`${b},`)    
}
document.write(`<br/> `)
document.write(`Even Number: `)
for(let c = 0 ; c <= 20 ; c+=2){
    document.write(`${c},`)    
}
document.write(`<br/> `)
document.write(`Odd Number: `)
for(let d = 1 ; d <= 20 ; d+=2){
    document.write(`${d},`)    
}
document.write(`<br/> `)
document.write(`Series: `)
for(let e = 2 ; e <= 20 ; e+=2){
    document.write(`${e}k,`)    
}
// Task 7
document.write(`<h2>Task 7: Find food in array </h2>`)
let food = prompt("Welcome to the bakery what u want to eat")
const foodList = ["Burger","Pizza","Spagetti","Apple Pie","Chocolate fudge cake","Fries"]
for(let f = 0; f < foodList.length ; f++){
  if(food === foodList[f]){
      document.write(`Your ${food} is available at index ${f}`)
      break
  }
  else{
      document.write("Sorry we don't have this food")
  }    
}
// Task 8
document.write(`<h2>Task 8: Print Max Number: </h2>`)
const maxNum = [92,33,44,21,45,78,995,43]
document.write(`${maxNum} <br/>`)
document.write(`Max number in this array is ${Math.max(...maxNum)} <br/>`)
// Task 9
document.write(`<h2>Task 9: Print Min Number: </h2>`)
const minNum = [92,33,44,21,45,78,995,43]
document.write(`${minNum} <br/>`)
document.write(`Min number in this array is ${Math.min(...minNum)} <br/>`)
// Task 10
document.write(`<h2>Task 10: Print Counting Multiple of five</h2>`)
for(let v = 5 ; v <= 100 ; v+=5){
    document.write(`${v},`)    

}


