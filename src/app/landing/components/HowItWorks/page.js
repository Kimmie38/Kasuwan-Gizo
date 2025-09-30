import React from "react";
import Image from "next/image";

const steps = [
  {
    icon: "/images/location.png",
    title: "Check location",
    desc: "Learn more about where, when and how to reach out. Troubleshoot and ease space problems.",
  },
  {
    icon: "/images/solution.png",
    title: "Explore",
    desc: "Locate different services, organizations and linkages. Troubleshoot and bridge gaps.",
  },
  {
    icon: "/images/handshake.png",
    title: "Communicate",
    desc: "Connect directly with businesses, exchange ideas and strengthen collaboration.",
  },
];

const partners = [
  { src: "/icons/giz.png", alt: "GIZ" },
  { src: "/icons/nHub.png", alt: "NY Foundation" },
  // 👉 add more logos here when you have them
];

const HowItWorks = () => {
  return (
    <section className="py-14 sm:py-20 bg-white">
      {/* Header */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          How It Works
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-2">
          Simple steps to get started and grow with us
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="p-6 sm:p-8 bg-blue-100 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col items-center text-center"
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-teal-50 mb-6">
              <Image
                src={step.icon}
                alt={step.title}
                width={64}
                height={64}
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Partners Section */}
      <div className="mt-20 text-center px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Our Partners
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-2">
          Here are our trusted partners
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-10">
          {partners.map((partner, index) => (
            <div key={index} className="h-20 w-auto flex items-center">
              <Image
                src={partner.src}
                alt={partner.alt}
                width={170}
                height={120}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
