export type Status = 'DRAFT' | 'PENDING REVIEW' | 'VERIFIED' | 'CHANGES REQUESTED' | 'REJECTED';
export type Category = 'Academic' | 'Leadership' | 'Projects and Research' | 'Internships and Professional Experience' | 'Innovation' | 'Community Engagement' | 'Awards and Recognition' | 'University Representation' | 'Certifications and Professional Development';
export type Role = 'Student / Alumni' | 'Lecturer / Supervisor' | 'Career Services / Administrator' | 'External Recipient';
export type View = 'dashboard' | 'profile' | 'achievements' | 'recommendations' | 'privacy' | 'activity' | 'settings' | 'review';
export interface AuthenticatedUser { id: string; displayName: string; role: Role; accountType: 'student' | 'lecturer' | 'career-services' | 'external-recipient'; }
export interface Achievement { id: string; title: string; category: Category; description: string; organization: string; date: string; skills: string[]; impact: string; evidence: string; status: Status; submittedAt?: string; reviewer?: string; reviewedAt?: string; feedback?: string; visibility: 'Only me' | 'Authorized reviewers' | 'Career Services' | 'Shared portfolio'; }
export interface Profile { name: string; studentId: string; programme: string; faculty: string; year: string; graduation: string; bio: string; skills: string[]; interests: string; leadership: string; languages: string; goals: string; }
export interface RecommendationRequest { id: string; purpose: string; opportunity: string; recommender: string; achievementIds: string[]; message: string; targetDate: string; status: 'Draft' | 'Requested' | 'Accepted' | 'In Progress' | 'Completed' | 'Declined'; }
export interface ActivityEvent { id: string; event: string; detail: string; actor: string; time: string; }
