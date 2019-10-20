import { MENU_PAGE, ERROR } from '../action/actionTypes'

export function menuPageReducer(state={}, action) {
  switch (action.type) {
    case MENU_PAGE:
      console.log('state',state,action)
      return { ...state, loanData: action.payload}
    case ERROR:
      return { err: action.payload }
    default:
      console.log('stte in default',state)
      return { ...state }
  }
}