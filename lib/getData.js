export async function getData(endpoint){
    const res = await fetch(`http://localhost:3000/api/${endpoint}`)
    const data = await res.json()

    return data

}
