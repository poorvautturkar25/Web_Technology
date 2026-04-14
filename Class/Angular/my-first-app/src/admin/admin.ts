import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-admin',
  imports: [FormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  fname: string = "Poorva";
  age: number = 25;
  email: string = "poorvautturkar@gmail.com";

  updateAdmin() {
    this.fname = "Merry";
    this.age = 30;
    this.email = "merry@gmail.com"
  }
}
