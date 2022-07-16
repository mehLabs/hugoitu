import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSideBtnsComponent } from './right-side-btns.component';

describe('RightSideBtnsComponent', () => {
  let component: RightSideBtnsComponent;
  let fixture: ComponentFixture<RightSideBtnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightSideBtnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightSideBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
