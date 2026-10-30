export interface Certificate {
    id: number
    title: string
    issuer: string
    category: string | null
    issue_date: string | null
    expiration_date: string | null
    credential_id: string | null
    credential_url: string | null
    image: string | null
    description: string | null
    is_featured: boolean
    sort_number: number
    status: string
    created_at: string
    updated_at: string
}