import api from "./api";

// VALIDASI BOOKING
export const validateBooking =
  async (id, status) => {

    const response =
      await api.patch(
        `/admin/bookings/${id}`,
        {
          status,
        }
      );

    return response.data;
  };

// FETCH ALL BOOKINGS
export const getAllBookings =
  async () => {

    const response =
      await api.get("/admin/bookings");

    return response.data;
  };