
import { dashboardReducer} from './dashboard-reducer'
import { IDashboardState} from '../state/state'
import { createFeatureSelector } from '@ngrx/store';



export interface IState {
    dashboard: IDashboardState;
}

export const reducers = {
    dashboard: dashboardReducer
}

export const selectDashboardData = createFeatureSelector<IDashboardState>(
    'dashboard'
  );

 