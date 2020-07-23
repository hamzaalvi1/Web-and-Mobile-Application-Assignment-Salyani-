//Task 1
function pow(num,power){
    return Math.pow(num,power)
}
console.log(pow(3,5))
// Task 2
function leapYear(year){
    let yearResult = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0 )
    return yearResult ? `${year} is leap year` :  `${year} is not leap year`
}
console.log(leapYear(2019))
// Task 3 
function triangleArea(a,b,c){
    let s = (a + b + c) / 2
    let area = s * ((s - a) * (s - b) *(s - c))
    return `The area of triangle is ${area}`
}
console.log(triangleArea(7,3,8))
//Task 5 
function marks(subj1 = 0,subj2 = 0,subj3 = 0){
     let total = subj1 + subj2 + subj3
    function average (){
        let av = (total / 3)
        return av
    } 
    function percentage(){
        let per = (total/300)*100
        return per
    }

 let _average = average()
 let _percentage = percentage() 
 
 return {_percentage,_average}

}
let student1 = marks(97,89,94)
console.log(` student1 average marks is ${student1._average} and percentage is ${student1._percentage} `)
let student2 = marks(80,85,90)
console.log(` student2 average marks is ${student2._average} and percentage is ${student2._percentage} `)
let student3 = marks(100,90,80)
console.log(` student3 average marks is ${student3._average} and percentage is ${student3._percentage} `)
