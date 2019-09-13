import { ActionCreator } from "redux";
import { TAction } from "./actionTypes";
import { IUser } from "../interfaceIUser";
import { IContact } from "../interfaceIContact";

export const setToken: ActionCreator<TAction> = (token: string) => ({
  type: "SET_TOKEN",
  token
});

export const setName: ActionCreator<TAction> = (name: string) => ({
  type: "SET_NAME",
  name
});


export const setBookings: ActionCreator<TAction> = (bookings: IUser[]) => ({
  type: "SET_BOOKINGS",
  bookings
});


export const pushBooking: ActionCreator<TAction> = (booking: IUser) => ({
  type: "CREATE_BOOKING",
  booking
});

export const DeleteBookingStore: ActionCreator<TAction> = (bookingId: string) => ({
  type: "DELETE_BOOKING",
  bookingId
});


export const updateBooking: ActionCreator<TAction> = (booking: IUser) => ({
  type: "UPDATE_BOOKING",
  booking
});

export const setContact: ActionCreator<TAction> = (contacts: IContact[]) => ({
  type: "SET_CONTACTS",
  contacts
});


export const pushContact: ActionCreator<TAction> = (contact: IContact) => ({
  type: "CREATE_CONTACT",
  contact
});

export const DeleteContactStore: ActionCreator<TAction> = (contactId: string) => ({
  type: "DELETE_CONTACT",
  contactId
});
