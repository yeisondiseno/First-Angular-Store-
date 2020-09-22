import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsRoutingModule } from './produts-routing.module';
import { from } from 'rxjs';

import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule
  ]
})
export class ProductsModule { }
