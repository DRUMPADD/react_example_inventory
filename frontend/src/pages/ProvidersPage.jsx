import { React, useEffect, useState } from "react";
import { getProviders, createProvider } from "../api/provider.api";
import ProvidersCard from "../components/ProvidersCard";

function ProvidersPage() {
    const [providers, setProviders] = useState([]);
    const [provider, setProvider] = useState({
        prov: "",
        name_prov: "",
        email: "",
        phone: "",
    });
    const loadProviders = async () => {
        const response = await getProviders();
        setProviders(response.data);
    }
    useEffect(() => {
        loadProviders();
    }, [])

    const validate = (value) => {
        return provider.name_prov !== "";
    }

    // const validate2 = (value) => {
    //     const data = Object.values(value);
    //     const obj_names = Object.keys(provider);
    //     var new_objects = {};
    //     data.find((el, i) => {
    //         if (i <= 3) {
    //             new_objects[el.name === obj_names[i] ? el.name : ""] =  el.value; 
    //             // return ;
    //         }
    //     });
    //     console.log(new_objects);

    //     return new_objects["name_prov"] === ""; 
    // }

    const submitProvider = async(event) => {
        event.preventDefault();
        if (validate(provider)) {
            setProvider({
                prov: "",
                name_prov: "",
                email: "",
                phone: "",
            })
            await createProvider(provider);
            loadProviders();
        } else {
            alert("The name is required");
        }

    }

    const onchangeInput = (event) => {
        setProvider({
            ...provider,
            [event.target.name]: event.target.value
        })
    }

  return (
    <div className="container m-auto">
      <form className="bg-zinc-600 rounded-md p-3 w-3/6 m-auto mt-9" onSubmit={submitProvider}>
        <h1 className="text-white text-3xl font-bold text-center">Create provider</h1>
        <div>
          <label className="block my-2 text-xl"> RFC(optional) </label>
          <input
            type="text"
            name="prov"
            onChange={onchangeInput}
            value={provider.prov}
            className="bg-zinc-200 rounded-md p-2 text-xl w-full"
            placeholder="RFC"
          />
        </div>
        <div>
          <label className="block my-2 text-xl"> Name </label>
          <input
            type="text"
            name="name_prov"
            onChange={onchangeInput}
            value={provider.name_prov}
            className="bg-zinc-200 rounded-md p-2 text-xl w-full"
            placeholder="Provider name"
          />
        </div>
        <div>
          <label className="block my-2 text-xl"> Email(optional) </label>
          <input
            type="text"
            name="email"
            onChange={onchangeInput}
            value={provider.email}
            className="bg-zinc-200 rounded-md p-2 text-xl w-full"
            placeholder="Email"
          />
        </div>
        <div>
          <label className="block my-2 text-xl"> Phone number optional </label>
          <input
            type="text"
            name="phone"
            onChange={onchangeInput}
            value={provider.phone}
            className="bg-zinc-200 rounded-md p-2 text-xl w-full"
            placeholder="Phone number"
          />
        </div>
        <button type="submit" className="bg-green-500 text-white rounded-md w-full my-3 p-2 text-2xl">Save</button>
      </form>

        <div className="grid grid-cols-3 gap-x-2">
            {providers.map(prov => (
            <ProvidersCard provider={prov} key={prov.prov} />
            ))}
        </div>
    </div>
  );
}

export default ProvidersPage;
