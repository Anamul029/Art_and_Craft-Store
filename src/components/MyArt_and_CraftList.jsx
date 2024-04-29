
import { useLoaderData } from "react-router-dom";
import ArtCard from "./ArtCard";
import { useEffect, useState } from "react";


const MyArt_and_CraftList = () => {
    // const information=useLoaderData()
    const[update,setUpdate]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/craftItems')
        .then(res=>res.json())
        .then(data=>setUpdate(data))
    },[update])
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