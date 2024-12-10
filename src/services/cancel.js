import { apiConfig } from "./api-config";

export async function cancel({ id }) {
try {
    await fetch(`${apiConfig.baseURL}/schedulespet/${id}`, {
        method: 'DELETE',
    })

} catch (error) {
console.log(error)    
alert('Não foi possível realizar o cancelamento')
}
    
}