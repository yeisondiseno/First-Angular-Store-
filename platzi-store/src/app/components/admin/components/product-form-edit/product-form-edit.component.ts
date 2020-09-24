import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MyValidators } from '../../../../utils/validators';

import { ProductsService } from '../../../../core/services/products.service';

@Component({
  selector: 'app-product-form-edit',
  templateUrl: './product-form-edit.component.html',
  styleUrls: ['./product-form-edit.component.scss']
})
export class ProductFormEditComponent {

  form: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {
      this.buildForm();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productsService.getProduct(this.id)
      .subscribe(product => {
        this.form.patchValue(product);
      });
    });
  }


  saveProduct(event: Event) {
    event.preventDefault();
    console.log(this.form.value);
    if ( this.form.valid ) {
      const product = this.form.value;
      this.productsService.updateProduct(this.id, product)
      .subscribe( (updateProduct) => {
        console.log(updateProduct);
        this.router.navigate(['admin/listproducts']);
      });
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
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
