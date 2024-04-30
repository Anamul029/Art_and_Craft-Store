import Swal from "sweetalert2";


const AddCraftItem = () => {
    const handleAdd = (e) => {
        e.preventDefault();
        const image=e.target.image.value;
        const item_name=e.target.name.value;
        const subcategory=e.target.subcategory.value;
        const description=e.target.description.value;
        const price=e.target.price.value;
        const rating=e.target.rating.value;
        const customization=e.target.customization.value;
        const processing_time=e.target.processing_time.value;
        const stockStatus=e.target.stockStatus.value;
        const User_Email=e.target.User_Email.value;
        const User_Name=e.target.User_Name.value;

       const information={image,item_name,subcategory,description,price,rating,customization,processing_time,stockStatus,User_Email,User_Name}
       console.log(information);
    //    fetch
    fetch('https://art-and-craft-store-server-theta.vercel.app/craftItems',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(information)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.acknowledged===true){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Successfully Data Added",
                showConfirmButton: false,
                timer: 1500
            });
        }
    })

    }
    return (
        <div>
            <h2 className="text-2xl font-semibold text-blue-800 text-center my-5">Add Craft item Here</h2>
            <form onSubmit={handleAdd} className="bg-blue-50 p-6 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* input one */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input type="text" name="image" placeholder="image url" className="input input-bordered" required />
                    </div>
                    {/* input one */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Item name</span>
                        </label>
                        <input type="text" placeholder="image url" className="input input-bordered" required />
                    </div>
                    {/* input one */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">subcategory_Name</span>
                        </label>
                        <input type="text" placeholder="subcategory_Name" name="subcategory" className="input input-bordered" required />
                    </div>
                    {/* input one */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">short description</span>
                        </label>
                        <input type="text" placeholder="short description" name="description" className="input input-bordered" required />
                    </div>
                    {/* input one */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" placeholder="price" name="price" className="input input-bordered" required />
                    </div>
                    {/* input one */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">rating</span>
                        </label>
                        <input type="text" placeholder="rating" name="rating" className="input input-bordered" required />
                    </div>
                    {/* input one */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">customization</span>
                        </label>
                        <input type="text" placeholder="customization" name="customization" className="input input-bordered" required />
                    </div>
                    {/* input one */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">processing_time</span>
                        </label>
                        <input type="text" placeholder="processing_time" name="processing_time" className="input input-bordered" required />
                    </div>
                    {/* input one */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">stockStatus</span>
                        </label>
                        <input type="text" placeholder="stockStatus" name="stockStatus" className="input input-bordered" required />
                    </div>
                    {/* input one */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <input type="email" placeholder="User Email" name="User_Email" className="input input-bordered" required />
                    </div>
                    {/* input one */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input type="text" placeholder="User name" name="User_Name" className="input input-bordered" required />
                    </div>
                </div>
                <button className="btn btn-primary bg-green-700 w-full my-4">Add to Craft</button>
            </form>
        </div>
    );
};

export default AddCraftItem;