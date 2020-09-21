import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    ) {
      this.buildForm();
    }

  onSubmit() {
    alert('Thanks!');
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: 0,
      image: '',
      description: ''
    });
  }
}
