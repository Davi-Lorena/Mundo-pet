import { apiConfig } from "./api-config"
import dayjs from "dayjs"
import { createSchedule } from "../modules/form/create-schedule.js"

export async function fetchSchedules({ date }) {
    try {
        const response = await fetch(`${apiConfig.baseURL}/schedulespet`)

        const data = await response.json()

const dailySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.when, "day"))

// Limpa as listas antes de renderizar os novos agendamentos
document.getElementById("morning").innerHTML = "";
document.getElementById("afternoon").innerHTML = "";
document.getElementById("night").innerHTML = "";

dailySchedules.forEach((schedule) => createSchedule({ schedule }))

return dailySchedules

// Renderizando os agendamentos filtrados 

    } catch (error) {
        console.log(error)
        alert("Não foi possível exibir os agendamentos desse dia.")
    }
}