import { Component } from '@angular/core';

@Component({
  selector: 'app-user-hobbies',
  standalone: true,
  imports: [],
  templateUrl: './user-hobbies.component.html',
  styleUrl: './user-hobbies.component.css'
})
export class UserHobbiesComponent {
  hobbies: string[] = ['Leer', 'Correr', 'Cocinar'];
}
