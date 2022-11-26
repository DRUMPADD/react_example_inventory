import axios from "axios";
export const getProviders = async () => await axios.get("http://localhost:5000/providers")

export const createProvider = async (provider) => await axios.post("http://localhost:5000/providers", provider)