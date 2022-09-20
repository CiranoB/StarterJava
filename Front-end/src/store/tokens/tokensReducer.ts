import { Action } from "./action";

export interface TokenState {
    tokenLogin: string
}

const initialState = {
    tokenLogin: ''
}

export const tokenReducer = (state: TokenState = initialState, action: Action) => {
    switch (action.type) {
        case "ADD_TOKEN": {
            return { tokenLogin: action.payload }
        }
        default: {
            return state;
        }
    }
}