import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../data/models/IProduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit
{
  products : IProduct[] = [];
  bypass: boolean = true;

  ngOnInit(): void 
  {
    let product1: IProduct = {
      id: 0,
      title: 'Controller',
      price: '120,42',
      category: "Technology",
      description: "A Xbox Controller",
      image: '',
      rating: {
        rate: 0,
        count: 0
      } 
    };

  }

}
