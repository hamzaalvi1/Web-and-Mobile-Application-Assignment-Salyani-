//Task 1
let a = document.querySelector("a")
a.addEventListener("click",()=>{
    alert("Welcome User! Nice to meet you")
})
//Task 2
let images = document.querySelectorAll("img")
images.forEach((img)=>{
    img.addEventListener("click",()=>{alert("Thank you for purchasing this phone")})
})
//Task 3
const studentNames = ["Hamza Alvi","Syed Hassan Ali","Haya Khan","Fariha Asghar","Salman Chundigar",
"Syed Arham","Dua Amjad","Amir Maavia"]

const createStudentList = ()=>{
    studentNames.forEach((student)=>{
      let list = document.querySelector(".student-list")
      const li = document.createElement("li")
      const delBtn = document.createElement("button")
      delBtn.textContent = "Delete"
      li.append(`${student} `,delBtn)
      list.append(li)
    })
}
createStudentList()
const allStudentList = document.querySelectorAll("li")
const delStudent = ()=>{
    allStudentList.forEach((student,index)=>{
     student.addEventListener("click",(e)=> {
       if(e.target.tagName.toLowerCase() === "button"){
           studentNames.splice(index,1)
           e.target.parentElement.remove()
           
       }
     })   
    })
}
delStudent()
//Task 4
let chgImg = document.querySelector(".car")
chgImg.addEventListener("mouseover",()=>{
    chgImg.src  = "960x0.jpg"


})
chgImg.addEventListener("mouseout",()=>{
    chgImg.src  = "most-expensive-lead.jpg"

})
//Task 5
let counter = document.getElementById("counter")
const addCount = ()=>{
    let count = Number(counter.innerText)
    count++
    counter.innerText = count
}
const delCount = ()=>{
    let count = Number(counter.innerText)
    count--
    counter.innerText = count
}
const reset = ()=>{
    let count = Number(counter.innerText)
    count = 0
    counter.innerText = count
}
const incrementBtn = document.querySelector(".increment").addEventListener("click",addCount)
const decrementBtn = document.querySelector(".decrement").addEventListener("click",delCount)
const resetBtn = document.querySelector(".reset").addEventListener("click",reset)

