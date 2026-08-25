const API_URL = 'http://127.0.0.1:8000/api'

export async function getProfile(){
    const response = await fetch(`${API_URL}/profile`,{
        headers: {
            Accept: 'application/json',
        },
    })

    if(!response.ok){
        throw new Error('Failed to fetch profile')
    }
    return await response.json()
}

