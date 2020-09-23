import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { from } from 'rxjs';

import { DemoComponent } from './components/demo/demo.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
// import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeModule } from './components/home/home.module';
import { ProductsModule } from './components/products/products.module';
import { ContactModule } from './components/contact/contact.module';
import { AdminModule } from './components/admin/admin.module';
import { OrderModule } from './components/order/order.module';
import { AuthModule } from './components/auth/auth.module';

import { AdminGuard } from './admin.guard';
// import {} from './'

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        // component: HomeComponent
        loadChildren: () => import('./components/home/home.module').then(m => HomeModule)
      },
      {
        path: 'products',
        // component: ProductsComponent
        loadChildren: () => import('./components/products/products.module').then(m => ProductsModule)
      },
      // {
      //   path: 'products/:id',
      //   // component: ProductDetailComponent
      //   loadChildren: () => import('./components/products/components/product-detail/product-detail.component').then(m => ProductsModule)
      // },
      {
        path: 'contact',
        // component: ContactComponent
        loadChildren: () => import('./components/contact/contact.module').then( m => ContactModule )
      },
      {
        path: 'order',
        loadChildren: () => import('./components/order/order.module').then( m => OrderModule )
      }
    ]
  },
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    // component: ContactComponent
    loadChildren: () => import('./components/admin/admin.module').then(m => AdminModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./components/auth/auth.module').then( m => AuthModule )
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
