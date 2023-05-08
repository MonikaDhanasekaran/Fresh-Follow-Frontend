import React, { useEffect, useState } from 'react';
import { BsFillCartFill } from "react-icons/bs";
import { IoMdLogOut } from "react-icons/io";
import ProductCard from '../../Components/ProductCard';
import Footer from "../../Components/Footer/Footer";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Img from "../../assets/fresh-follow.gif";
import { toast } from 'react-hot-toast';
import "./products.css";

const Products = () => {

  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const handleAddtoCart = () => {
    navigate("/cart");
  }

  const handleLogout = () => {
    navigate("/");
  }

  const getProducts = async () => {
    try {
      const response = await axios.get("https://my-fresh-follow-app.onrender.com/freshFollow/product/get", {
        headers: {
          accesstoken: localStorage.getItem("token"),
        },
      });
      setProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  const handleProductSearch = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`https://my-fresh-follow-app.onrender.com/freshFollow/product/searchProduct/${key}`, {
        headers: {
          accesstoken: localStorage.getItem("token"),
        }
      });
      result = await result.json()
      if (result) {
        setProducts(result);
      }
    } else {
      getProducts();
    }
  }

  const handleReference = () => {
    toast("ForPayment : Use Card Number as 4242 4242 4242 4242", {
      icon: '😀',
    });
  }

  return (
    <div>
      <header className="text-gray-600 body-font shadow-lg">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a href='' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Link to={"/home"} className='w-12 h-12 rounded-full'>
              <img alt='' src={Img} />
            </Link>
            <Link to={"/home"} className="ml-3 text-xl">Fresh Follow</Link>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link to={"/home"} className="mr-5 hover:text-gray-900">Home</Link>
            <Link to={"/contact"} className="mr-5 hover:text-gray-900">Contact</Link>
            <Link to={"/products"} className="mr-5 hover:text-gray-900">Products</Link>
            <Link onClick={handleReference} to={"/products"}>For Reference</Link>
            <form>
              <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none" id='searchIcon'>
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
                <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 border-none rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                dark:focus:border-blue-500" onChange={handleProductSearch} placeholder="Search Products" required />
              </div>
            </form>
          </nav>
          <button className="inline-flex items-center bg-yellow-100 border-0 py-3 px-3 focus:outline-none hover:bg-yellow-200 rounded text-base mt-4 md:mt-0" onClick={handleAddtoCart}>
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
      <div id="Product">
        <div className="flex flex-col text-center w-full">
          <h2 className="mt-10 text-xs text-red-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">ALL PRODUCTS</h1>
        </div>
        {
          products.length > 0 ? <ProductCard products={products} />
            :
            <div> Loading... </div>
        }
      </div>
      <Footer />
    </div>
  )
}

export default Products;
