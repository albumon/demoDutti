import { Injectable } from '@angular/core';


@Injectable()
export class LocalStorageService {
    // Variables
    private localStorage: Storage;

    constructor() {
        // Get the LocalStorage instance
        this.localStorage = window.localStorage;
    }

    /**
     * Method for retrieving the value in the LocalStorage for a
     * given key
     * @param key key of the LocalStorage value
     * @returns the value stored in the LocalStorage
     */
    get(key: string): any {
        let localStorageValue: any = null;
        if (this.isLocalStorageSupported) {
            localStorageValue = JSON.parse(this.localStorage.getItem(key));
        }
        return localStorageValue;
    }

    /**
     * Method for setting value into LocalStorage
     * @param key key for the LocalStorage
     * @param value value to be stored
     * @returns flag indicating if value was setted correctly
     */
    set(key: string, value: any): boolean {
        let saved = false;
        if (this.isLocalStorageSupported) {
            this.localStorage.setItem(key, JSON.stringify(value));
            saved = true;
        }
        return saved;
    }

    /**
     * Method for removing an item from the LocalStorage
     * @param key key of the LocalStorage
     * @returns flag indicating if value was removed correctly
     */
    remove(key: string): boolean {
        let removed = false;
        if (this.isLocalStorageSupported) {
            this.localStorage.removeItem(key);
            removed = true;
        }
        return removed;
    }

    /**
     * Getter that indicates if LocalStorage is
     * supported in the browser
     */
    get isLocalStorageSupported(): boolean {
        return !!this.localStorage;
    }
}
