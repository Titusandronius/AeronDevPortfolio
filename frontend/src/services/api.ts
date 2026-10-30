import type { Experience } from '@/types/experience'
import type { Project } from '@/types/project'
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

export async function getSkills(){
    const response = await fetch(`${API_URL}/skills`,{
        headers: {
            Accept: 'application/json',
        },
    })
    if(!response.ok){
        throw new Error('Failed to fetch Skills')
    }
    return await response.json()
}

export async function getExperiences(): Promise<Experience[]> {
  const response = await fetch(`${API_URL}/experiences`)
  if (!response.ok) {
    throw new Error('Failed to fetch experiences')
  }
  return response.json()
}

export async function getProjects(): Promise<Project[]> {
  const response = await fetch(`${API_URL}/projects`)
  if (!response.ok) {
    throw new Error('Failed to fetch projects')
  }
  return response.json()
}

export async function getProjectBySlug(
  slug: string
): Promise<Project> {
  const response = await fetch(
    `${API_URL}/projects/${encodeURIComponent(slug)}`
  )
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('Project not found')
    }
    throw new Error('Failed to fetch project details')
  }
  return response.json()
}