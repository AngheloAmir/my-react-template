/*
*/
import React from 'react';

//just a dummy to fix a typescript error
const dummy :any = {};

export const contextStore = React.createContext(dummy);

export interface State {
    text: string; 
}

export function createDefaultState() :State {
    return {
        text: "Hello there",
    }
}
