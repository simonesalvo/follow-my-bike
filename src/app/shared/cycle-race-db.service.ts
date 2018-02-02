import { Injectable } from '@angular/core';
import { LISTCYCLERACE } from '../cycleRace-mock';
import { CycleRace } from '../CycleRace.model';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromAppReducer from '../store/app.reducers';
import * as fromAppListAction from '../store/app.actions';

@Injectable()
export class CycleRaceDbService {

  constructor(private store: Store<fromAppReducer.State>) { }

  insertRace(cycleRace: CycleRace) {
    let raceAdded: CycleRace = {
      stage: cycleRace.stage,
      date: new Date(cycleRace.date),
      comment: cycleRace.comment.replace('#', '')
    };

    LISTCYCLERACE.push(cycleRace);

    this.store.dispatch(new fromAppListAction.InsertRace(cycleRace));
  }

}
