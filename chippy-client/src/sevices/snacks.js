import api from "./api-config";

export const getAllSnacks = async () => {
  try {
    const resp = await api.get("/snacks");
    return resp.data;
  } catch (error) {
    throw error
  }
}

export const postSnack = async (snackData) => {
  try {
    const resp = await api.post('/snacks', {snacks: snackData });
    return resp.data;
  } catch (error) {
    throw error
  }
}

export const getSnack = async (id) => {
  try {
    const resp = await api.get(`/snacks/${id}`)
    return resp.data
  } catch (error) {
    throw error
  }
}

export const updateSnack = async (id, snack) => {
  try {
    const resp = await api.put(`/snacks/${id}`, { snacks: snack });
    return resp.data
  } catch (error) {
    throw error
  }
}

export const deleteSnack = async id => {
  try {
    const resp = await api.delete(`/snacks/${id}`)
    return resp.data
  } catch (error) {
    throw error
  }
}
