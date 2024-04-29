

const Update = () => {
    return (
        <div>
            <h4 className="text-2xl font-semibold text-center my-6">Update Data Here</h4>
            <form className="bg-blue-50 p-6 rounded-xl">
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
                </div>
                <button className="btn btn-primary bg-green-700 w-full my-4">Add to Craft</button>
            </form>
        </div>
    );
};

export default Update;