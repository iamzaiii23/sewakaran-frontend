import api from "./api";

// VALIDASI / UPDATE STATUS BOOKING
export const validateBooking = async (id, status) => {
  try {
    const response = await api.patch(
      `/admin/bookings/${id}`,
      { status }
    );

    return response.data;
  } catch (error) {
    console.error("validateBooking error:", error);
    throw error;
  }
};

// GET ALL BOOKINGS (ADMIN)
export const getAllBookings = async () => {
  try {
    const response = await api.get("/admin/bookings");
    return response.data;
  } catch (error) {
    console.error("getAllBookings error:", error);
    throw error;
  }
};