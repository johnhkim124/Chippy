import api from "./api-config";

export const getAllSnacks = async () => {
  const resp = await api.get("/snacks");
  return resp.data;
}

export const postFood = async (snackData) => {
  const resp = await api.post('/snacks', snackData);
  return resp.data;
}
