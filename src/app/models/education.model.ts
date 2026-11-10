
export interface Education {
  id: string;

  institution: string;
  degree: string;

  fieldOfStudy?: string;
  location?: string;

  startDate?: string;
  endDate?: string;

  current?: boolean;

  grade?: string;

  description?: string;

  achievements?: string[];
}
