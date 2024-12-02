import dayjs from "dayjs"

// capturando o formulário
const form = document.querySelector("form")

// capturando os inputs/textarea 

const masterName = document.getElementById("master")
const petName = document.getElementById("pet")
const cellphone = document.getElementById("phone")
const descriptionServices = document.querySelector("textarea")
const date = document.getElementById("date")
const hour = document.getElementById("hour")

// Manipulando um input com data 

const inputToday = dayjs(new Date()).format("YYYY-MM-DD")
// Definindo o valor da data do input como a data atual
date.value = inputToday
// Defininindo a data mínima como a data atual, impedindo o acesso à dias anteriores ao "Hoje"
date.min = inputToday

// Validando o input de telefone 
cellphone.oninput = () => {
// Remove caracteres que não são números 
let value = cellphone.value.replace(/[^0-9]/g, "")
// Define que o valor do input será o formatado 
cellphone.value = value.trim()
}

// Adicionando o evento de submit ao formulário
form.onsubmit = async (event) => {
// Previnindo o comportamento padrão de recarregar a página com o envio do formulário 
    event.preventDefault()

    try {

        // recuperando o nome do cliente e do pet 

        const name = masterName.value.trim()
        const pet = petName.value.trim() 

        // validando os nomes 
        if(!name && !pet) {
            alert("Por favor, digite corretamente o nome do cliente e do pet")
        }


    } catch (error) {
        console.log(error)
        alert("Não foi possível realizar o agendamento.")
    }


}
