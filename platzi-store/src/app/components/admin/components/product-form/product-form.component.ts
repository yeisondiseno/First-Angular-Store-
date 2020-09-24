import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { MyValidators } from '../../../../utils/validators';

import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

import { ProductsService } from '../../../../core/services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {

  form: FormGroup;
  image$: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private storage: AngularFireStorage
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

  uploadFile( event ) {
    const file = event.target.files[0];
    const name = file.name;
    // const dir = 'images';
    const fileRef = this.storage.ref( name );
    const task = this.storage.upload( name, file );
    // console.log( name );
    // console.log( file );

    task.snapshotChanges()
    .pipe(
      finalize( () => {
        this.image$ = fileRef.getDownloadURL();
        this.image$.subscribe( url => {
          console.log(url);
          this.form.get('image').setValue(url);
        } );
      } )
    )
    .subscribe();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ''
    });
  }

// tomar el fomulario y ponerla como formulario variable
  get priceField() {
    return this.form.get('price');
  }

}
