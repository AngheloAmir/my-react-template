/*
    Contains all of the state api functionality so there is no need to 
    import each one by one
*/
import React from 'react';
import { StateAPI } from './Interface';
export type { StateAPI } from './Interface';
export { createDefaultState } from './State';
export { Action } from './Actions';

//this reducer is called only by the main app
export { RootReducer } from './RootReducer';

/**
 * Contains a context (store). Google about Flow Design Pattern for more info.
 */
//@ts-ignore - ignore the passed null vale since the context store does not have default value
export const contextStore = React.createContext<StateAPI>(null);
