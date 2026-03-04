import type { Tables } from '../lib/supabase/database.types'

export type Body = {
  goal: string
  currentSkills?: string[]
  experienceLevel?: 'beginner' | 'intermediate' | 'advanced'
  preferredLanguage?: string // "vi" | "en"
}

export type Difficulty = 'beginner' | 'intermediate' | 'advanced'

export type SkillCategory = {
  id: number
  name: string
}

export type ModuleSearchCriteria = {
  must_include: string[]
  search_keywords: {
    vi: string[]
    en: string[]
  }
}

export type Module = {
  title: string
  why: string
  outcomes: string[]
  difficulty: string
  search_keywords: {
    vi: string[]
    en: string[]
  }
  must_include: string[]
  project?: {
    name: string
    what_to_build: string[]
    acceptance_criteria: string[]
  }
}

export type AIModuleResponse = {
  subcategory_id: number
  title: string
  why: string
  outcomes: string[]
  difficulty: string
  search_keywords: {
    vi: string[]
    en: string[]
  }
  course_ids: string[]
  note?: string
  keywords?: string[]
}

export type ModuleWithCourses = Omit<Module, 'difficulty'> & {
  difficulty: Difficulty
  courses: CourseCandidate[]
  note?: string
}

export type CourseCandidate = Tables<'courses'> & { tags: string[] }

export type CareerPlanResponse = {
  is_relevant: boolean
  message: string
  role_title: string
  overview: string
  overview_bullets: string[]
  skills_covered: string[]
  modules: ModuleWithCourses[]
}

export type CategoryRow = {
  id: number
  parent_id: number | null
  name: string
  slug: string
  description?: string | null
  order_index?: number | null
  active?: boolean | null
}

export type CareerParent = {
  id: number
  name: string
  slug: string
  description?: string | null
  order_index?: number | null
}

export type CareerModule = {
  id: number
  parent_id: number
  name: string
  slug: string
  description?: string | null
  order_index?: number | null
  parent_name: string
  parent_slug: string
}
