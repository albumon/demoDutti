// Create the Deserializable interface for deserializing JSON to Objects
export interface Deserializable {
    deserialize(input: any): this;
}
