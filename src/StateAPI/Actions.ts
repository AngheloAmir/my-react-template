/*
    Defines the action that can be used to change the current state
*/
import { ActionInterface } from "./Interface"
import { ActionType } from "./ActionType"

/**
 * Contains all of the action can be used to change the current app state along with the dispatch from StateAPI. 
 * For example: dispatch( Action.Test() )
 */
export const Action = {
    /**
    * An action use for testing if the ContextAPI works
    * @param
    * void
    */
    Test: () :ActionInterface => {
        return {
            type: ActionType.test
        }
    },

}
