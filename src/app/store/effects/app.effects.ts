import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, mergeMap, map, switchMap } from 'rxjs/operators';
import { ShipsService } from 'src/app/services/ships/ships.service';

import * as ShipActions from '../actions/ship.action';

@Injectable()
export class ShipEffects {
    constructor(
        private action$: Actions,
        private shipService: ShipsService
    ) {}

    // Load ships
    loadShips$ = createEffect( () => this.action$.pipe(
        ofType(ShipActions.LOAD_SHIPS),
        switchMap(() => this.shipService.getShips()
        .pipe(
            map(response => {
                return new ShipActions.LoadShipSucess(response);
            },
            catchError(error => of(new ShipActions.LoadShipFail(error))))
        ))
    ));
}
