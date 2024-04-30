import { useLoaderData } from "react-router-dom";
import CategoryCard from "./CategoryCard";


const Home = () => {
    const categoryData = useLoaderData()
    console.log(categoryData)
    const { _id, image, short_description, subcategory_name } = categoryData;
    return (
        <div>
           
            {/* slider start */}
            <div className="carousel w-full my-12 h-80 md:h-[550px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://wallpapers.com/images/hd/boy-with-bicycle-digital-paint-drawing-247vdiwem6uazy3b.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/high-angle-view-human-hand-painting-white-paper-with-colorful-brushstroke_23-2148118022.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ytimg.com/vi/CVsmXBbu3co/maxresdefault.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://www.thesprucecrafts.com/thmb/QbbaJnPPvChMXW8FKors9caibaI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/your-first-painting-4159810-hero-47b40b950bc342ad973ed708b54b4452.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            {/* slider end */}
            <h3 className="text-2xl font-semibold text-center my-14">Art & Craft Categories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 container mx-auto">
                {
                    categoryData.map(category => <CategoryCard category={category} key={category._id}></CategoryCard>)
                }
            </div>


            {/* extra section */}
            
        </div>
    );
};

export default Home;