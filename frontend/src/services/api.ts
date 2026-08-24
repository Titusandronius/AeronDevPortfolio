import {supabase} from '../lib/supabase'

const API_URL = 'http://127.0.0.1:8000/api'

export async function getLaravelUser(){
    const {data, error} = await supabase.auth.getSession()

    if(error || !data.session){
        throw new Error('No active Supabase session')
    }

    const response = await fetch(`${API_URL}/user`,{
        headers:{
            Authorization:`Bearer ${data.session.access_token}`,
            Accept: 'application/json',
        },
    })

    if(!response.ok){
        throw new Error('Laravel authentication failed')
    }

    return await response.json()
}

