//Task 1
document.write(`<h1>Task 1</h1>`)
let x = 7
    document.write("The value of x is: " + x + "<br/>")
    ++x
    document.write("The value of ++x is: " + x + "<br/>")
    document.write("Now the value of x is: " + x + "<br/>")
    document.write("Now the value of x++ is: " + x + "<br/>")
    x++
    document.write("Now the value of x is: " + x + "<br/>")
    --x
    document.write("The value of --x is: " + x + "<br/>")
    document.write("Now the value of x is: " + x + "<br/>")
    document.write("The value of x-- is: " + x + "<br/>")
    x--
    document.write("Now the value of x is: " + x + "<br/>")
//Task 2
document.write(`<h1>Task 2</h1>`)

    let _x = 2 
    let _y = 1
    
    // --a - --b + ++b + b--;
    // --_x = 1
    // --_x - --_y // 1 - 0 => 1
    // --_x - --_y + ++_y // 1 - 0 + 1 => 2
    //  --_x - --_y + ++_y + _y-- // 1 - 0 + 1 + 1 => 3
    var result = --_x - --_y + ++_y + _y--
    document.write("Result: --_x - --_y + ++_y + _y-- : " + result )
    //Task 3
    document.write(`<h1>Task 3</h1>`)

    let userName = prompt("Enter your username","anonymous")

alert(`Hey there ${userName} nice to meet you`)

//Task 4
document.write(`<h1>Task 4</h1>`)

let number = parseInt(prompt("Enter number you want to display a table",5))

    for(let i = 1; i <= 10; i++){
     document.write(`${number} X ${i} = ${number*i} <br/>`)
    }//Task 5
 
   document.write(`<h1>Task 5</h1>`)
   
    let sub1 = prompt("Enter your first subject name", "Javascript")
    let sub2 = prompt("Enter your second subject name", "Javascript")
    let sub3 = prompt("Enter your third subject name", "Javascript")
    let totalMarks = 100
    let obtainedMarks1 = parseInt(prompt("Enter Your First Subject Marks",0))
    let obtainedMarks2 = parseInt(prompt("Enter Your Second Subject Marks",0))
    let obtainedMarks3 = parseInt(prompt("Enter Your Third Subject Marks",0))

    document.write(`<table>
    <tr>
    <td>Subjects</td>
    <td>Total Marks</td>
    <td>Obtained Marks</td>
    <td>Percentage</td>
    </tr>
    <tr>
    <td>
    ${sub1}
    <td/>
    <td>
    ${totalMarks}
    <td/>
    <td>
    ${obtainedMarks1}
    <td/>
    <td>
    ${(obtainedMarks1 / totalMarks) * 100}%
    <td />
    </tr>
    <tr>
    <td>
    ${sub2}
    <td/>
    <td>
    ${totalMarks}
    <td/>
    <td>
    ${obtainedMarks2}
    <td/>
    <td>
    ${(obtainedMarks2 / totalMarks) * 100}
    <td/>
    </tr>
    <tr>
    <td>
    ${sub3}
    <td/>
    <td>
    ${totalMarks}
    <td/>
    <td>
    ${obtainedMarks3}
    <td/>
    <td>
    ${(obtainedMarks3 / totalMarks) * 100}
    <td/>
    </tr>
    <tr>
    <td>
    </td>
    <td>
    </td>
    <td>
    ${obtainedMarks1+obtainedMarks2+obtainedMarks3}
    </td>
    <td>
        ${((obtainedMarks1+obtainedMarks2+obtainedMarks3) / 300) * 100}
    </td>

    </tr>

     </table>`)
