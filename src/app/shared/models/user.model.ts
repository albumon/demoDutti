import { Deserializable } from './deserializable.model';


export class User implements Deserializable {
    // Define the properties
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;

    // Implements the deserialize method from the Deserializable Interface
    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
