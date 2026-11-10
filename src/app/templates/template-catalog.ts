
import { CVTemplatePreview } from '../models/template-preview.model';

export const TEMPLATE_CATALOG: CVTemplatePreview[] = [
  {
    id: 'modern-minimal',
    name: 'Modern Minimal',
    description: 'A clean and balanced layout with subtle accents.',
    category: 'modern',
    thumbnail: 'assets/templates/example.png',
    isPremium: false,
    tags: ['Minimal', 'Two-column', 'Modern']
  },
  {
    id: 'executive',
    name: 'Executive',
    description: 'A sophisticated layout for experienced professionals.',
    category: 'professional',
    thumbnail: 'assets/templates/example.png',
    isPremium: true,
    tags: ['Corporate', 'Sidebar', 'Professional']
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'A distinctive design for creative professionals.',
    category: 'creative',
    thumbnail: 'assets/templates/example.png',
    isPremium: false,
    tags: ['Creative', 'Colorful', 'Visual']
  },
  {
    id: 'classic',
    name: 'Classic',
    description: 'A timeless and traditional CV layout.',
    category: 'classic',
    thumbnail: 'assets/templates/example.png',
    isPremium: false,
    tags: ['Traditional', 'Single-column', 'Elegant']
  },
  {
    id: 'developer',
    name: 'Developer',
    description: 'A technical CV focused on skills and experience.',
    category: 'professional',
    thumbnail: 'assets/templates/exampler.png',
    isPremium: false,
    tags: ['IT', 'Technical', 'Skills']
  },
  {
    id: 'elegant',
    name: 'Elegant',
    description: 'A refined layout with warm colors and typography.',
    category: 'modern',
    thumbnail: 'assets/templates/example.png',
    isPremium: true,
    tags: ['Elegant', 'Minimal', 'Typography']
  }
];
