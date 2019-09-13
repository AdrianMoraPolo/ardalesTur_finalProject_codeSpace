import { TAction } from "../actions/actionTypes";
import { IUser } from "../interfaceIUser";



const initialState: IUser = {
    name: "",
    lastname: "",
    date: "",
    _id: "",
    hour1: "",
    email: "",
    size: "",
    tel: "",
    dni: "",
    route: ""


};
export const bookingReducer = (
    state: IUser = initialState,
    action: TAction
): IUser => {
    if (action.type === "CREATE_BOOKING"){
        return action.booking;
    }
    return state;
};