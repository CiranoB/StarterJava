export type Action = { type: "ADD_TOKEN" | "ADD_TYPE"; payload: string }

export const addToken = (tokenLogin: string): Action => ({
  type: "ADD_TOKEN",
  payload: tokenLogin
})

export const addType = (typePerson: string): Action => ({
  type: "ADD_TYPE",
  payload: typePerson
})