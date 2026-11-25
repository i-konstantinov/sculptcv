import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Editor } from '../../features/editor/editor';
import { CVTemplate } from '../../models/template.model';
import { TemplateService } from '../../services/template.service';

/** Route container: resolves the selected template from the URL and hands it to the editor. */
@Component({
  imports: [ButtonModule, Editor, RouterLink],
  selector: 'app-create',
  styleUrl: './create.scss',
  templateUrl: './create.html',
})
export class Create implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
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

  protected backToTemplates(): void {
    void this.router.navigate(['/templates']);
  }
}
