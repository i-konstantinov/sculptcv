import { Component, computed, input, output, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CVTemplate } from '../../models/template.model';
import { EditorCanvas } from './components/editor-canvas/editor-canvas';
import { EditorProperties } from './components/editor-properties/editor-properties';
import { EditorSidebar } from './components/editor-sidebar/editor-sidebar';
import { EditorToolbar } from './components/editor-toolbar/editor-toolbar';

const ZOOM_MIN = 0.25;
const ZOOM_MAX = 3;
const ZOOM_STEP = 0.25;

/**
 * Editing workspace. Router-agnostic: it only knows what it is given via inputs,
 * so it can be hosted by /create, /edit/:id or any other container.
 *
 * TODO: take an editable document model instead of a template, so saved CVs can be edited too.
 */
@Component({
  selector: 'app-editor',
  imports: [ButtonModule, EditorCanvas, EditorProperties, EditorSidebar, EditorToolbar],
  templateUrl: './editor.html',
  styleUrl: './editor.scss',
})
export class Editor {
  /** Starting template. Treated as read-only; editing must never mutate it. */
  readonly template = input.required<CVTemplate>();

  /** User asked to leave the editor; the host decides where to go. */
  readonly back = output<void>();

  protected readonly zoom = signal(1);
  protected readonly zoomPercent = computed(() => Math.round(this.zoom() * 100));
  protected readonly canZoomIn = computed(() => this.zoom() < ZOOM_MAX);
  protected readonly canZoomOut = computed(() => this.zoom() > ZOOM_MIN);

  protected zoomIn(): void {
    this.zoom.update((z) => Math.min(ZOOM_MAX, z + ZOOM_STEP));
  }

  protected zoomOut(): void {
    this.zoom.update((z) => Math.max(ZOOM_MIN, z - ZOOM_STEP));
  }

  protected resetZoom(): void {
    this.zoom.set(1);
  }
}
