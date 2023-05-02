export async function getApi() {
    try {
        const data = await fetch('https://animechan.vercel.app/api/quotes')
        const response = await data.json();
        console.log(response)
        return response
    } catch (error) {
        console.log('error')
    }
}