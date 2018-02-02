import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromAppReducer from '../store/app.reducers';
import * as fromAppListAction from '../store/app.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(private store: Store<fromAppReducer.State>) {
  }

  ngOnInit() {
  }

  onClickHome() {
    this.store.dispatch(new fromAppListAction.GoToHome());
  }

  onClickInsert() {
    this.store.dispatch(new fromAppListAction.GoToInsert());
  }

  onClickView() {
    this.store.dispatch(new fromAppListAction.GoToView());
  }

}
