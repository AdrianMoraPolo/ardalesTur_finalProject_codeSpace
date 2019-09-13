import { TAction } from "../actions/actionTypes";
import { IUser } from "../interfaceIUser";

const initialUser: IUser[] = [];

export const bookingsReducer = (
  state: IUser[] = initialUser,
  action: TAction
): IUser[] => {
  if (action.type === "SET_BOOKINGS") {
    return action.bookings;
  }

  if (action.type === "UPDATE_BOOKING") {
    const index = state.findIndex(b => b._id === action.booking._id);
    if (index !== -1) {
      state[index] = action.booking;
    }
    return [...state];
  }

  if (action.type === "DELETE_BOOKING") {
    const index = state.findIndex(b => b._id === action.bookingId);
    if (index !== -1) {
      state.splice(index, 1);
    }
    return [...state];
  }
  return state;
};

// state.push(action.user)
// return [...state];
