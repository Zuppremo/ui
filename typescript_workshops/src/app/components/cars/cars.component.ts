import { Component, OnInit } from '@angular/core';
import { ICar } from '../../data/models/ICar';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss'
})
export class CarsComponent implements OnInit{
  cars: ICar[] = [];
  ngOnInit(): void 
  {
    let firstCar: ICar = {
      id: 0,
      name: "GT-R",
      price: 300000,
      description: "Una combinación inigualable de potencia y alma: el Nissan GT-R. Disfruta del singular superauto que esculpe el viento con una aerodinámica optimizada para mejorar la conducción y el manejo en 2024.",
      brand: "Nissan",
      kms: 5000,
      year: 2024,
      location: {
        neighborhood: "Patio Bonito",
        locality: "Kennedy"
      },
      image: "https://es.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2024/site-simp/overview/2024-nissan-gt-r-nismo-driving-down-racetrack.jpg",
      owner:{
        name: "Juan Fernandez",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    }
    this.cars.push(firstCar);
    let secondCar: ICar = {
      id: 1,
      name: "4Runner",
      price: 150000,
      description: "4Runner es emblemático en el mundo de los doble tracción. Su nivel de robustez siempre ha sido característico en este vehículo icónico. Con el paso de los años, fue transformándose en un vehículo de lujo con alma de 4×4.",
      brand: "Toyota",
      kms: 0,
      year: 2025,
      location: {
        neighborhood: "Bulevar Plaza",
        locality: "Suba"
      },
      image: "https://www.toyota.com.co/wp-content/uploads/2020/08/1SUPER-BLANCO-7.jpg",
      owner: {
        name: "Pedro Gonzalez",
        image: "https://images.unsplash.com/photo-1608681299041-cc19878f79f1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    }
    this.cars.push(secondCar);
    let thirdCar: ICar = {
      id: 2,
      name: "Polo Track",
      price: 29000,
      description: "Moderno y atractivo, así es el diseño de Polo Track. Sus molduras laterales, faldones delanteros y traseros, juntos a exclusivos acabados destacan su personalidad única.",
      brand: "Volkswagen",
      kms: 2000,
      year: 2025,
      location: {
        neighborhood: "Manzana 8",
        locality: "Kennedy"
      },
      image: "https://cf-cdn-v6.volkswagen.at/media/Abstract_Image_B960_Component.Content_SimpleMedia_Image_Component/85488-1240837-905983-1240844-child-b960/dh-823-c2426a/392b16e7/1700718980/81-2400-still-polo-track-24-mpi-5-8-frente-esquerda-2r2r-platinum-amb-dia-adv-full-hd.jpg",
      owner: {
        name: "Santiago Romero",
        image: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    }
    this.cars.push(thirdCar);
  }
}
