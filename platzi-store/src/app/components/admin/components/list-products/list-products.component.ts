import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ListProductsDataSource, ListProductsItem } from './list-products-datasource';

import { ProductsService } from '../../../../core/services/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<ListProductsItem>;
  dataSource: ListProductsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  products = [];

  displayedColumns = ['id', 'title', 'price', 'actions'];

  constructor(
    private  productsService: ProductsService
  ) { }

  ngOnInit() {
    // this.dataSource = new ListProductsDataSource();
    this.fetchProducts();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  fetchProducts() {
    this.productsService.getAllProduct()
    .subscribe( products => {
      this.products = products;
    });
  }

  deleteProduct(id: string) {
    // tslint:disable-next-line: radix
    this.productsService.deleteProduct(id)
    .subscribe(rta => {
      console.log(rta);
      // this.fetchProducts();
      if ( rta ) {
        const index = this.products.findIndex((product) => product.id === id);
        this.products.splice( index , 1 );
        this.products = [ ...this.products];
      }

    });
  }
}
