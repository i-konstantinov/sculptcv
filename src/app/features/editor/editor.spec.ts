import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PREDEFINED_TEMPLATES } from '../../templates/predefined-templates';
import { Editor } from './editor';

describe('Editor', () => {
  let component: Editor;
  let fixture: ComponentFixture<Editor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Editor],
    }).compileComponents();

    fixture = TestBed.createComponent(Editor);
    fixture.componentRef.setInput('template', PREDEFINED_TEMPLATES[0]);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
