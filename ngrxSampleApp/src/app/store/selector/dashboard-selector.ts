import { createSelector } from '@ngrx/store';
import { selectDashboardData, IState } from '../reducers/reducers';
import { IDashboardState } from '../state/state';

export const selectDashboardState = createSelector(
    selectDashboardData,
    (state: IDashboardState) => state
  );