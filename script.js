const notesContainer = document.querySelector(".notes-container"); 
const createBtn = document.querySelector(".btn"); 

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p")
    inputBox.className = "input-box"
    inputBox.setAttribute = ("contenteditable", "true")

    let img = document.createElement("img")
    img.src = 'assests/delete.png'

    let note = document.createElement("div")
    note.className = "notes"

    note.appendChild(inputBox).appendChild(img)
    notesContainer.appendChild(note)
})







