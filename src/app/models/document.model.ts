import { Experience } from "./experience.model";
import { Education } from "./education.model";
import { Language } from "./language.model";

export interface CVDocument {
  id: string;

  templateId: string;

  personalInfo: {
    fullName: string;
    jobTitle: string;
    email: string;
    phone: string;
    location: string;
    profileImage?: string;
  };

  summary: string;

  experience: Experience[];
  education: Education[];
  skills: string[];
  languages: Language[];
}