import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../components/Categories";
import Products from "../components/Products";


const Home = () => {
    const categories =useLoaderData()
    // console.log(categories)
    return (
        <div>
            <h2 className="text-[40px] font-bold text-[#0B0B0B] text-center">Explore Cutting-Edge Gadgets</h2>
            <div className="flex w-10/12 mx-auto gap-2 mt-4">
            <Categories categories={ categories}></Categories>
            <Outlet></Outlet>
          </div>
        </div>
    );
};

export default Home;