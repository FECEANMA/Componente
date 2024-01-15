import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-messages',
  standalone: true,
  imports: [],
  templateUrl: './welcome-messages.component.html',
  styleUrl: './welcome-messages.component.css'
})
export class WelcomeMessagesComponent {
  welcomeMessage: string = 'Bienvenido a tu perfil de Angular!';
}
