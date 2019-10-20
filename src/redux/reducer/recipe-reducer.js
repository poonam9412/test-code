import { RECIPE_VALUE, ERROR,Feedback_Value } from '../action/actionTypes'

export function recipeReducer(state={}, action) {
  switch (action.type) {
    case RECIPE_VALUE:
      return { ...state, receipe: action.payload}
    case ERROR:
      return { err: action.payload }
    default:
      return { ...state }
  }
}

export function FeedBackReducer(state={}, action) {
  switch (action.type) {
    case Feedback_Value:
      return { ...state, feeback: action.payload}
    case ERROR:
      return { err: action.payload }
    default:
      return { ...state }
  }
}