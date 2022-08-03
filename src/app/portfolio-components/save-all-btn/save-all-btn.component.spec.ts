import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveAllBtnComponent } from './save-all-btn.component';

describe('SaveAllBtnComponent', () => {
  let component: SaveAllBtnComponent;
  let fixture: ComponentFixture<SaveAllBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveAllBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveAllBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
