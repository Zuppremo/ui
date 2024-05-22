import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICar } from '../../data/models/ICar';
@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrl: './create-car.component.scss'
})
export class CreateCarComponent {
    id: number = 0;
    name: string = "";
    price: number = 0;
    description: string = "";
    brand: string = "";
    kms: number = 0;
    year: number = 0;
    neighborhood: string = "";
    locality: string = "";
    image: string = "";
    ownerName: string = "";
    ownerImage: string = "";


    @Input()
    createString : string = "";

    @Output()
    eventCreateCAr = new EventEmitter<ICar>();
    
    let createdCar : ICar = {
        id: this.id; 
        name : this.name,

    }

}
