import  {RECIPE_VALUE} from './actionTypes'
import * as recipe from '../data/recipe.json'

    export const recipeAction = () => {
    return {
        type: RECIPE_VALUE,
        payload: recipe
    }
    }