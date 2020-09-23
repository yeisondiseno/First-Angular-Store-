import { Pipe, PipeTransform } from '@angular/core';
import { from } from 'rxjs';
import { Product } from '../../../product.model';
import { CartService } from '../../../core/services/cart.service';

@Pipe({
  name: 'repeatProduct'
})
export class RepeatProductPipe implements PipeTransform {

  products: Product[];

  constructor(
    private cartService: CartService
  ) {}

  transform(product: any, args?: any): any {
    let total = 0;
    this.cartService.cart$.subscribe( products => {
      products.forEach(( e ) => {
        if ( e.id === product.id ) {
          total += 1;
        }
      });
    });
    return total;
  }

}
