
export interface Project {
  id: number
  title: string
  slug: string
  category: string | null
  description: string
  long_description: string | null
  technologies: string[] | null
  features: string[] | null
  image: string | null
  screenshots: string[] | null
  github_url: string | null
  demo_url: string | null
  year: number | null
  is_featured: boolean
  sort_order: number
  status: boolean
}
