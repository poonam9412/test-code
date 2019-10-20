import  {MENU_PAGE,ERROR,Feedback_Value} from './actionTypes'
import * as community from '../data/community.json'
import axios from 'axios'
    export const communityAction = ()  => {
    return {
        type: MENU_PAGE,
        payload: community
    }  
    }

    export const FeedbackAction = (feedback) => dispatch => {

        axios.get('/',
        {
            params: {
                feedback
            }})
        .then(res => dispatch({
            type: Feedback_Value,
            payload: res
    }),
        
        
        )
        .catch(err => dispatch({ type: ERROR, payload: err }))
    }