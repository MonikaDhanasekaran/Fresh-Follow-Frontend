import React from 'react'
import { Link } from 'react-router-dom';

const ProductCard = ({ products = [] }) => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4 bg-white space-x-0.3">
                        {
                            products.map((row) => {
                                const { id, title, price, category, image } = row
                                return (
                                    <Link to={`/products/${id}`} className="ml-23 lg:w-1/4 md:w-1/2 p-4 w-full border border-opacity-50 mb-4 cursor-pointer">
                                        <a href='' className="block relative h-48 rounded overflow-hidden">
                                            <img alt="ecommerce" className="object-contain object-center w-full h-full block" src={image} />
                                        </a>
                                        <div className="mt-4">
                                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">{category}</h3>
                                            <h2 className="text-gray-900 title-font text-xl font-medium">{title}</h2>
                                            <p className="mt-1 text-md font-semibold">${price}</p>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductCard;