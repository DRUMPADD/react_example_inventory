import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProvider, updateProvider } from '../../api/provider.api';

function FormUpdate() {
    const params = useParams();
    const navigate = useNavigate();
    const [provider, setProvider] = useState({
        name_prov: "",
        email: "",
        phone: "",
        prov: "",
    })

    const showProvider = async () => {
        if(params.id) {
            const response = await getProvider(params.id)
            setProvider(response.data);
        }
    }

    function handleChangeInput(event) {
        setProvider({
            ...provider,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmitProvider = async (event) => {
        event.preventDefault();
        try {
            const response = await updateProvider(params.id, provider);
            console.log(response.data);
            alert("Provided updated successfully.");
            navigate("/providers")
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        showProvider();
    }, [])

  return (
    <div>
    <form className="bg-zinc-600 rounded-md p-3 w-3/6 m-auto mt-9" onSubmit={handleSubmitProvider}>
        <h1 className="text-white text-3xl font-bold text-center">Create provider</h1>
        <div>
        <label className="block my-2 text-xl text-white"> Name </label>
        <input
            type="text"
            name="name_prov"
            onChange={handleChangeInput}
            value={provider.name_prov}
            className="bg-zinc-200 rounded-md p-2 text-xl w-full"
            placeholder="Provider name"
        />
        </div>
        <div>
        <label className="block my-2 text-xl text-white"> Email </label>
        <input
            type="text"
            name="email"
            onChange={handleChangeInput}
            value={provider.email}
            className="bg-zinc-200 rounded-md p-2 text-xl w-full"
            placeholder="Email"
        />
        </div>
        <div>
        <label className="block my-2 text-xl text-white"> Phone number </label>
        <input
            type="text"
            name="phone"
            onChange={handleChangeInput}
            value={provider.phone}
            className="bg-zinc-200 rounded-md p-2 text-xl w-full"
            placeholder="Phone number"
        />
        </div>
        <button type="submit" className="bg-green-500 text-white rounded-md w-full my-3 p-2 text-2xl">Save</button>
    </form>
    </div>
  )
}

export default FormUpdate