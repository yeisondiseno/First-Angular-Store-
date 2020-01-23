import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'Platzi Store';

  nameUser: any = '';

  items = [
    'Nicolas', 'Jualian', 'Perez'
  ];

  objeto = {};

  power = 10;


  addItem(nameUser) {
    this.items.push(nameUser);
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

  constructor() { }

  ngOnInit() {
  }

}
