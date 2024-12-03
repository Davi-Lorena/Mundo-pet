import { apiConfig } from "./api-config";

export async function sendSchedule({ id, name, pet, when }) {
    try {
        await fetch(`${apiConfig.baseURL}/schedulespet`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
body: JSON.stringify({ id, name, pet, when})
        })


    } catch (error) {
        console.log(error)
        alert("Não foi possível realizar o agendamento")
    }
}