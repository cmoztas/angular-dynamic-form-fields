import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  productForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createProductForm();
  }

  createProductForm() {
    this.productForm = this.formBuilder.group({
      name: '',
      quantities: this.formBuilder.array([])
    });
  }

  quantities(): FormArray {
    return this.productForm.get('quantities') as FormArray;
  }

  newQuantity(): FormGroup {
    return this.formBuilder.group({
      qty: '',
      price: ''
    });
  }

  addQuantity() {
    this.quantities().push(this.newQuantity());
  }

  removeQuantity(i: number) {
    this.quantities().removeAt(i);
  }

  onSubmit() {
    console.log(this.productForm.value);
  }
}
