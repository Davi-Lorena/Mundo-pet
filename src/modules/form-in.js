export function formIn() {
const buttonFixed = document.getElementById("fixed")
const form = document.querySelector("form")
const sectionSchedules = document.getElementById("schedules")

const masterName = document.getElementById("master")
const petName = document.getElementById("pet")
const cellphone = document.getElementById("phone")
const descriptionServices = document.querySelector("textarea")

buttonFixed.addEventListener("click", () => {
console.log("clicado")


form.classList.remove("none")
form.classList.add("form")


buttonFixed.classList.add("none")

sectionSchedules.classList.add("blur-bg")

const buttonClose = document.getElementById("close-icon")

buttonClose.onclick = () => {
    sectionSchedules.classList.remove("blur-bg")
    form.classList.remove("form")
    form.classList.add("none")
    buttonFixed.classList.remove("none")
    
    // Resetando o formulário
    petName.value = ""
    masterName.value = ""
    descriptionServices.value = ""
    cellphone.value = ""

}

})


}

formIn()