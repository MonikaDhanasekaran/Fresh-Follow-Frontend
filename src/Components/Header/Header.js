import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import { IoMdLogOut } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Img from "../../assets/fresh-follow.gif";

const Header = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/");
    }

    const handleAddtoCart = () => {
        navigate("/cart");
    }

    return (
        <div id="Header">
            <header className="text-gray-600 body-font shadow-lg">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a href='' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <Link to={"/home"} className='w-12 h-12 rounded-full'>
                            <img alt='' src={Img} />
                        </Link>
                        <Link to={"/home"} className="ml-3 text-xl">Fresh Follow</Link>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center cursor-pointer">
                        <Link to={"/home"} className="mr-5 hover:text-gray-900">Home</Link>
                        <Link to={"/products"} className="mr-5 hover:text-gray-900">Products</Link>
                        <Link to={"/contact"} className="mr-5 hover:text-gray-900">Contact</Link>
                    </nav>
                    <button className="inline-flex items-center bg-gray-100 border-0 py-3 px-3 focus:outline-none hover:bg-yellow-200 rounded text-base mt-4 md:mt-0" onClick={handleAddtoCart}>
                        Go to Cart &nbsp; <BsFillCartFill />
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                    &nbsp;
                    <button className="inline-flex items-center bg-red-100 border-0 py-3 px-3 focus:outline-none hover:bg-red-200 rounded text-base mt-4 md:mt-0" onClick={handleLogout}>
                        <IoMdLogOut /> Logout
                    </button>
                </div>
            </header>
        </div>
    )
}

export default Header;