// import { useLoaderData } from "react-router-dom";
import AllCraftCard from "../AllCraftCard";
import { useEffect, useState } from "react";


const All_Art_and_Craft_Item = () => {
    // const information = useLoaderData()
    const[update,setUpdate]=useState([])
    useEffect(()=>{
        fetch('https://art-and-craft-store-server-theta.vercel.app/craftItems')
        .then(res=>res.json())
        .then(data=>setUpdate(data))
    },[update])
    // console.log(information)
    return (
        <div>
            <h2 className="text-xl font-semibold text-center my-8 md:my-16">All Craft Card is Here.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                {
                    update.map(info => <AllCraftCard key={info._id} info={info}></AllCraftCard>)
                }
            </div>

        </div>
    );
};

export default All_Art_and_Craft_Item;