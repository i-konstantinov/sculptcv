import { Component, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

/** Top bar. Will host add-text/shape/image, undo/redo and export actions. */
@Component({
  selector: 'app-editor-toolbar',
  imports: [ButtonModule],
  templateUrl: './editor-toolbar.html',
  styleUrl: './editor-toolbar.scss',
})
export class EditorToolbar {
  readonly title = input('');
  readonly back = output<void>();
}
