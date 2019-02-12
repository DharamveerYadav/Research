import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {  IDashboardState } from '../store/state/state';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  public getData(): Observable<IDashboardState> {
    return this.http.get('./assets/dashboardData.json').pipe(
      map((res: any) =>
        res
      )
    );
  }
}
