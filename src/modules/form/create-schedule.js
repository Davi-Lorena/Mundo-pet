export function createSchedule( hour, pet, name, services, hourValue ) {

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

 // Criando uma div para organizar o layout da li
 const div = document.createElement("div")

 // Criando um terceiro título que exibirá a hora do agendamento 
 const hourSchedule = document.createElement("h3")
 hourSchedule.innerText = hour

 // Criando uma span com um small dentro que conterão os nomes do dono e do pet
 const animalName = document.createElement("span")
 animalName.innerText = pet

 const peopleName = document.createElement("small")
 peopleName.innerText = ` / ${name}`

 // Adicionando o small no span e a hora e os nomes na div de organização  
 animalName.appendChild(peopleName)

 div.append(hourSchedule, animalName)

 // Criando um span que conterá os serviços a serem realizados 
 const servicesElement = document.createElement("span")
 servicesElement.innerText = services

 // Criando o botão que removerá o agendamento, caso, necessário 
 const removeButton = document.createElement("button")
 removeButton.classList.add("remove")
 removeButton.innerText = "Remover agendamento"
 removeButton.onclick = () => li.remove()

// Adicionando os itens à li 
li.append(div, servicesElement, removeButton)

// impondo uma condição para definir em qual lista o agendamento deverá ser exibido, de acordo com o horário 
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