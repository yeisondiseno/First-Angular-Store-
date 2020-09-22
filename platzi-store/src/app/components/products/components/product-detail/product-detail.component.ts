import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';

import { ProductsService } from '../../../../core/services/products.service';
import { Product } from '../../../../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) =>{
      const id = params.id;
      // this.product = this.productsService.getProduct(id);
      this.fetchProduct(id);
      console.log(this.product);
    } );
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id)
    .subscribe(product => {
      this.product = product;
    });
  }

  createProduct() {
    const newProduct: Product = {
      id: '222',
      title: 'Nuevo desde angular',
      // tslint:disable-next-line: max-line-length
      image: 'https://images.unsplash.com/photo-1600376646622-dab45268282b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
      price: 90000,
      description: 'Esta es una descripción'
    };
    this.productsService.createProduct(newProduct)
    .subscribe(product => {
      console.log(product);
    });
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      title: 'Nuevo desde angular modificado',
      price: 30000,
      description: 'Esta es una descripción modificada'
    };
    this.productsService.updateProduct( '222', updateProduct)
    .subscribe(product => {
      console.log(product);
    });
  }

  deleteProduct() {
    this.productsService.deleteProduct('222')
    .subscribe(rta => {
      console.log(rta);
    });
  }

}
