import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { TemplateService } from '../../services/template.service';
import { TEMPLATE_CATALOG } from '../../templates/template-catalog';

@Component({
  imports: [CardModule, TagModule],
  selector: 'app-templates',
  styleUrl: './templates.scss',
  templateUrl: './templates.html',
})
export class Templates {
  private readonly router = inject(Router);
  private readonly templateService = inject(TemplateService);

  protected readonly templates = TEMPLATE_CATALOG;

  protected select(id: string): void {
    this.templateService.select(id);
    this.router.navigate(['/create'], { queryParams: { id } });
  }
}
