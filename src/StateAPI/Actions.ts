/*
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
