import { useLoaderData, useParams } from "react-router-dom";
import ArtCard from "./ArtCard";
import SubCategoryCard from "./SubCategoryCard";


const ViewDetails = () => {
    const information = useLoaderData();
    // console.log(information)

    const { subcategory_name } = useParams();
    console.log(subcategory_name);
    const info = information.filter(info => info.subcategory ===subcategory_name)
    console.log(info)
    const { image, stockStatus, User_Email, User_Name, customization, description, price, processing_time, rating, subcategory } = info;


    return (
        <div className="mt-16">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {
                
                    info.map(inf=><SubCategoryCard key={inf._id} inf={inf}></SubCategoryCard>)
                }
            </div>
          
        </div>
    );
};

export default ViewDetails;