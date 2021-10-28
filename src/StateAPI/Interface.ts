/*
*/
import { ActionType } from "./ActionType";
import { State } from './State'

export interface ActionInterface {
    type        :ActionType;
    payload?    :any;
    index?      :number;
}

export interface StateAPI {
    state     :State;
    dispatch  :React.Dispatch< ActionInterface >;
}
