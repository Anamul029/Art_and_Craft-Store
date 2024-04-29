
import { useLoaderData } from "react-router-dom";
import ArtCard from "./ArtCard";


const MyArt_and_CraftList = () => {
    const information=useLoaderData()
    console.log(information)
    return (
        <div>
            <h3>MyArt_and_CraftList</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {
                    information.map(info=><ArtCard key={info._id} info={info}></ArtCard>)
                }
            </div>
        </div>
    );
};

export default MyArt_and_CraftList;