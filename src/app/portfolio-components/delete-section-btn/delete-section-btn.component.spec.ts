import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSectionBtnComponent } from './delete-section-btn.component';

describe('DeleteSectionBtnComponent', () => {
  let component: DeleteSectionBtnComponent;
  let fixture: ComponentFixture<DeleteSectionBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSectionBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSectionBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
