
export interface Experience {
  id: string;

  position: string;
  company: string;
  location?: string;

  employmentType?:
    | 'full-time'
    | 'part-time'
    | 'contract'
    | 'freelance'
    | 'internship';

  startDate: string;
  endDate?: string;

  current: boolean;

  description?: string;

  achievements?: string[];

  technologies?: string[];
}
