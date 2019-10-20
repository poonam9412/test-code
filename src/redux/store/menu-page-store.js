import { combineReducers } from 'redux'
import { menuPageReducer } from '../reducer/menu-page-reducer'
import { recipeReducer, FeedBackReducer } from '../reducer/recipe-reducer'
export default combineReducers({
    menuPageReducer,
    recipeReducer,
    FeedBackReducer
})