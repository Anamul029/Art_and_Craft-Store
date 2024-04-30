import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const SubCategoryCard = ({inf}) => {
    const { image, _id, stockStatus, User_Email, User_Name, customization, description, price, processing_time, rating, subcategory } = inf;
     // delete data
     const handleDelete = (_id) => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            if (result.isConfirmed) {

                fetch(`https://art-and-craft-store-server-theta.vercel.app/craftItems/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            
                        }
                    })
            }
        });
    }

    return (
        <div className="card card-compact md:h-[600px] w-auto bg-yellow-200 shadow-xl">
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
                <div className="flex justify-around my-3">
                    <h3 className="font-semibold">Process time:{processing_time}</h3>
                    <h3 className="font-semibold">Customization:{customization}</h3>
                </div>
                <div className="flex flex-col md:flex-col lg:flex-row items-center justify-around my-3">
                    <h3 className="font-semibold my-3">Name:{User_Name}</h3>
                    <h3 className="font-semibold">Email:{User_Email}</h3>
                </div>
                <div className="flex justify-around">
                    <h3 className="font-semibold text-blue-900">Rating:{rating}</h3>
                    
                </div>
                <div className="card-actions justify-around">
                    {/* <button className="btn w-3/4 btn-primary"><Link to={`/details/${_id}`}>View Details</Link></button> */}
                    <button className="btn btn-primary bg-green-600"><Link to={`/update/${_id}`}>Update Data</Link></button>
                    <button onClick={() => handleDelete(_id)} className="btn btn-primary bg-red-600">Delete Data</button>
                </div>
            </div>
        </div>
    );
};

export default SubCategoryCard;