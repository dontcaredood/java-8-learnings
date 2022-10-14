import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleSheetComponent } from './style-sheet.component';

describe('StyleSheetComponent', () => {
  let component: StyleSheetComponent;
  let fixture: ComponentFixture<StyleSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
