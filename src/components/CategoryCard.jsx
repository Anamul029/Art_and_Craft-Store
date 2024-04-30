import { Link } from "react-router-dom";


const CategoryCard = ({ category }) => {
    const { image, short_description, subcategory_name } = category;
    console.log(category)
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className="md:w-[500px] md:h-[400px]" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{subcategory_name}</h2>
                <p>{short_description}</p>
                <div className="card-actions">
                    <Link className="w-full" to={`/details/${subcategory_name}`}> <button className="btn w-full btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;