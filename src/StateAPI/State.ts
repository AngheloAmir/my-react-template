/*
    Describe the application main (global) state using the context API
*/
export interface State {
    /**
     * The text used to determine the current text displayed in the application.
     * @type string
     * @default "Hello there"
     */
    text: string; 
}

export function createDefaultState() :State {
    return {
        text: "Hello there",
    }
}
