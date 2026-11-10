import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { TEMPLATE_CATALOG } from '../../templates/template-catalog';

@Component({
  imports: [CardModule, TagModule],
  selector: 'app-templates',
  styleUrl: './templates.scss',
  templateUrl: './templates.html',
})
export class Templates {
  protected readonly templates = TEMPLATE_CATALOG;
}
