import axios from "axios";
export const getProviders = async () => await axios.get("http://localhost:5000/providers")

export const getProvider = async (id) => await axios.get(`http://localhost:5000/providers/${id}`)

export const createProvider = async (provider) => await axios.post("http://localhost:5000/providers", provider)

export const updateProvider = async (id, provider) => {
    return await axios.put(`http://localhost:5000/providers/${id}`, {
        name_prov: provider.name_prov,
        email: provider.email,
        phone: provider.phone,
    })
}
export const deleteProvider = async (id) => await axios.delete(`http://localhost:5000/providers/${id}`)