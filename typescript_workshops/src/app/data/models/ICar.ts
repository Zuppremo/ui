import { ILocation } from "./ILocation";
import { IOwner } from "./IOwner";

export interface ICar{
    id: number,
    name: string,
    description: string,
    image: string,
    price: number,
    brand: string,
    year: number,
    kms: number,
    location: ILocation
    owner: IOwner
}