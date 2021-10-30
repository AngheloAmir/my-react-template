/*
    Describe the application main (global) state using the context API
*/
export interface State {
    text: string; 
}

export function createDefaultState() :State {
    return {
        text: "Hello there",
    }
}
