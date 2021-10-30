/*
    Defines the action that can be used to change the current state
*/
import { ActionInterface } from "./Interface"
import { ActionType } from "./ActionType"

export const Action = {
    Test: () :ActionInterface => {
        return {
            type: ActionType.test
        }
    },

}
