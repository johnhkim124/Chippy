import api from "./api-config";

export const getAllFlavors = async () => {
  const resp = await api.get('/flavors');
  return resp.data;
}

export const getFlavor = async (id) => {
  try {
    const resp = await api.get(`/flavors/${id}`)
    return resp.data
  } catch(error) {
    throw(error)
  }
}
