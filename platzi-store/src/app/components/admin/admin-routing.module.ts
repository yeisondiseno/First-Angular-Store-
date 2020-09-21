import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductFormComponent } from './components/product-form/product-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductsComponent } from './components/products/products.component';
import { from } from 'rxjs';


const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
          {
            path: 'create',
            component: ProductFormComponent
          },
          {
            path: 'dashboard',
            component: DashboardComponent
          },
          {
            path: 'listproducts',
            component: ListProductsComponent
          },
          {
            path: 'products',
            component: ProductsComponent
          }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
