import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fetchAction from 'src/app/store/actions/actions';
import * as fromRoot from 'src/app/store/reducers/reducers'
import { selectDashboardState } from '../store/selector/dashboard-selector';
import { IDashboardState } from '../store/state/state';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboardData: Observable<IDashboardState>;
  
  constructor(
    private store: Store<fromRoot.IState>
  ) {
   this.dashboardData = store.pipe(select(selectDashboardState))
 

  }

  ngOnInit() {
    this.store.dispatch(new fetchAction.FetchData());
    this.dashboardData.subscribe(container =>{
      console.log("Container printing", JSON.stringify(container));
    })
    
  }

  
}
