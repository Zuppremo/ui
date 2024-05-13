import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './components/person/person.component';
import { ProductsComponent } from './components/products/products.component';
import { CarsComponent } from './components/cars/cars.component';

const routes: Routes =[

  {path: '',  component: PersonComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'cars', component: CarsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }