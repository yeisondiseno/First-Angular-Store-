import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { MaterialModule } from '../../material/material.module';
import { ProductsComponent } from './components/products/products.component';



@NgModule({
  declarations: [
    ProductFormComponent,
    NavComponent,
    DashboardComponent,
    ListProductsComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
  ]
})
export class AdminModule { }
