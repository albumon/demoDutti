export class GeneralUtil {

    /**
     * Method for checking if an object is a valid object.
     * Check if the object is not null and undefined
     * @param object object to check
     * @returns flag indicating if object is a valid object
     */
    public static isWorkableObject(object: any): boolean {
        return (object !== null && object !== undefined);
    }

    /**
     * Method for checking if an string has value or is empty
     * @param object string to check
     * @returns flag indicating if the string has value
     */
    public static hasValue(object: string): boolean {
        return this.isWorkableObject(object) && object.length > 0;
    }

    /**
     * Method for checking if an array has records in it
     * @param object array to check
     * @returns flag indicating if the array has records
     */
    public static hasValueArray(object: any[]): boolean {
        return this.isWorkableObject(object) && object.length > 0;
    }

}
