import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';

import { Tproduct } from '../../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent implements  OnInit, DoCheck, OnDestroy {


    @Input() product: Tproduct;
    @Output() clickAddCart: EventEmitter<any> = new EventEmitter();

    today = new Date();


    constructor() {
        console.log('1. constructor');
    }

    // ngOnChanges(changes: SimpleChanges) {
    //     console.log('2. ngOnChange');
    //     console.log(changes);
    // }


    ngOnInit() {
        console.log('3. ngOnInit');
    }


    ngDoCheck() {
        console.log('4. ngDoCheck');
    }

    // sirve para limpiar componentes que ya no se necesiten

    ngOnDestroy() {
        console.log('5. ngOnDestroy');
    }



    addCart() {
        console.log('añadir al carrito');
        this.clickAddCart.emit(this.product.id);
    }

}



