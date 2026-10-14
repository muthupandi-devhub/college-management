export type PageView = 'admissions' | 'academics' | 'campus-life' | 'research';

export type DecisionTrackKey = 'ed1' | 'ed2' | 'rd' | 'transfer';

export interface DecisionTrack {
  key: DecisionTrackKey;
  label: string;
  badge: string;
  deadlineDate: string;
  notificationDate: string;
  description: string;
  binding: boolean;
}

export interface ApplicationStage {
  number: string;
  stageName: string;
  title: string;
  description: string;
  footerNote: string;
  iconType: 'check' | 'file' | 'quill' | 'users' | 'shield' | 'bell';
}

export interface EndowedFellowship {
  id: string;
  name: string;
  icon: string;
  description: string;
  adjudicationNote: string;
  awardAmount: string;
  nominationProcess: string;
}

export interface RegionalDean {
  id: string;
  name: string;
  title: string;
  territory: string;
  upcomingVisit: string;
  email: string;
  imageUrl?: string;
  statesCovered: string[];
}

export interface DegreeProgram {
  id: string;
  title: string;
  name?: string;
  department?: string;
  division?: string;
  degree?: string;
  degreeType: 'Undergraduate' | 'Dual Degree' | 'Doctoral' | 'Professional';
  degreeCode: string; // e.g. B.A., B.S. / M.S., M.D. / Ph.D., LL.M.
  college: string;
  tagline: string;
  highlightKicker: string;
  description: string;
  duration: string;
  credits: string;
  campusResidence: string;
  capstoneRequirement: string;
  careerOutcomes: string[];
  facultyCount: number;
  honorsTrack: boolean;
  researchFellowship: boolean;
  internationalTerm: boolean;
  location: string;
  facultyLeader: string;
  sampleCourses: string[];
}

export interface ResidentialHouse {
  id: string;
  name: string;
  charteredYear: number;
  foundedYear?: number;
  capacity: number;
  heraldicIcon: string;
  architectureNote: string;
  distinguishingTradition: string;
  tradition?: string;
  dean?: string;
  notableAlumni?: string[];
  amenities?: string[];
  colors?: string[];
  motto: string;
  color: string;
}

export interface StudentSociety {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  founded?: number;
  foundedYear?: number;
  category: string;
  membersCount?: number;
  president?: string;
}

export interface ResearchInstitute {
  number: string;
  title: string;
  id?: string;
  name?: string;
  focus?: string;
  foundedYear?: number;
  categoryTag: string;
  description: string;
  metric: string;
  director: string;
  keyInitiative: string;
  keyInitiatives?: string[];
  facultyCount?: number;
  annualFunding?: string;
  labLocation?: string;
}

export interface ResearchPublication {
  id: string;
  journal: 'Nature' | 'Science' | 'The Lancet' | 'Law Review' | string;
  volumeIssue: string;
  publishedDate: string;
  doi: string;
  title: string;
  abstract: string;
  leadAuthor: string;
  authors?: string;
  keywords?: string[];
  year?: number;
  citationsCount?: number;
  citationMetrics: string;
  pdfSize: string;
  bibtex: string;
}

export interface InstrumentationCore {
  id: string;
  name: string;
  subhead: string;
  description: string;
  metric: string;
  icon: string;
  facility?: string;
  specifications?: string;
  accessPolicy?: string;
}

export interface StartupSpinout {
  id: string;
  name: string;
  companyName?: string;
  fundingRound: string;
  funding?: string;
  sector?: string;
  yearFounded?: number;
  founders?: string;
  description: string;
  capitalRaised?: string;
  category: string;
}

export interface FundingOpportunity {
  id: string;
  agency: string;
  program: string;
  title?: string;
  description: string;
  fundingTier: string;
  stipend?: string;
  deadline: string;
  eligibility?: string;
  status: 'Open for PI Review' | 'Consortium Formed' | 'Urgent: 14 Days Left';
  urgencyLevel: 'normal' | 'active' | 'urgent';
}
