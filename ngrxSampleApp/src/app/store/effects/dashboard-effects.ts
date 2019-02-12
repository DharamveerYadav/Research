import { map, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import * as fetchAction from '../actions/actions';
import { DashboardService } from 'src/app/service/dashboard.service';

@Injectable()
export class UserFetchEffects {
    @Effect()
    dashboard$: Observable<Action> = this.actions$.pipe(
        ofType(fetchAction.FETCH_DATA),
        switchMap(() => this.dashboardService.getData().pipe(
            map(data => new fetchAction.FetchDataSuccess(data))
        )),
    );



    constructor(
        private actions$: Actions,
        private dashboardService: DashboardService
    ) {

    }
}