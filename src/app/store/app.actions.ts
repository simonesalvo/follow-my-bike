import { Action } from '@ngrx/store';
import { CycleRace } from '../CycleRace.model';

export const GO_TO_HOME = 'GO_TO_HOME';
export const GO_TO_INSERT = 'GO_TO_INSERT';
export const GO_TO_VIEW = 'GO_TO_VIEW';
export const INSERT_RACE = 'INSERT_RACE';
export const RESET_RACE = 'RESET_RACE';
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

export class GoToHome implements Action {
    readonly type = GO_TO_HOME;

}

export class GoToInsert implements Action {
    readonly type = GO_TO_INSERT;

}

export class GoToView implements Action {
    readonly type = GO_TO_VIEW;

}

export class InsertRace implements Action {
    readonly type = INSERT_RACE;

    constructor(public payload: CycleRace) { }
}

export class ResetRace implements Action {
    readonly type = RESET_RACE;
}

export class ChangeLanguage implements Action {
    readonly type = CHANGE_LANGUAGE;

    constructor(public payload: string) { }
}

export type AppListActions = GoToHome | GoToInsert | GoToView |
    InsertRace | ResetRace | ChangeLanguage; 