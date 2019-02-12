
import {  IDashboardState } from '../state/state'
import { Action } from '@ngrx/store/src/models';

export const FETCH_DATA = '[UserProfileData] fetch dashboard data';
export const FETCH_DATA_SUCCESS = '[UserProfileData] fetch dashboard data success';

export class FetchData implements Action {
    readonly type = FETCH_DATA;
    constructor() { }
}

export class FetchDataSuccess implements Action {
    readonly type = FETCH_DATA_SUCCESS;
    constructor(public payload: IDashboardState) {

    }
}

export type All
    = FetchData | FetchDataSuccess;
