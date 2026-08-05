export default async function getUsers(){
    try {
        const response = await fetch('http://localhost:3000/users')
        if(!response.ok) throw new Error('O fetch falhou')
        return await response.json()
    } catch (error) {
        console.log(error)
        throw error
    }
}