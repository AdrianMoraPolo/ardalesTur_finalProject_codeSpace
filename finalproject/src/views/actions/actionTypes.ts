import { IUser } from "../interfaceIUser";
import { IContact } from "../interfaceIContact";

type TSetAction = {
    type: "SET_TOKEN";
    token: string;
};

type TSetName = {
    type: "SET_NAME";
    name: string;
};

type TSetBooking = {
    type: "SET_BOOKINGS";
    bookings: IUser[];
};

type TCreateBooking = {
    type: "CREATE_BOOKING";
    booking: IUser;
  };  

type TUpdateBooking = {
    type: "UPDATE_BOOKING";
    booking: IUser;
};

type TDeleteBooking = {
    type: "DELETE_BOOKING";
    bookingId: string;
};

type TDeleteContact = {
    type: "DELETE_CONTACT";
    contactId: string;
};

type TSetContact = {
    type: "SET_CONTACTS";
    contacts: IContact[];
};

type TCreateContact = {
    type: "CREATE_CONTACT";
    contact: IContact;
  };  







export type TAction = TSetAction | TSetName | TSetBooking | TUpdateBooking | TDeleteBooking | TCreateBooking | TCreateContact | TSetContact | TDeleteContact;
