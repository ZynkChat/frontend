export type Deal = {
  id: string
  name: string
  logo: string
  thumbnail: string
  companyName: string
  sector: string
  stage: string
  region: string
  aum: string
  revenue: string
  users: string
  description: string
  shortDescription: string
  videoUrl: string
  tags: string[]
  thesis: string
  team: Array<{ name: string; role: string; avatar: string }>
  traction: Array<{ metric: string; value: string; trend: string }>
  timeline: Array<{ date: string; event: string }>
  documents: Array<{ name: string; type: string; size: string; url: string }>
  minimumInvestment: string
  targetRaise: string
  currentRaise: string
}

export type AccessRequest = {
  name: string
  organization: string
  email: string
  country: string
  isAccredited: boolean
}

// Microgrant Application types
export type MicrograntApplication = {
  id: string

  // Applicant Information
  applicantType: 'individual' | 'organization' | 'team'
  fullName: string
  representativeName?: string
  email: string
  phoneNumber?: string
  physicalAddress?: string

  // Project Overview
  projectTitle: string
  projectDescription: string
  shortDescription?: string
  sector: string
  tags: string[]
  region: string
  logo?: string
  thumbnail?: string

  // Project Details
  targetBeneficiaries?: string
  estimatedImpact?: string
  timeline?: string
  startDate: string
  endDate: string

  // Financial Information
  requestedAmount: number
  currentFunding: number
  totalBudget: number
  budgetBreakdown: string

  // Additional Information
  previousExperience?: string
  teamMembers?: string
  team?: Array<{ name: string; role: string; avatar?: string }>
  sustainabilityPlan?: string

  // Supporting Documents
  documents: Array<{
    name: string
    type: 'proposal' | 'budget' | 'supporting'
    size: string
    url: string
  }>

  // Application Status
  status: 'draft' | 'submitted' | 'under_review' | 'approved' | 'rejected'
  submittedAt?: string
  reviewedAt?: string
  reviewNotes?: string

  // Metadata
  createdAt: string
  updatedAt: string
}

export type MicrograntApplicationFormData = {
  // Applicant Information
  fullName: string
  representativeName: string
  email: string
  phoneNumber: string
  physicalAddress: string
  youtubeUrl: string
  walletAddress: string

  // Project Overview
  projectTitle: string
  projectDescription: string
  sector: string
  tags: string[]
  region: string

  // Project Details
  targetBeneficiaries: string
  estimatedImpact: string
  timeline: string
  startDate: Date | null
  endDate: Date | null

  // Financial Information
  requestedAmount: number | ''
  currentFunding: number | ''
  totalBudget: number | ''
  budgetBreakdown: string

  // Additional Information
  previousExperience: string
  teamMembers: string
  sustainabilityPlan: string

  // Supporting Documents
  proposalDocument: File | null
  budgetDocument: File | null
  supportingDocuments: File[]
}

export type MicrograntStatus =
  | 'draft'
  | 'submitted'
  | 'under_review'
  | 'approved'
  | 'rejected'

export type MicrograntFilters = {
  sector?: string
  region?: string
  status?: MicrograntStatus
  tags?: string[]
  amountRange?: {
    min: number
    max: number
  }
  dateRange?: {
    start: string
    end: string
  }
}
