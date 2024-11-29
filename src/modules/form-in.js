export function formIn() {
const buttonFixed = document.getElementById("fixed")
const form = document.querySelector("form")
const sectionSchedules = document.getElementById("schedules")

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
}

})


}

formIn()