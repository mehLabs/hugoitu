import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSectionBtnComponent } from './edit-section-btn.component';

describe('EditSectionBtnComponent', () => {
  let component: EditSectionBtnComponent;
  let fixture: ComponentFixture<EditSectionBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSectionBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSectionBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
