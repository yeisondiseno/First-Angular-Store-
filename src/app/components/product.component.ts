import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Tproduct } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
})

export class ProductComponent {


    @Input() product: Tproduct;
    @Output() clickAddCart: EventEmitter<any> = new EventEmitter();

    addCart() {
        console.log('añadir al carrito');
        this.clickAddCart.emit(this.product.id);
    }

}



