
export type TemplateCategory =
  | 'modern'
  | 'classic'
  | 'creative'
  | 'professional';

export interface CVTemplatePreview {
  id: string;
  name: string;
  description: string;

  category: TemplateCategory;

  thumbnail: string;

  isPremium: boolean;

  tags: string[];
}
