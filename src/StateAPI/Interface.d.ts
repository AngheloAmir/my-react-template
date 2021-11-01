/*
    Contain interface that is used in the context api (state api)
*/
import { ActionType } from "./ActionType";
import { State } from './State'

export interface ActionInterface {
    /**
     * Tells the type of action to be performed. Refer to src/StateAPI/ActionType.ts
     * to add an available type of action to be performed
     */
    type        :ActionType;

    /**
     * The payload (Google about Flow design pattern)
     */
    payload?    :any;

    /**
     * An index of something
     */
    index?      :number;
}

export interface StateAPI {
    /**
     * Contains the global state using ContextAPI provided by React.js
     */
    state     :State;

    /**
     * Specify the action to performed that will change the current global state.
     * Import the Action from StateAPI first to use.
     * For example: dispatch( Action.Test() );
     */
    dispatch  :React.Dispatch< ActionInterface >;
}
