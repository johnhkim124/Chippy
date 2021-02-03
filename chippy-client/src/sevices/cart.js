import api from "./api-config";

export const getCart = async () => {
  try {
    const resp = await api.get(`/carts`)
    return resp.data;
  }
  catch(error) {
    throw(error)
  }
}

export const addToCart = async (snack_id) => {
  try {
    const resp = await api.post(`/carts/addToCart`, { snack_id: snack_id })
    return resp.data
  } catch(error) {
    throw(error)
  }
}
