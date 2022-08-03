import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProfilePictureComponent } from './home-profile-picture.component';

describe('HomeProfilePictureComponent', () => {
  let component: HomeProfilePictureComponent;
  let fixture: ComponentFixture<HomeProfilePictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeProfilePictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProfilePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
