import { combineReducers } from "redux";
import { tokenReducer } from "./tokenReducer";
import { nameReducer } from "./nameReducer";
import { bookingsReducer } from "./bookingsReducer";
import { contactsReducer } from "./contactsReducer";
import { IUser } from "../interfaceIUser";
import { IContact } from "../interfaceIContact";

export interface IGlobalState {
  token: string;
  name: string;
  bookings: IUser[];
  contacts: IContact[];
}

export const reducer = combineReducers<IGlobalState>({
  token: tokenReducer,
  name: nameReducer,
  bookings: bookingsReducer,
  contacts: contactsReducer
});
