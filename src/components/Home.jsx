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
            <div className="my-12">
                <h2 className="font-extrabold text-2xl text-center my-6">FAQ</h2>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                    How long does it take to process and ship orders?
                    </div>
                    <div className="collapse-content">
                        <p>Orders typically take 1-2 business days to process before shipping. Shipping times vary depending on the destination and chosen shipping method.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                    Can I request a custom order for a specific item?
                    </div>
                    <div className="collapse-content">
                        <p>We welcome custom orders! Reach out to our team with details of your desired item, and we'll work with you to bring your vision to life.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                    What is your return policy?
                    </div>
                    <div className="collapse-content">
                        <p>We want you to be completely satisfied with your purchase. If for any reason you're not happy with your order, you may return it within 30 days for a full refund or exchange.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                    Do you provide any tips or tutorials for using your products?
                    </div>
                    <div className="collapse-content">
                        <p>Explore our blog and resources section for valuable tips, tutorials, and project ideas to inspire your creativity.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                    I'm having trouble navigating your website or placing an order, what should I do?
                    </div>
                    <div className="collapse-content">
                        <p>If you encounter any technical difficulties while browsing our website or placing an order, please clear your browser cache and cookies, or try using a different browser.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;