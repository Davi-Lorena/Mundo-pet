import dayjs from "dayjs"

import { sendSchedule } from "../../services/send-schedule.js"

import { fetchSchedules } from "../../services/fetch-schedule.js"

// Capturando o formulário
const form = document.querySelector("form")

// Capturando os elementos do formulário 
const masterName = document.getElementById("master")
const petName = document.getElementById("pet")
const cellphone = document.getElementById("phone")
const descriptionServices = document.querySelector("textarea")
const dateInputs = document.querySelectorAll('input[type="date"]')
const hour = document.getElementById("hour")


// Validando o input time
const hourNow = dayjs().format("HH:mm")
 
// o valor inicial da hora é a hora atual 
hour.value = hourNow;
// o valor mínimo da hora é a hora atual, permitindo somente o agendamento de horários posteriores
hour.min = hourNow;

// Manipulando os inputs date
dateInputs.forEach(input => {
    const inputToday = dayjs(new Date()).format("YYYY-MM-DD")
    // Define o valor do input como a data atual 
    input.value = inputToday
    // Define a data tual como a data mínima para acesso (O ontem não existe mais)
    input.min = inputToday

    // Adicionando um evento para mudança de data 
input.onchange = () => {
    // selecionando a data atual e a data escolhida pelo usuário
    const today = dayjs().startOf("day")
    const selectedDate = dayjs(input.value)
// Se a data escolhida for maior que a data atual, não haverá horário mínimo 
if(selectedDate.isAfter(today)) {
    hour.min = "00:00"
} else {
    hour.min = hourNow
}


}

})


// Validando o input de telefone
cellphone.oninput = () => {
    // Aplica um regerx para permitir somente números no input 
    let value = cellphone.value.replace(/[^0-9]/g, "")
    // Delimita a quantidade de dígitos 
    if (value.length > 11) value = value.slice(0, 11)
// Formata o que foi digitado para um número de telefone 
    if (value.length <= 10) {
        cellphone.value = value.replace(/(\d{2})(\d{4})(\d+)/, "($1) $2-$3")
    } else {
        cellphone.value = value.replace(/(\d{2})(\d{5})(\d+)/, "($1) $2-$3")
    }
}

// Adicionando o evento de submit ao formulário
form.onsubmit = async (event) => {
    // Previne o comportamento padrão de envio do formulário 
    event.preventDefault()

    try {
        // Recuperando os valores
        const name = masterName.value.trim()
        const pet = petName.value.trim()
        const services = descriptionServices.value.trim()


// Transformando o valor do input time em array e capturando o primeiro valor (que seria a hora sem o ":00") para verificação 
        const hourParts = hour.value.split(":")
        const hourValue = parseInt(hourParts[0], 10)

        // Validando os campos
        if (!name || !pet) {
            alert("Por favor, digite corretamente o nome do cliente e do pet.")
            return
        }

        if (!services) {
            alert("Por favor, insira uma descrição dos serviços.")
            return
        }

        // Gerando um ID para ser enviado para a API do agendamento
        const id = new Date().getTime()

// Capturando somente o input date do formulário para gerar uma data/hora a ser enviada para api
        const date = document.getElementById("date")
        
        const when = dayjs(date.value).add(hourValue, "hour")
        console.log(when)

await sendSchedule({ id, name, pet, when, services })
        // Resetando o formulário 
        form.reset()

    } catch (error) {
        // Exibição no console e alerta ao usuário caso haja algum erro
        console.log(error)
        alert("Não foi possível realizar o agendamento.")
    }
}
