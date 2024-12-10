import dayjs from "dayjs"
import { cancel } from "../../services/cancel.js"

export function createSchedule( { schedule } ) {

// capturando a section schedules  
const sectionSchedules = document.getElementById("schedules")

// Capturando o botão de "novo agendamento"
const newScheduleButton = document.getElementById("fixed")

// Capturando o form 
const form = document.querySelector("form")

    // capturando as listas de cada período do dia
    const morning = document.getElementById("morning")
    const afternoon = document.getElementById("afternoon")
    const night = document.getElementById("night")

 // Criando a li que representará o novo agendamento
 const li = document.createElement("li")
 li.classList.add("schedule")
li.setAttribute("data-id", schedule.id)


 // Criando uma div para organizar o layout da li
 const div = document.createElement("div")

 // Criando um terceiro título que exibirá a hora do agendamento 
 const hourSchedule = document.createElement("h3")
 hourSchedule.innerText = dayjs(schedule.when).format("HH:mm")

 // Criando uma span com um small dentro que conterão os nomes do dono e do pet
 const animalName = document.createElement("span")
 animalName.innerText = schedule.pet

 const peopleName = document.createElement("small")
 peopleName.innerText = ` / ${schedule.name}`

 // Adicionando o small no span e a hora e os nomes na div de organização  
 animalName.appendChild(peopleName)

 div.append(hourSchedule, animalName)

 // Criando um span que conterá os serviços a serem realizados 
 const servicesElement = document.createElement("span")
 servicesElement.innerText = schedule.services

 // Criando o botão que removerá o agendamento, caso, necessário 
 const removeButton = document.createElement("button")
 removeButton.classList.add("remove")
 removeButton.innerText = "Remover agendamento"

 removeButton.onclick = async () => {

   await cancel({ id: schedule.id })
    li.remove()

 }

// Adicionando os itens à li 
li.append(div, servicesElement, removeButton)

// impondo uma condição para definir em qual lista o agendamento deverá ser exibido, de acordo com o horário 

const hourValue = dayjs(schedule.when).hour()
    if (hourValue < 13) {
        morning.append(li)
    } else if (hourValue >= 13 && hourValue < 18) {
        afternoon.append(li)
    } else if (hourValue >= 18) {
        night.append(li)
    }

// Trabalhando com classes para retornar a pagina ao padrão, com as listas atualizadas 
sectionSchedules.classList.remove("blur-bg")
form.classList.remove("form")
form.classList.add("none")
newScheduleButton.classList.remove("none")

}
