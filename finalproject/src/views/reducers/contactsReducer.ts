import { TAction } from "../actions/actionTypes";
import { IContact } from "../interfaceIContact";

const initialContact: IContact[] = [];

export const contactsReducer = (
  state: IContact[] = initialContact,
  action: TAction
): IContact[] => {
  if (action.type === "SET_CONTACTS") {
    return action.contacts;
  }

  if (action.type === "DELETE_CONTACT") {
    const index = state.findIndex(c => c._id === action.contactId);
    if (index !== -1) {
      state.splice(index, 1);
    }
    return [...state];
  }
  return state;
};

// state.push(action.user)
// return [...state];
