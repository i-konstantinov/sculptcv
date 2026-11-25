import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  effect,
  inject,
  input,
  viewChild,
} from '@angular/core';
import { Canvas, Circle, Rect, Textbox } from 'fabric';

/** A4 at ~96 DPI (210 × 297 mm). */
export const A4_WIDTH = 794;
export const A4_HEIGHT = 1123;

/**
 * Owns the Fabric.js canvas: creation, rendering, canvas events and disposal.
 * Fabric stays an implementation detail of this component — nothing outside the
 * editor feature should import from 'fabric'.
 */
@Component({
  selector: 'app-editor-canvas',
  imports: [],
  templateUrl: './editor-canvas.html',
  styleUrl: './editor-canvas.scss',
})
export class EditorCanvas {
  /** Display zoom factor (1 = 100%). Document coordinates are unaffected. */
  readonly zoom = input(1);

  private readonly canvasRef = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');
  private canvas?: Canvas;

  constructor() {
    // The <canvas> element only exists after the first render, and Fabric needs a real DOM.
    afterNextRender(() => {
      this.canvas = new Canvas(this.canvasRef().nativeElement, {
        width: A4_WIDTH,
        height: A4_HEIGHT,
        backgroundColor: '#ffffff',
        // Keep the selected object at its z-position instead of jumping to the top.
        preserveObjectStacking: true,
      });

      this.addProofOfConceptObjects(this.canvas);
      this.applyZoom(this.zoom());
    });

    effect(() => this.applyZoom(this.zoom()));

    inject(DestroyRef).onDestroy(() => {
      void this.canvas?.dispose();
      this.canvas = undefined;
    });
  }

  private applyZoom(zoom: number): void {
    const canvas = this.canvas;
    if (!canvas) return;

    canvas.setDimensions({ width: A4_WIDTH * zoom, height: A4_HEIGHT * zoom });
    canvas.setZoom(zoom);
  }

  /** Temporary hardcoded content until the FabricAdapter renders real documents. */
  private addProofOfConceptObjects(canvas: Canvas): void {
    // Fabric v7 defaults to center origins; templates use top-left coordinates.
    const origin = { originX: 'left', originY: 'top' } as const;

    const header = new Rect({
      ...origin,
      left: 0,
      top: 0,
      width: A4_WIDTH,
      height: 180,
      fill: '#1f2937',
    });

    const name = new Textbox('Your Name', {
      ...origin,
      left: 56,
      top: 56,
      width: 480,
      fontFamily: 'Inter, Helvetica, Arial, sans-serif',
      fontSize: 44,
      fontWeight: 700,
      fill: '#ffffff',
    });

    const jobTitle = new Textbox('Job Title', {
      ...origin,
      left: 56,
      top: 116,
      width: 480,
      fontFamily: 'Inter, Helvetica, Arial, sans-serif',
      fontSize: 20,
      fill: '#d1d5db',
    });

    const avatar = new Circle({
      ...origin,
      left: A4_WIDTH - 56 - 120,
      top: 30,
      radius: 60,
      fill: '#6366f1',
      stroke: '#ffffff',
      strokeWidth: 4,
    });

    canvas.add(header, name, jobTitle, avatar);
    canvas.requestRenderAll();
  }
}
