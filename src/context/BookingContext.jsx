import { createContext, useContext, useState } from "react";

const BookingContext = createContext();

export function BookingProvider({ children }) {
  const [bookings, setBookings] = useState([]);

  // SET ALL BOOKINGS (dari API nanti)
  const setAllBookings = (data) => {
    setBookings(data);
  };

  // ADD BOOKING
  const addBooking = (booking) => {
    setBookings((prev) => [...prev, booking]);
  };

  // UPDATE BOOKING STATUS
  const updateBooking = (id, newData) => {
    setBookings((prev) =>
      prev.map((b) =>
        b.id === id ? { ...b, ...newData } : b
      )
    );
  };

  // DELETE BOOKING
  const deleteBooking = (id) => {
    setBookings((prev) =>
      prev.filter((b) => b.id !== id)
    );
  };

  return (
    <BookingContext.Provider
      value={{
        bookings,
        addBooking,
        setAllBookings,
        updateBooking,
        deleteBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);

  if (!context) {
    throw new Error(
      "useBooking must be used inside BookingProvider"
    );
  }

  return context;
}