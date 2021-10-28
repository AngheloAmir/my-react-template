/*
    Contains all of the state api functionality so there is no need to 
    import each one by one
*/

export type { StateAPI } from './Interface';

export { contextStore, createDefaultState } from './State';
export { Action } from './Actions';

//this reducer is called only by the main app
export { RootReducer } from './RootReducer';
