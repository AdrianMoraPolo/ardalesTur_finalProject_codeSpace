import { TAction } from "../actions/actionTypes";
import { IContact } from "../interfaceIContact";

const initialState: IContact = {
  name: "",
  lastname: "",
  _id: "",
  tel: "",
  textcontact: "",
  email: ""
};
export const contactReducer = (
  state: IContact = initialState,
  action: TAction
): IContact => {
  if (action.type === "CREATE_CONTACT") {
    return action.contact;
  }
  return state;
};
