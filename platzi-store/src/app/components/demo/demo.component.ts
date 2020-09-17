import { Component, NgModule, OnInit } from '@angular/core';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})

export class DemoComponent implements OnInit {

  title = 'Platzi Store';

  items = ['Nicolas', 'Yeison', 'Julian'];

  power = 10;


  constructor() { }

  ngOnInit() {
  }

  addItem() {
    this.items.push('nuevo Item');
  }
  deleteItem( index: number ) {
    this.items.splice( index, 1 );
  }

}
