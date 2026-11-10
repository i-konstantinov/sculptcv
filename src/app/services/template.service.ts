import { Injectable, computed, signal } from '@angular/core';
import { CVTemplate } from '../models/template.model';
import { PREDEFINED_TEMPLATES } from '../templates/predefined-templates';

@Injectable({ providedIn: 'root' })
export class TemplateService {
  private readonly lastSelectedIdSignal = signal<string | null>(null);

  /** Id of the most recently selected template, or null if none yet. */
  readonly lastSelectedId = this.lastSelectedIdSignal.asReadonly();

  /** The most recently selected template, if it is one of the pre-defined ones. */
  readonly lastSelected = computed(() => {
    const id = this.lastSelectedIdSignal();
    return id ? this.getById(id) : undefined;
  });

  select(id: string): void {
    this.lastSelectedIdSignal.set(id);
  }

  getAll(): CVTemplate[] {
    return PREDEFINED_TEMPLATES;
  }

  getById(id: string): CVTemplate | undefined {
    return PREDEFINED_TEMPLATES.find((template) => template.id === id);
  }
}
