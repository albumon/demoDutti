import * as shipsReducer from './app.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface AppState {
    ships: shipsReducer.ShipState;
}

export const reducers = {
    ships: shipsReducer.reducer
};

export const getState = (state) => state;

export const getShipsState = createFeatureSelector<shipsReducer.ShipState>('ships');
export const getShips = createSelector(getShipsState, shipsReducer.getShips);
