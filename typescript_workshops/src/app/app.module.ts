import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './components/person/person.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './components/products/products.component';
import { CarsComponent } from './components/cars/cars.component';
import { CreateCarComponent } from './components/create-car/create-car.component';
@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    ProductsComponent,
    CarsComponent,
    CreateCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
