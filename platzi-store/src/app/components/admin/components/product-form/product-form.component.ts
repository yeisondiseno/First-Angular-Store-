import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MyValidators } from '../../../../utils/validators';

import { ProductsService } from '../../../../core/services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router
    ) {
      this.buildForm();
  }

  saveProduct(event: Event) {
    event.preventDefault();
    console.log(this.form.value);
    if ( this.form.valid ) {
      const product = this.form.value;
      this.productsService.createProduct(product)
      .subscribe( (newProduct) => {
        console.log(newProduct);
        this.router.navigate(['admin/listproducts']);
      });
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: '',
      description: ''
    });
  }

//tomar el fomulario y ponerla como formulario variable 
  get priceField() {
    return this.form.get('price');
  }

}
