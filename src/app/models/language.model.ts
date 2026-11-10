
export type LanguageProficiency =
  | 'native'
  | 'A1'
  | 'A2'
  | 'B1'
  | 'B2'
  | 'C1'
  | 'C2';

export interface Language {
  id: string;

  name: string;

  proficiency: LanguageProficiency;

  certificate?: string;
}
