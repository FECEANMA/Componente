import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeMessagesComponent } from './welcome-messages.component';

describe('WelcomeMessagesComponent', () => {
  let component: WelcomeMessagesComponent;
  let fixture: ComponentFixture<WelcomeMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeMessagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WelcomeMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
