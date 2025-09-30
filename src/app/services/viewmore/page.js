"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
// import Emage from "../../../../public/images/first.png";
import ReviewCard from "../components/ReviewCard/page";
import ProductSection from "../components/ProductSection/page";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {
  const [visibleProducts, setVisibleProducts] = useState([]);

  const reviews = [
    {
      name: "Daniel Ademola",
      image: "/images/apple.png", // place images inside /public/avatars/
      rating: 4,
      review: "This is an amazing product. I would love to patronize once more",
    },
    {
      name: "Daniel Ademola",
      image: "/images/apple.png",
      rating: 4,
      review: "This is an amazing product. I would love to patronize once more",
    },
    {
      name: "Daniel Ademola",
      image: "/images/apple.png",
      rating: 4,
      review: "This is an amazing product. I would love to patronize once more",
    },
  ];

  const mockProducts = useMemo(
    () => [
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
        description:
          "Freshly harvested spinach from the farm in the last one week",
        location: "📍 Abuja, Gwarimpa street",
        price: 20000,
      },
      {
        id: 3,
        name: "Bananas",
        image: "/images/apple.png",
        rating: 4.7,
        reviews: 150,
        description:
          "Freshly harvested bananas from the farm in the last one week",
        location: "📍 Abuja, Gwarimpa street",
        price: 20000,
      },
      {
        id: 4,
        name: "Apples",
        image: "/images/app.png",
        rating: 4.7,
        reviews: 200,
        description:
          "Freshly harvested apples from the farm in the last one week",
        location: "📍 Abuja, Gwarimpa street",
        price: 20000,
      },
      {
        id: 5,
        name: "Apples",
        image: "/images/app.png",
        rating: 4.7,
        reviews: 200,
        description:
          "Freshly harvested apples from the farm in the last one week",
        location: "📍 Abuja, Gwarimpa street",
        price: 20000,
      },
    ],
    []
  );

  useEffect(() => {
    const shuffleAndPick = () => {
      const shuffled = [...mockProducts].sort(() => Math.random() - 0.5);
      setVisibleProducts(shuffled.slice(0, 4));
    };

    shuffleAndPick(); // initial load

    const interval = setInterval(shuffleAndPick, 3000);
    return () => clearInterval(interval);
  }, [mockProducts]);
   const router = useRouter();

  return (
    <main className=' max-w-[1440px] mx-auto bg-[#FAFAFA] '>
      <section className=' flex gap-[10px] my-[20px] items-center '>
      <button
      onClick={() => router.back()}
      className="border-2 border-black rounded-full w-fit h-fit p-3"
    >
      <Icon icon="qlementine-icons:arrow-left-16" />
    </button>
        <h1>Services</h1>
      </section>
      <section className=' flex bg-white rounded-[24px] py-[30px] px-[20px] '>
        <section className='flex-1/2'>
          <Image
            src='/images/first.png'
            alt='My Picture'
            width={573}
            height={804}
            className='rounded-[24px] mb-[32px]'
          />
          <section className='flex gap-[20px]'>
            {Array.from({ length: 4 }).map((_, i) => (
              <Image
                key={i}
                src='/images/first.png'
                alt='pics'
                width={130}
                height={130}
                className='rounded-[8px] border-3'
              />
            ))}
          </section>
        </section>

        <section className=' flex-1/2 '>
          <div className='  '>
            <h1 className=' text-[40px] font-normal '>
              10 Basket of Tomatoes{" "}
            </h1>
            <div className=' flex justify-between items-center '>
              <p className=' text-[33px] font-normal '>₦20,000</p>
              <div className=' flex items-center gap-[4px] '>
                <Icon
                  icon={"mynaui:star-solid"}
                  className=' text-[#E6D806] w-[19px] h-[19px] '
                />
                <p className=' text-[18px] font-medium '>4.7</p>
              </div>
              <div></div>
            </div>
          </div>
          <div>
            <h1 className=' text-[28px] font-normal mt-[28px] '>
              Description:
            </h1>
            <p className=' text-[#4C4C4C] text-[23px] font-normal mt-[8px] '>
              Adebisi Fresh Tomatoes are handpicked from our fertile farmlands
              and delivered straight to your kitchen with their natural taste,
              color, and nutrients intact.
            </p>
            <section className=' flex flex-col gap-[24px] my-[44px] '>
              <div className=' relative flex text-white w-[614px] h-[56px] '>
                <Icon
                  icon={"meteor-icons:whatsapp"}
                  className=' absolute left-[35%] top-[35%] '
                />
                <button className=' bg-[#1CAB95] rounded-[8px] w-full h-full '>
                  Message Vendor
                </button>
                <Icon
                  icon={"fluent-mdl2:arrow-up-right"}
                  className=' absolute right-[35%] top-[35%] '
                />
              </div>
              <div className=' relative flex text-[#1CAB95] w-[614px] h-[56px] '>
                <Icon
                  icon={"heroicons-outline:phone"}
                  className=' absolute left-[35%] top-[35%] '
                />
                <button className=' border  border-[#1CAB95] rounded-[8px] w-full h-full '>
                  Call Vendor
                </button>
                <Icon
                  icon={"fluent-mdl2:arrow-up-right"}
                  className=' absolute right-[35%] top-[35%] '
                />
              </div>
            </section>
          </div>
          <div>
            <div>
              <h1 className=' text-[23px] font-normal '>Review</h1>
              <div className='flex gap-[15px] my-[12px] '>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Icon
                    key={index}
                    icon='solar:star-line-duotone'
                    className=' w-[20px] h-[20px] '
                  />
                ))}
              </div>
              <p className=' border border-[#555555] my-[12px] px-[16px] py-[10px] rounded-[8px] w-[614px] h-[84px] text-[#555555] text-[23px] '>
                This is an amazing product . I would love to patronize once more
              </p>
              <button className=' border border-[#888888] text-[#888888] w-[181px] h-[56px] flex justify-center items-center gap-[8px] text-[18px] rounded-[8px] '>
                <span>Submit</span>{" "}
                <Icon icon={"qlementine-icons:arrow-right-16"} />{" "}
              </button>
            </div>
            <div>
              {reviews.map((r, i) => (
                <ReviewCard
                  key={i}
                  name={r.name}
                  image={r.image}
                  rating={r.rating}
                  review={r.review}
                />
              ))}
            </div>
          </div>
        </section>
      </section>
      <section className=' '>
        {/* <h1 className=' text-[28px] font-normal '>Similar Products</h1> */}
        <div className=' my-[32px] '>
          <ProductSection title='Similar Products' products={visibleProducts} />{" "}
        </div>
      </section>
    </main>
  );
};

export default Page;