
export type ExperienceCategory =
  | 'Work'
  | 'Internship'
  | 'Education'
  | 'Project'

export interface Experience {
  id: number
  title: string
  organization: string
  category: ExperienceCategory
  location: string | null
  start_date: string | null
  end_date: string | null
  is_current: boolean
  description: string | null
  highlights: string[] | null
  technologies: string[] | null
  organization_url: string | null
  start_year: number | null
  end_year: number | null
  logo: string | null
  sort_order: number
  status: boolean
}
