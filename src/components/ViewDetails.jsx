import { useLoaderData, useParams } from "react-router-dom";


const ViewDetails = () => {
    const information = useLoaderData();
    const { _id } = useParams();
    console.log(_id);
    // console.log(info)
    const info = information.find(info => info._id == _id)
    // console.log(info)
    const { image, stockStatus, User_Email, User_Name, customization, description, price, processing_time, rating, subcategory } = info;


    return (
        <div className="card my-12 lg:card-side bg-blue-200 shadow-xl">
            <figure><img className="" src={image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">Subategory: {subcategory}</h2>
                <hr />
                <p>Description:{description}</p>
                <p>Painting and drawing are expressive arts that capture imagination, emotion, and beauty. With brushes or pencils, artists create vibrant worlds, evoking feelings and narratives through colors, lines, shapes, and textures.</p>
                <div className="flex justify-between my-3">
                    <h3 className="font-semibold">Price:<span>{price}</span></h3>
                    <h3 className="font-semibold">Status: <span>{stockStatus}</span></h3>
                </div>
                <hr />
                <div className="flex justify-between my-3">
                    <h3 className="font-semibold">Process time:{processing_time}</h3>
                    <h3 className="font-semibold">Customization:{customization}</h3>
                </div>
                <div className="flex justify-between my-3">
                    <h3 className="font-semibold">User Name:{User_Name}</h3>
                    <h3 className="font-semibold">User Email:{User_Email}</h3>
                </div>
                <h3 className="my-2 text-xl text-center">Rating:{rating}</h3>



            </div>
        </div>
    );
};

export default ViewDetails;