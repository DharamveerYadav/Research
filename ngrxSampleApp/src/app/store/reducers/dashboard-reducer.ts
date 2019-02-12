import {  IDashboardState, INITIAL_STATE } from '../state/state';
import * as FetchAction from '../actions/actions';



export function dashboardReducer(state = INITIAL_STATE, action: FetchAction.All): IDashboardState {
    switch (action.type) {
        case FetchAction.FETCH_DATA_SUCCESS: {
          
            return {
                ...state,
                container: action.payload.container
            };
        }

        default: {
            return state;
        }
    }
}
