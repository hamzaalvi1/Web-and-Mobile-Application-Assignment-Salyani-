//Task 1
const form = document.querySelector("form")
.addEventListener("submit",(e)=>{
e.preventDefault()

let userDetail = {
    fName : e.target["firstName"].value,
    lName : e.target["lastName"].value,
    email: e.target["email"].value,
    password: e.target["password"].value,
    rePassword: e.target["rePassword"].value,    


}
if(userDetail.fName === "" || userDetail.lName === "" ||
 userDetail.email === "" || userDetail.email === "" ||
 userDetail.password === "" || userDetail.rePassword === ""){
     alert("Please fill all form fields")
 }
 else{
     const formData = document.querySelector(".form-data");
     formData.innerHTML = `<p>FirstName: ${userDetail.fName}</p>
     <p>LastName: ${userDetail.lName}</p>
     <p>Email Address: ${userDetail.email}</p>
     <p>Password: ${userDetail.password}</p>`
     
     
 }
 e.target["firstName"].value = ""
 e.target["lastName"].value = ""
 e.target["email"].value = ""
 e.target["password"].value = ""
 e.target["rePassword"].value = ""




})
const para = document.querySelector(".read-more")
.addEventListener("click",()=>{
    const para = document.getElementById("para").textContent +=`
    Lorem ipsum dolor sit amet consectetur, adipisicing 
    elit. Doloribus iure a velit consectetur exercitationem 
    perspiciatis esse maiores quibusdam molestias soluta!
    Lorem ipsum dolor sit amet consectetur, adipisicing 
    elit. Doloribus iure a velit consectetur exercitationem 
    perspiciatis esse maiores quibusdam molestias soluta`
})
const students = ["Hamza Alvi","Salman Chundigar","Arham Ali","Amir Maavia","Reeja Jelani","Haya Khan","Fariha Asghar"]
const table = document.querySelector(".table")
const addStudents = ()=>{
    students.forEach((student)=>{
        const tr = document.createElement("tr")
        const td1 = document.createElement("td")
        const td2 = document.createElement("td")
        const delBtn = document.createElement("button")
        delBtn.textContent = "Delete"
        td2.appendChild(delBtn)
        td1.textContent = student
        tr.append(td1,td2)
        table.append(tr) 

    })
}
addStudents()
const studentList = document.querySelectorAll("tr")
const delStudent = ()=>{
    studentList.forEach((delStu,index)=>{
        delStu.addEventListener("click",(e)=>{
            if(e.target.tagName.toLowerCase() === "button"){
                students.splice(index,1)
                e.target.parentElement.parentElement.remove()

            }
        })
    })
}
delStudent()