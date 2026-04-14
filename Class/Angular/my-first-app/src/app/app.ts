import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Admin } from '../admin/admin';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Admin],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-first-app');

  // Variable Declarations

  name: string = "Angular";
  age: number = 10;
  data: any = null;
  isLoading: boolean = false;
}
