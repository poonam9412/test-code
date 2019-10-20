import { MENU_PAGE, ERROR } from '../action/actionTypes'

export function menuPageReducer(state={}, action) {
  switch (action.type) {
    case MENU_PAGE:
      return { ...state, loanData: action.payload}
    case ERROR:
      return { err: action.payload }
    default:
      return { ...state }
  }
}