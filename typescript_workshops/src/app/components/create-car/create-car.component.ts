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
    eventCreateCar = new EventEmitter<ICar>();


    saveCar()
    {
        let createdCar: ICar = {
          id: this.id,
          name : this.name,
          price: this.price,
          description: this.description,
          brand: this.brand,
          kms: this.kms,
          location: {
            neighborhood: this.neighborhood,
            locality: this.locality
          },
          image: this.image,
          owner : {
            ownerName: this.ownerName,
            ownerImage: this.ownerImage
        }

        this.eventCreateCar.emit(createdCar);
        }
    }

}
