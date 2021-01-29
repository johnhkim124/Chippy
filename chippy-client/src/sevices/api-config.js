import axios from "axios";

const baseURL = "http://localhost:3001"

const api = axios.create({
  baseURL: basURL
})

export default api
