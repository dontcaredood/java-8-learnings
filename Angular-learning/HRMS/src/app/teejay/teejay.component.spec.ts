import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeejayComponent } from './teejay.component';

describe('TeejayComponent', () => {
  let component: TeejayComponent;
  let fixture: ComponentFixture<TeejayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeejayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeejayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
