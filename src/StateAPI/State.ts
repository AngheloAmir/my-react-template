/*
*/
import React from 'react';

export const contextStore = React.createContext({});

export interface State {
    text: string; 
}

export function createDefaultState() :State {
    return {
        text: "Hello there",
    }
}
