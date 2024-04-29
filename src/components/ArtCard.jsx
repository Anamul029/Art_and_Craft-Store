import { Link } from "react-router-dom";


const ArtCard = ({ info }) => {
    const { image, _id, stockStatus, User_Email, User_Name, customization, description, price, processing_time, rating, subcategory } = info;
    console.log(info)
    return (
        
        <div className="card card-compact md:h-[500px] w-auto bg-yellow-200 shadow-xl">
            <figure><img className="md:h-[350px] p-4 rounded-xl md:w-[400px]" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="items-center mx-auto">
                    {/* <h2 className="card-title">Description:{description}</h2> */}
                    <h2 className="text-xl font-semibold">Subcategory:{subcategory}</h2>
                </div>

                <div className="flex justify-around my-3">
                    <h3 className="font-semibold">Price:<span>{price}</span></h3>
                    <h3 className="font-semibold">Status: <span>{stockStatus}</span></h3>
                </div>
                <div className="card-actions justify-center">
                    <button className="btn w-3/4 btn-primary"><Link to={`/details/${_id}`}>View Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ArtCard;