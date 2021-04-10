import * as shipAvailableActions from '../actions/ship.action';
import { Ship } from 'src/app/shared/models/ship.model';

export interface ShipState {
    data: Ship[];
    loaded: boolean;
    loading: boolean;
    error: string;
}

export const initialState: ShipState = {
    data: [],
    loaded: false,
    loading: false,
    error: ''
};

export function reducer(state = initialState, action: shipAvailableActions.ShipActions) {
    switch (action.type) {
      case shipAvailableActions.LOAD_SHIPS: {
          return {
              ...state,
              loading: true,
          };
      }

      case shipAvailableActions.LOAD_SHIPS_SUCCESS: {
        const data = action.payLoad;
        return {
          ...state,
          loading: false,
          loaded: true,
          data
        };
      }

      case shipAvailableActions.LOAD_SHIPS_FAIL: {
        return {
          ...state,
          loading: false,
          loaded: false,
          error: action.payLoad
        };
      }

      default: {
          return state;
      }
    }
}

export const getShips = (state: ShipState) => state.data;
export const getShipsLoaded = (state: ShipState) => state.loaded;
export const getShipsLoading = (state: ShipState) => state.loading;
export const getShipsError = (state: ShipState) => state.error;
