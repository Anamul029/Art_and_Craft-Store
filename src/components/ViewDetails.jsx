import { useLoaderData, useParams } from "react-router-dom";


const ViewDetails = () => {
    const information=useLoaderData();
    const {_id}=useParams();
    console.log(_id);
    // console.log(info)
    const info = information.find(info => info._id == _id)
    console.log(info)

    return (
        <div>
            <h2>Details viewed</h2>
        </div>
    );
};

export default ViewDetails;