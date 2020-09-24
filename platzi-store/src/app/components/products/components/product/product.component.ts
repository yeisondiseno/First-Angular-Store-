import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnInit,
    DoCheck,
    OnDestroy
} from '@angular/core';

import { Product } from '../../../../product.model';

import { CartService } from '../../../../core/services/cart.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
})

export class ProductComponent implements OnInit, DoCheck, OnDestroy {
    @Input() product: Product;
    @Output() productClicked = new EventEmitter<any>();

    constructor(
        private cartService: CartService
    ) {
        console.log('constructor');
    }

    // ngOnChanges(changes: SimpleChanges): void {
    //     console.log('ngOnChanges');
    //     console.log(changes);
    // }

    ngOnInit() {
        console.log('ngOnInit');
    }

    ngDoCheck() {
        console.log('ngDoCheck');
    }

    ngOnDestroy() {
        console.log('ngOnDestroy');
    }

    addCart() {
        console.log('Agregado al carro');
        // this.productClicked.emit(this.product.id);
        this.cartService.addCart(this.product);
    }
}
