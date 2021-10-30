/*
    Contains all of the state api functionality so there is no need to 
    import each one by one
*/
import React from 'react';

//just a dummy to fix a typescript error
const dummy :any = {};
export const contextStore = React.createContext(dummy);

export type { StateAPI } from './Interface';

export { createDefaultState } from './State';
export { Action } from './Actions';

//this reducer is called only by the main app
export { RootReducer } from './RootReducer';
