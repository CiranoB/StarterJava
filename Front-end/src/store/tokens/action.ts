export type Action = {type: "ADD_TOKEN"; payload: string}

export const addToken = (tokenLogin: string): Action => ({
    type: "ADD_TOKEN",
    payload: tokenLogin
  })