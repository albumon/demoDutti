import { Deserializable } from './deserializable.model';

export class Ship implements Deserializable{
    name: string;
    model: string;
    manufacturer: string;
    costInCredits: number;
    length: number;
    maxAtmosPheringSpeed: string;
    crew: number;
    passengers: number;
    consumables: string;
    hyperdriveRating: number;
    mglt: number;
    starshipClass: string;
    pilots: string[];
    films: string[];
    created: Date;
    edited: Date;
    url: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
