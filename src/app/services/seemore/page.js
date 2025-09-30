"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import ProductCard from "../components/ProductCard/page";

const products = [
  {
    id: 1,
    name: "10 Basket of Tomatoes",
    image: "/images/tomatoes.png",
    rating: 4.7,
    reviews: 120,
    description:
      "Freshly harvested tomatoes from the farm in the last one week",
    location: "📍 Abuja, Gwarimpa street",
    price: 20000,
  },
  {
    id: 2,
    name: "Spinach",
    image: "/images/vegetables.png",
    rating: 4.7,
    reviews: 80,
    description: "Freshly harvested spinach from the farm in the last one week",
    location: "📍 Abuja, Gwarimpa street",
    price: 20000,
  },
  {
    id: 3,
    name: "Bananas",
    image: "/images/apple.png",
    rating: 4.7,
    reviews: 150,
    description: "Freshly harvested bananas from the farm in the last one week",
    location: "📍 Abuja, Gwarimpa street",
    price: 20000,
  },
  {
    id: 4,
    name: "Apples",
    image: "/images/app.png",
    rating: 4.7,
    reviews: 200,
    description: "Freshly harvested apples from the farm in the last one week",
    location: "📍 Abuja, Gwarimpa street",
    price: 20000,
  },
  {
    id: 4,
    name: "Apples",
    image: "/images/app.png",
    rating: 4.7,
    reviews: 200,
    description: "Freshly harvested apples from the farm in the last one week",
    location: "📍 Abuja, Gwarimpa street",
    price: 20000,
  },
  {
    id: 4,
    name: "Apples",
    image: "/images/app.png",
    rating: 4.7,
    reviews: 200,
    description: "Freshly harvested apples from the farm in the last one week",
    location: "📍 Abuja, Gwarimpa street",
    price: 20000,
  },
  {
    id: 3,
    name: "Bananas",
    image: "/images/apple.png",
    rating: 4.7,
    reviews: 150,
    description: "Freshly harvested bananas from the farm in the last one week",
    location: "📍 Abuja, Gwarimpa street",
    price: 20000,
  },
  {
    id: 1,
    name: "10 Basket of Tomatoes",
    image: "/images/tomatoes.png",
    rating: 4.7,
    reviews: 120,
    description:
      "Freshly harvested tomatoes from the farm in the last one week",
    location: "📍 Abuja, Gwarimpa street",
    price: 20000,
  },
  {
    id: 1,
    name: "10 Basket of Tomatoes",
    image: "/images/tomatoes.png",
    rating: 4.7,
    reviews: 120,
    description:
      "Freshly harvested tomatoes from the farm in the last one week",
    location: "📍 Abuja, Gwarimpa street",
    price: 20000,
  },

  {
    id: 1,
    name: "10 Basket of Tomatoes",
    image: "/images/tomatoes.png",
    rating: 4.7,
    reviews: 120,
    description:
      "Freshly harvested tomatoes from the farm in the last one week",
    location: "📍 Abuja, Gwarimpa street",
    price: 20000,
  },
  {
    id: 1,
    name: "10 Basket of Tomatoes",
    image: "/images/tomatoes.png",
    rating: 4.7,
    reviews: 120,
    description:
      "Freshly harvested tomatoes from the farm in the last one week",
    location: "📍 Abuja, Gwarimpa street",
    price: 20000,
  },
  {
    id: 1,
    name: "10 Basket of Tomatoes",
    image: "/images/tomatoes.png",
    rating: 4.7,
    reviews: 120,
    description:
      "Freshly harvested tomatoes from the farm in the last one week",
    location: "📍 Abuja, Gwarimpa street",
    price: 20000,
  },
];

const page = () => {
  return (
    <div>
      <section className=' flex gap-[10px] ml-6 my-[20px] items-center  px-[16px]'>
        <Link
          href='/services'
          className=' border-2 border-black rounded-full w-fit h-fit p-3 '
        >
          <Icon icon={"qlementine-icons:arrow-left-16"} />
        </Link>
        <h1>Phones & Accessories</h1>
      </section>
      {/* Location + Search */}
      <div className='flex items-center gap-3 flex-1 max-w-2xl ml-6  p-[16px]'>
        <select className=' rounded-[8px] px-3 py-2 text-sm text-[#000000] focus:outline-none'>
          <option className=' rounded-[8px] bg-red-600 p-[16px] w-[150px]'>
            All Nigeria
          </option>
          <option>Lagos</option>
          <option>Abuja</option>
          <option>Kano</option>
        </select>

        <div className='flex items-center flex-1 border  rounded-[8px] px-2 py-2 bg-[#FFF] w-[522px] h-[56px] text-[#555555] font-medium'>
          <Icon icon='iconoir:search' className='h-5 w-5 text-gray-500' />
          <input
            type='text'
            placeholder='Search Product'
            className='flex-1 bg-transparent outline-none px-2 text-sm'
          />
        </div>

        <button className='flex items-center gap-1 border rounded-lg px-3 py-2 text-sm text-gray-600'>
          <Icon icon='solar:alt-arrow-down-linear' className='h-4 w-4' />
          Filters
        </button>
      </div>
      {/* Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product, index) => (
            <ProductCard
              key={`${product?.id ?? "no-id"}-${index}`} // ✅ always unique
              product={product}
            />
          ))
        ) : (
          <p className='text-gray-500 text-sm'>No products available</p>
        )}
      </div>
    </div>
  );
};

export default page;