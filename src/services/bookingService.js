import api from "./api";

// SUBMIT BOOKING
export const submitBooking = async (
  data
) => {

  const response =
    await api.post("/bookings", data);

  return response.data;
};

// FETCH STATUS BOOKING
export const getBookings = async () => {

  const response =
    await api.get("/bookings");

  return response.data;
};

// UPLOAD PAYMENT
export const uploadPaymentProof =
  async (formData) => {

    const response =
      await api.post(
        "/payments/upload",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

    return response.data;
  };