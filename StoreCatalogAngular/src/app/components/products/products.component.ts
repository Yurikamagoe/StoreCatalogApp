import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  productForm: any;
  formTitle!: string;

  constructor() { }

  ngOnInit(): void {
    
    this.formTitle = 'Cadastro de produto';
    this.productForm = new FormGroup({
      name: new FormControl(null),
      price: new FormControl(null),
      description: new FormControl(null),
      quantity: new FormControl(null),
      registerDate: new FormControl(null),
      type: new FormControl(null)
    });
  }

}
