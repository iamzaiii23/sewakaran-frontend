import api from "./api";

// FETCH ALL PRODUCTS
export const getProducts = async () => {
  const response = await api.get("/products");
  return response.data;
};

// FETCH PRODUCT DETAIL BY ID
export const getProductById = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

// FETCH PRODUCT AVAILABILITY CALENDAR
export const getProductCalendar = async (id) => {
  const response = await api.get(`/products/${id}/calendar`);
  return response.data;
};