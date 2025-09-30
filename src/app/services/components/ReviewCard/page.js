"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";

export default function ReviewCard({ name, image, rating, review }) {
  return (
    <div className=' p-4 rounded-md mb-4'>
      <div className='flex items-center gap-3'>
        <Image
          src={image}
          alt={name}
          width={40}
          height={40}
          className='rounded-full'
        />
        <span className='font-medium'>{name}</span>

        {/* Stars */}
        <div className='flex ml-2'>
          {Array.from({ length: 5 }).map((_, index) => (
            <Icon
              key={index}
              icon={
                index < rating ? "solar:star-bold" : "solar:star-line-duotone"
              }
              className='text-yellow-400 text-xl'
            />
          ))}
        </div>
        <span className='ml-1 text-gray-600'>({rating})</span>
      </div>

      <p className='mt-2 text-gray-700'>{review}</p>
    </div>
  );
}