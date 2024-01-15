import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WindowComponent } from './window/window.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserHobbiesComponent } from './user-hobbies/user-hobbies.component';
import { WelcomeMessagesComponent } from './welcome-messages/welcome-messages.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, WindowComponent, UserInfoComponent, UserHobbiesComponent,WelcomeMessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'componente';
}
