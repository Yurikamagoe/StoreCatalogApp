import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from 'src/app/Product';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  productForm: any;
  formTitle!: string;
  productList: Product[] = [];
  visibilityTable: boolean = true;
  visibilityForm: boolean = false;

  constructor(private productsService: ProductsService ) { }

  ngOnInit(): void {
    this.productsService.GetAll().subscribe(result =>{
      this.productList = result;
    })
  }

  ShowForm(): void{
    this.visibilityTable = false;
    this.visibilityForm = true;
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
  
  SendForm():void{
    const product : Product = this.productForm.value;

    this.productsService.CreateProduct(product).subscribe(result =>{
      this.visibilityForm = false;
      this.visibilityTable = true
      alert('Produto cadastrado com sucesso');
      this.productsService.GetAll().subscribe(result =>{
        this.productList = result;
      })
    })
  }

  
  Back():void{
    this.visibilityTable = true;
    this.visibilityForm = false;
  }


}
