import { Area } from './areas.model';

export class Profile {
    public name: string;
    public Age: number;
    public City: string;
    public gender: string;
    public Areas: Area[];
    public ContactNumber: number;


    constructor(name: string, Age: number, City: string, gender: string, contact: number, area: Area[]) {
        this.name = name;
        this.Age = Age;
        this.gender = gender;
        this.City = City;
        this.ContactNumber = contact;
        this.Areas = area;
    }

}
