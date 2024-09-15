import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext';
import { Link } from 'react-router-dom';

const ProductDisplay = (props) => {
    const { product } = props;
    
    // Get addTocart function from ShopContext
    const { addTocart } = useContext(ShopContext);

    return (
        <div className="font-sans">
            <div className="p-4 lg:max-w-5xl max-w-lg mx-auto">
                <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-6 max-lg:gap-12">

                    <div className="w-full lg:sticky top-0 sm:flex gap-2">
                        <div className="sm:space-y-3 w-16 max-sm:w-12 max-sm:flex max-sm:mb-4 max-sm:gap-4">
                            <img src={product.image} alt="Product1" className="w-full cursor-pointer rounded-md outline" />
                            <img src={product.image} alt="Product2" className="w-full cursor-pointer rounded-md" />
                            <img src={product.image} alt="Product3" className="w-full cursor-pointer rounded-md" />
                            <img src={product.image} alt="Product4" className="w-full cursor-pointer rounded-md" />
                        </div>
                        <img src={product.image} alt="Product" className="w-4/5 rounded-md object-cover" />
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <p className="text-gray-800 text-xl font-bold">${product.new_price}</p>
                            <p className="text-gray-400 text-xl">
                                <strike>${product.old_price}</strike> 
                                <span className="text-sm ml-1.5">Tax included</span>
                            </p>
                        </div>

                        <div className="flex space-x-2 mt-4">
                            {/* Ratings */}
                            {[...Array(4)].map((_, idx) => (
                                <svg key={idx} className="w-5 fill-blue-600" viewBox="0 0 14 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                            ))}
                            <svg className="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-gray-800">Sizes</h3>
                            <div className="flex flex-wrap gap-4 mt-4">
                                {['SM', 'MD', 'LG', 'XL'].map(size => (
                                    <button key={size} type="button" className="w-10 h-10 border-2 hover:border-blue-600 font-semibold text-sm rounded-full flex items-center justify-center shrink-0">
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Add to Cart Button */}
                        <Link to={'/cart'}><button
                            onClick={() => addTocart(product.id)} // Adding product to cart
                            type="button"
                            className="w-full mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-md">
                            Add to cart
                        </button></Link>

                        {/* About the item */}
                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-gray-800">About the item</h3>
                            <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
                                <li>A gray t-shirt is a wardrobe essential because it is so versatile.</li>
                                <li>Available in a wide range of sizes, from extra small to extra large.</li>
                                <li>Easy to care for, usually machine-washable and dried on low heat.</li>
                                <li>You can add your own designs, paintings, or embroidery to personalize it.</li>
                            </ul>
                        </div>

                        {/* Reviews */}
                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-gray-800">Reviews(10)</h3>
                            <div className="space-y-3 mt-4">
                                {/* Reviews details */}
                                {[{ score: 5, percent: 66 }, { score: 4, percent: 33 }, { score: 3, percent: 16 }, { score: 2, percent: 8 }, { score: 1, percent: 6 }].map((review, index) => (
                                    <div key={index} className="flex items-center">
                                        <p className="text-sm text-gray-800 font-bold">{review.score}.0</p>
                                        <svg className="w-5 fill-blue-600 ml-1.5" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <div className="bg-gray-300 rounded-md w-full h-2 ml-3">
                                            <div className="h-full rounded-md bg-blue-600" style={{ width: `${review.percent}%` }}></div>
                                        </div>
                                        <p className="text-sm text-gray-800 font-bold ml-3">{review.percent}%</p>
                                    </div>
                                ))}
                            </div>

                            <button type="button" className="w-full mt-8 px-6 py-2.5 border border-blue-600 bg-transparent text-gray-800 text-sm font-semibold rounded-md">
                                Read all reviews
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDisplay;
