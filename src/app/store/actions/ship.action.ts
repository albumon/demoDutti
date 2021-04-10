import { Action } from '@ngrx/store';
import { Ship } from 'src/app/shared/models/ship.model';

export const LOAD_SHIPS = '[Ship] Load ships';
export const LOAD_SHIPS_SUCCESS = '[Ship] Load ships success';
export const LOAD_SHIPS_FAIL = '[Ship] Load ship fail';


export class LoadShip implements Action {
    readonly type = LOAD_SHIPS;
}

export class LoadShipSucess implements Action {
    readonly type = LOAD_SHIPS_SUCCESS;

    constructor(public payLoad: Ship[]) {
    }
}

export class LoadShipFail implements Action {
    readonly type = LOAD_SHIPS_FAIL;

    constructor(public payLoad: any) {
    }
}

export type ShipActions = LoadShip | LoadShipSucess | LoadShipFail;
