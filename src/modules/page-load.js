import { fetchSchedules } from "../services/fetch-schedule"

document.addEventListener("DOMContentLoaded", async () => {
    const showDate = document.getElementById("show")

    const showDateValue = showDate.value
    
    await fetchSchedules({ date: showDateValue })
    
})

document.getElementById("show").addEventListener("change", (event) => {
    const selectedDate = event.target.value
    fetchSchedules({date: selectedDate})
})