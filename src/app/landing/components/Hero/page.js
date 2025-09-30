import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
        <section
      className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-10 lg:px-16 py-12 sm:py-20"
      style={{
        backgroundImage: "url('/images/bg-image.jpg')", // <-- your bg image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      {/* Content (left aligned) */}
      <div className="relative z-10 max-w-xl text-white">
        <h1 className="text-3xl sm:text-5xl font-bold leading-snug">
          Give Your Business the{" "}
          <span className="text-teal-400">Visibility</span> It Deserves.
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-200">
          Connect with customers, showcase your products and services, and grow
          your MSME with our easy-to-use platform.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">

            <Link href="/services">
          <button className="px-6 py-3 bg-white text-gray-800 rounded-lg shadow hover:bg-gray-100">
            Market place
          </button>
          </Link>
          <button className="px-6 py-3 bg-teal-500 text-white rounded-lg shadow hover:bg-teal-600">
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
