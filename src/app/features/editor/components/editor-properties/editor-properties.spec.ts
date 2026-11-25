import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorProperties } from './editor-properties';

describe('EditorProperties', () => {
  let component: EditorProperties;
  let fixture: ComponentFixture<EditorProperties>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditorProperties],
    }).compileComponents();

    fixture = TestBed.createComponent(EditorProperties);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
