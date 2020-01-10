import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Platzi Store';

  nameUser:string = '';

  items = [
    'Nicolas', 'Jualian', 'Perez'
  ];

  products = [];

  addItem(nameUser) {
    this.items.push(nameUser);
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
