import { CVTemplate } from '../models/template.model';
import classic from './classic/classic.json';
import creative from './creative/creative.json';
import modernMinimal from './modern-minimal/modern-minimal.json';

/**
 * Pre-defined templates bundled with the app.
 *
 * Text element `content.source` convention:
 * - `"static"`: render `content.fallback` as fixed label text.
 * - anything else: a dot-path into `CVDocument` (e.g. `personalInfo.fullName`, `experience`),
 *   with `fallback` used as placeholder when the value is empty.
 *
 * Image `src` uses the same dot-path convention (e.g. `personalInfo.profileImage`).
 */
export const PREDEFINED_TEMPLATES: CVTemplate[] = [
  modernMinimal as CVTemplate,
  classic as CVTemplate,
  creative as CVTemplate,
];
