import {
  createContext,
  useContext,
  useState,
} from "react";

const BookingContext = createContext();

export function BookingProvider({
  children,
}) {

  const [bookings, setBookings] =
    useState([]);

  // ADD BOOKING
  const addBooking = (booking) => {

    setBookings((prev) => [
      ...prev,
      booking,
    ]);
  };

  return (
    <BookingContext.Provider
      value={{
        bookings,
        addBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  return useContext(BookingContext);
}