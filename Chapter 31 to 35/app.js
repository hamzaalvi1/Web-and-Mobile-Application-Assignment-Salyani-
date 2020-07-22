//Chapter 31-35
//Question 1
// var date =  new Date()
// alert(date)
//Question 1
//Question 2
// var months = ["january","fabury","march","april","may","june","july","august","september","october","november","december"]
// var date = new Date()
// var month = date.getMonth()
// var nameofmonths = months[month]
// alert(nameofmonths)
//Question 2
//Question 3
// var days = ["sat","sun","mon","tues","wed","thur","fri"]
// var date = new Date()
// var day = date.getDay()
// console.log(day)
// var nameofdays = days[day]
// alert(nameofdays)
//Question 3
//Question 4
// var days = ["sat","sun","mon","tues","wed","thur","fri"]
// var date = new Date()
// var day = date.getDay()
// console.log(day)
// var nameofdays = days[day]
// alert(nameofdays)
// if(nameofdays == "sun"){
//     alert("It's fun day")
// }
// else{
//     alert("Working Day")
// }
//Question 4
//Question 5
// var date = new Date()
// var month = date.getMonth()
// alert(month)
// if(month => 1 || month <= 15){
//     alert("First Fifteen Days of Month")
// }
// else{
//     "last days of month"
// }
//Question 5
//Question 6
// var date1 = new Date("june 14 2019")
// var date2 = new Date("june 14 1970")
// var time = date1.getTime() - date2.getTime()
// var days = time / (1000 * 60 * 60 * 24)
// var minutes = time / (1000 * 60 )
// var sec = time / (1000)
// alert(days+ " " +" Days" ) 
// alert(minutes + " "  + "minutes" )
// alert(sec + " " + "seconds" )
//Question 6
//Question 7
// var laterdate = new Date("31 Dec 2020")
// alert(lastdate)
//Question 7
//Question 8
// var date = new Date("jan 1 2015")
// var ramdan = new Date("june 15 2015")
// var time =  ramdan.getTime() - date.getTime()
// var diff = time / (1000 * 60 * 60 *24)
// alert(diff + " " + "Days have passed since 1st ramdan , 2015")
//Question 8
//Question 9
// var date = new Date()
// var date1 = new Date("dec 31 2020")

// var time =  date1.getTime() - date.getTime()
// var diff = time / (1000 * 60)
// diff = Math.floor(diff)
// alert( "on Refrence Date" + ' ' + date + " " +diff + " " + "seconds had passes since begginig 2020" ) 
//Question 9
//Question 10 
// var date = new Date("sat Dec 05 2015 22:08:16 GMT+0500(PKT)")
// var date1 = new Date("sat Dec 05 2015 23:08:16 GMT+0500(PKT)")
// var time = date1.getTime() - date.getTime()
// var diff = time / (1000 * 60 * 60)
// alert("Current Date" + " " + date  +" " + diff + " " + "ago is" + " " + date1)
//Question 10 
//Question 11
// var date = new Date(" Dec 05 2015 23:08:16 GMT+0500(PKT)")
// var date1 = new Date(" Dec 05 1915 23:08:16 GMT+0500(PKT)")
// var time =   date.getTime() - date1.getTime()
// var diff = time / (1000 * 60 * 60 * 24 * 30 * 365)

// diff = Math.floor(diff)
// alert("Current date:" + " " + date + " " + diff +" " + "years back it's was " + " " + date1)

//Question 11
//Question 12
// var costumer = prompt("Coustumer Name")
// var months = ["january","fabury","march","april","may","june","july","august","september","october","november","december"]
// var date = new Date()
// var month = date.getMonth()
// var nameofmonths = months[month]
// var chargesperpoint = 16
// var unitsbill =  120
// unitsbill = Math.floor(unitsbill)
// var netamount = unitsbill * chargesperpoint
// var latepayment =  350
// var groosamountafter = latepayment + unitsbill
// var result = `<center><table>
//     <h1>K-ELECTIC BILL</h1><br><p>Costumer Name: ${costumer}</p><br><p>Current Month: ${nameofmonths}</p>
//  <br><p>NUMBER OF UNIT BILL: ${unitsbill}</p><br><p>CHARGES PER UNIT: ${chargesperpoint}</p><br><p>NET AMOUNT PAYABAILE{DUE DATE}: ${unitsbill}</p><br><p>LATE PAYMENT CHARGES: ${latepayment}</p><br><p>GROSS AMOUNT PAYABLE: ${groosamountafter}</p>
//     </table></center>`
//     document.write(result)