import React from 'react'
import Img from "../../assets/shopping-cart-loader.gif";
import { useNavigate } from 'react-router-dom';

const Hero = () => {

    const navigate = useNavigate();
    
    const handleOrderNowButton = () => {
        navigate("/products")
    }

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Fresh Follow</h1>
                        <p className="mb-8 leading-relaxed">Grab Your Favourite Styles Ranging from Clothing, Footwear And Accessories, Now at Fresh Follow. Refresh Your Style With Latest Brands At Best Price From Fresh Follow Only For You. Shop Now! Big Brands. Exclusive 1st Order Offer. Prepaid offers. Biggest Sale Of The Year.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg" onClick={handleOrderNowButton}>Order Now</button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded-full" alt="hero" src={Img} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero;