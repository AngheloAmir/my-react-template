/*
    The root reducer.
    This function is should only use be used by App.jsx since the App.js set up the context api
*/
import { ActionType } from "./ActionType";
import { ActionInterface } from "./Interface";
import { State } from './State';

export function RootReducer(state :State, action :ActionInterface) :State {
    switch( action.type ) {
        case ActionType.test:
            alert("Wow! The StateAPI (context api / redux) is WORKING!");
            return state;

        default:
            console.error("The Action was not provided in the RootReducer");
            return state;
    }
}
