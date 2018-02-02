import * as AppAction from '../store/app.actions';
import { CycleRace } from '../CycleRace.model';
import { LISTCYCLERACE } from '../cycleRace-mock';

export interface State {
    position: string,
    cycleRaceForm: CycleRace,
    language: string
}

const initialState: State = {
    position: 'home',
    cycleRaceForm: {
        stage: '',
        date: new Date(),
        comment: ''
    },
    language: 'en'
};

export function AppListReducer(state = initialState, action: AppAction.AppListActions) {
    switch (action.type) {
        case AppAction.GO_TO_HOME:
            return {
                ...state,
                position: 'home'
            };
        case AppAction.GO_TO_INSERT:
            return {
                ...state,
                position: 'insert'
            };
        case AppAction.GO_TO_VIEW:
            return {
                ...state,
                position: 'view'
            };
        case AppAction.INSERT_RACE:
            return {
                ...state,
                cycleRaceForm: action.payload
            };
        case AppAction.RESET_RACE:
            return {
                ...state
            };
        case AppAction.CHANGE_LANGUAGE:
            return {
                ...state,
                language: action.payload
            };
        default:
            return state;
    }
}