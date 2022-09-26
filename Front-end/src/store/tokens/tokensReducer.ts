import { Action } from "./action";

export interface TokenState {
    tokenLogin: string,
    typePerson: string
}

const initialState = {
    tokenLogin: '',
    typePerson: ''
}

export const tokenReducer = (state: TokenState = initialState, action: Action) => {
    switch (action.type) {
        case "ADD_TOKEN": {
            return { tokenLogin: action.payload, typePerson: state.typePerson }
        }
        case "ADD_TYPE": {
            return { typePerson: action.payload, tokenLogin: state.tokenLogin }
        }
        default: {
            return state;
        }
    }
}