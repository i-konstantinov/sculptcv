import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { CVElement } from '../../models/element.model';
import { Fill } from '../../models/fill.model';
import { CVTemplate } from '../../models/template.model';
import { TemplateService } from '../../services/template.service';

@Component({
  imports: [ButtonModule, RouterLink, TableModule, TagModule],
  selector: 'app-create',
  styleUrl: './create.scss',
  templateUrl: './create.html',
})
export class Create implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);
  private readonly templateService = inject(TemplateService);

  protected readonly requestedId = signal<string | null>(null);
  protected readonly template = signal<CVTemplate | undefined>(undefined);

  ngOnInit(): void {
    this.route.queryParamMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
      const id = params.get('id');
      const template = id ? this.templateService.getById(id) : undefined;

      this.requestedId.set(id);
      this.template.set(template);

      if (template) {
        this.templateService.select(template.id);
      }
    });
  }

  protected describeFill(fill: Fill | undefined): string {
    if (!fill) return '—';
    if (fill.type === 'solid') return fill.color;
    const stops = fill.stops.map((stop) => `${stop.color} ${stop.offset * 100}%`).join(', ');
    return `${fill.type}${fill.angle !== undefined ? ` ${fill.angle}°` : ''}: ${stops}`;
  }

  protected describeElement(element: CVElement): string {
    switch (element.type) {
      case 'text': {
        const { source, fallback } = element.content;
        const { fontFamily, fontSize, fontWeight } = element.typography;
        const label = source === 'static' ? `"${fallback}"` : `{${source}}`;
        return `${label} · ${fontFamily} ${fontSize}px / ${fontWeight}`;
      }
      case 'image':
        return `{${element.src}} · ${element.fit}`;
      case 'line':
        return `${element.stroke} · ${element.strokeWidth}px${element.dash ? ' dashed' : ''}`;
      case 'rectangle':
      case 'circle':
        return this.describeFill(element.fill);
    }
  }
}
