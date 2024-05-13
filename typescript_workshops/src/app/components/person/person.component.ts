import { Component } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss',
})
export class PersonComponent {
  firstName : string = "";
  lastName : string = "";
  age : number = 0;
  email : string = "";
  phone : string = "";
  address : string = "";
  presentation : string = "";
}
