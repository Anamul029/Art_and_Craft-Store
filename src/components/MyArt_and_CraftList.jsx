
// import { useLoaderData } from "react-router-dom";
import ArtCard from "./ArtCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";


const MyArt_and_CraftList = () => {
    // const information=useLoaderData()
    const {user}=useContext(AuthContext)
    const[update,setUpdate]=useState([])
    useEffect(()=>{
        fetch(`https://art-and-craft-store-server-theta.vercel.app/craftItems-user/${user.email}`)
        .then(res=>res.json())
        .then(data=>setUpdate(data))
    },[update,user])
    // console.log(information)
    return (
        <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {
                    update.map(info=><ArtCard key={info._id} info={info}></ArtCard>)
                }
            </div>
        </div>
    );
};

export default MyArt_and_CraftList;