import { CVPage } from "./pade.model";

export interface CVTemplate {
  id: string;
  name: string;
  description: string;

  thumbnail: string;

  category: 'modern' | 'classic' | 'creative';

  version: number;

  fonts: string[];

  pages: CVPage[];
}