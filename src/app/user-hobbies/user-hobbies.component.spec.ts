import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHobbiesComponent } from './user-hobbies.component';

describe('UserHobbiesComponent', () => {
  let component: UserHobbiesComponent;
  let fixture: ComponentFixture<UserHobbiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserHobbiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserHobbiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
