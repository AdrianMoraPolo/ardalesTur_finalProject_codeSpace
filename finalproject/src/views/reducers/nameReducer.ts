import {TAction} from '../actions/actionTypes';



const initialState: string = "";

export const nameReducer = (
   state: string = initialState,
   action: TAction
): string => {
   if (action.type === "SET_NAME"){
       return action.name
   }
   return state;
}