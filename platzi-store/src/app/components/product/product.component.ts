import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChanges,
    OnInit,
    DoCheck,
    OnDestroy
} from '@angular/core';

import { Product } from '../../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['/product.component.scss']
})

export class ProductComponent implements OnInit, DoCheck, OnDestroy {
    @Input() product: Product;
    @Output() productClicked = new EventEmitter<any>();

    constructor() {
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
        this.productClicked.emit(this.product.id);
    }
}
