import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding-composant',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './binding-composant.html',
  styleUrls: ['./binding-composant.css'],
})
export class BindingComposant {
  user = {
    name: 'Wake',
    firstName: 'Alan',
    age: 30,
    img: 'https://randomuser.me/api/portraits/lego/2.jpg',
    quote: 'Hello ! Goodbye !',
  };

  showAge = false;

  toggleAge() {
    this.showAge = !this.showAge;
  }
}
