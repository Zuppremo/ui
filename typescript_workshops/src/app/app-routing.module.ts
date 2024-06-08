import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './components/person/person.component';
import { ProductsComponent } from './components/products/products.component';
import { CarsComponent } from './components/cars/cars.component';
import { CreateCarComponent } from './components/create-car/create-car.component';

const routes: Routes =[

  {path: '',  component: PersonComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'cars', component: CarsComponent},
  {path: 'create-car', component: CreateCarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }