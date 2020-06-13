//Task 1
var firstNum = 7;
var secondNum = 19
var add = firstNum + secondNum
document.write("Sum of " + firstNum + " and " + secondNum + " is " + add)
//Task 2
var _firstNum = 7;
var _secondNum = 19
var add = _firstNum + _secondNum
var subtract = _firstNum - _secondNum
var multiply = _firstNum * _secondNum
var division = _secondNum / _firstNum 

document.write("Sum of " + _firstNum + " and " + _secondNum + " is " + add + "<br/>")
document.write("Subtract of " + _firstNum + " and " + _secondNum + " is " + subtract + "<br/>")
document.write("Multiply of " + _firstNum + " and " + _secondNum + " is " + multiply + "<br/>")
document.write("Divison of " + _secondNum + " and " + _firstNum + " is " + division + "<br/>")
//Task 3
var initVal;
document.write("* Initial Value of variable is " + initVal + "<br/>")
initVal = 29;
document.write("* Value after declaration var is " + initVal + "<br/>")
var someVal = 15;
document.write("* Initial Value of variable is " + someVal + "<br/>")
someVal++
document.write("* Value after increment is " + someVal + "<br/>")
var newVal =  someVal + 7
document.write("* Value after adding 7  is " + newVal + "<br/>")
var decVal = 8;
decVal--
document.write("* Value after decrement is " + decVal + "<br/>")
var division = 21 / 3
document.write("* Divison of two numbers 21 and 3 are " + division + "<br/>")

//Task 4
var ticketPrice = 700;
var numofSoldTckt = 7
var totalAmount = ticketPrice * numofSoldTckt
document.write("* Total Amount of sold ticket is " + totalAmount)
//Task 5
document.write(`<h1>Table</h1>` )
document.write(7 + " X " + 1 + " = " + (7*1) + "<br/>" )
document.write(7 + " X " + 2 + " = " + (7*2) + "<br/>" )
document.write(7 + " X " + 3 + " = " + (7*3) + "<br/>" )
document.write(7 + " X " + 4 + " = " + (7*4) + "<br/>" )
document.write(7 + " X " + 5 + " = " + (7*5) + "<br/>" )
document.write(7 + " X " + 6 + " = " + (7*6) + "<br/>" )
document.write(7 + " X " + 7 + " = " + (7*7) + "<br/>" )
document.write(7 + " X " + 8 + " = " + (7*8) + "<br/>" )
document.write(7 + " X " + 9 + " = " + (7*9) + "<br/>" )
document.write(7 + " X " + 10 + " = " + (7*10) + "<br/>" )
//Task 6
document.write(`<h1>Temperature</h1>` )
var tempInCelsius = 35
var tempInFarhenheit = 120

var celsius =  (tempInFarhenheit - 32) * 5/9
var farhenheit =  (tempInCelsius * 9/5) + 32

document.write("Temperature " + tempInFarhenheit + " F  convert in Celsius is " + celsius + " C" + "<br/>"  )
document.write("Temperature " + tempInCelsius + " C  convert in Farhenheit is " + farhenheit + " C"   )

//Task 7
document.write(`<h1>Shopping Cart</h1>` )

var priceOf1Itm = 900;
var priceOf2Itm = 1200;
var orderQtyOf1Itm = 7;
var orderQtyOf2Itm = 4;
var shippingCharges = 300;
var firstAmount = priceOf1Itm * orderQtyOf1Itm
var secondAmount = priceOf2Itm * orderQtyOf2Itm
var totalAmount = firstAmount + secondAmount + shippingCharges


document.write("Price of First Item is " + priceOf1Itm  + "<br/>")
document.write("Order Qty of First Item is " + orderQtyOf1Itm  + "<br/>")
document.write("Price of Second Item is " + priceOf2Itm  + "<br/>")
document.write("Order Qty of Second Item is " + orderQtyOf2Itm  + "<br/>")
document.write("Shipping Charges include with tax are " +shippingCharges + "<br/>")
document.write("Total of your products are " + totalAmount  + "<br/>")

//Task 8
document.write(`<h1>MarkSheet</h1>` )

var totalMarks = 750;
var obtainedMarks = 680;
var percentage = (obtainedMarks / totalMarks) * 100;
document.write("Total Marks are " + totalMarks + "<br/>")
document.write("Obtained Marks are " + obtainedMarks + "<br/>")
document.write("Percentage obtained by student are " + percentage + "<br/>")
//Task 9
document.write(`<h1>Currency Converter</h1>` )

var amount = 16
    var dollar = 161
    var pound = 207.5
    var dollartoPkr =  amount * dollar
    var poundtoPkr =  amount * pound
    document.write(amount + " Dollar to PKR is " + dollartoPkr + "<br/>")
    document.write(amount + " Pound to PKR is " + poundtoPkr + "<br/>")

//Task 10
document.write(`<h1>Age Calculator</h1>` )

var dateOfBirth = 1997;
    var currentYear = 2020
    var age = currentYear - dateOfBirth
    document.write("* Date of Birth is " + dateOfBirth + "<br/>")
    document.write("* Current Year is " + currentYear + "<br/>")

    document.write("* Current Age is " + age)
//Task 11
document.write(`<h1>Task 11</h1>` )

let x = 7
    document.write("The value of x is: " + x + "<br/>")
    ++x
    document.write("The value of ++x is: " + x + "<br/>")
    document.write("Now the value of x is: " + x + "<br/>")
    document.write("Now the value of x++ is: " + x + "<br/>")
    x++
    document.write("Now the value of x++ is: " + x + "<br/>")
    
//Task 12
document.write(`<h1>Life Time Supply Calculator</h1>` )

var favouriteFood = "Fries"
var currentAge = 23
var estimatedAge = 60;
var amountOfSnack = 2;
 var totalSupply = (amountOfSnack * 365) * (estimatedAge - currentAge)
 document.write("* Current Age is " + currentAge + "<br/>")
 document.write("* Estimated Age is " + estimatedAge + "<br/>")
 document.write("* Amount of Snack is " + amountOfSnack + "<br/>")
 document.write("* Total Number of food supply are " + totalSupply + "<br/>")
