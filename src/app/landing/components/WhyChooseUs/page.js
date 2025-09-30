import React from "react";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/solid"; // make sure @heroicons/react is installed

const features = ["Community Business", "Trusted", "Easy to use"];

const WhyChooseUs = () => {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="flex justify-center">
           <Image
          src="/images/bg-image2.png"
          alt="People discussing"
          width={600}   // increased default width
          height={700}  // increased default height
          className="w-72 sm:w-96 md:w-[420px] lg:w-[500px] h-auto object-contain"
        />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why you should choose us
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-6">
            We connect you to businesses you can trust — making it easy to
            explore, discover, and build strong community linkages.
          </p>
          <ul className="space-y-4">
            {features.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-gray-700 text-sm sm:text-base"
              >
                <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
