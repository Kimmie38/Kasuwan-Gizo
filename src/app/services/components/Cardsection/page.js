import Image from "next/image";

// Reusable Section Component
function CardSection({ title, items }) {
  return (
    <section className="w-full bg-[#FFF] p-4 md:p-6 rounded-[8px] mb-8 shadow-[0_4px_11px_0_rgba(2,143,122,0.04)">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <a
          href="#"
          className="text-sm text-gray-600 hover:text-gray-800 flex items-center gap-1"
        >
          See more →  
        </a>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm p-4 flex flex-col justify-between hover:shadow-md transition-all duration-300"
          >
            {/* Image */}
            {item.image ? (
              <div className="w-full h-40 rounded-xl overflow-hidden relative">
                <Image
                  src={item.image}
                  alt={item.name || "Product image"}
                  fill
                  priority={true}
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         25vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="w-full h-40 rounded-xl bg-gray-100 flex items-center justify-center text-gray-400 text-xs">
                No image
              </div>
            )}

            {/* Content */}
            <div className="mt-4 flex flex-col flex-grow">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-900">
                  {item.name}
                </h3>
                {item.rating && (
                  <span className="text-xs text-yellow-500">⭐ {item.rating}</span>
                )}
              </div>
              <p className="text-xs text-gray-500 mt-2 line-clamp-2">
                {item.description}
              </p>
            </div>

            {/* Location */}
            {item.location && (
              <p className="text-xs text-gray-400 mt-2">{item.location}</p>
            )}

            {/* Price */}
            {item.price && (
              <p className="text-sm font-semibold text-gray-900 mt-2">
                {item.price}
              </p>
            )}

            {/* Button */}
            <button className="mt-3 bg-emerald-100 text-emerald-700 font-medium text-xs py-2 px-3 rounded-lg w-full hover:bg-emerald-200">
              View More →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

// Main Page
export default function Page() {
  const automobiles = [
    {
      image: "/images/cars.png", // ✅ fixed path (inside /public/images)
      name: "Toyota Camry 6",
      rating: 4.7,
      description:
        "Freshly harvested tomatoes from the farm in the last one week",
      location: "📍 Abuja, Owerrinta street",
      price: "₦20,000.00",
    },
    {
      image: "/images/highlander.png", // ✅ should be inside /public/cars/
      name: "Toyota Truck",
      rating: 4.7,
      description:
        "Freshly harvested tomatoes from the farm in the last one week",
      location: "📍 Abuja, Owerrinta street",
      price: "₦20,000.00",
    },

    {
      image: "/images/garage.png", // ✅ should be inside /public/cars/
      name: "Toyota Truck",
      rating: 4.7,
      description:
        "Freshly harvested tomatoes from the farm in the last one week",
      location: "📍 Abuja, Owerrinta street",
      price: "₦20,000.00",
    },
    {
      image: "/images/trailer.png", // ✅ should be inside /public/cars/
      name: "Toyota Truck",
      rating: 4.7,
      description:
        "Freshly harvested tomatoes from the farm in the last one week",
      location: "📍 Abuja, Owerrinta street",
      price: "₦20,000.00",
    },
  ];

  const businesses = [
    {
      image: "/images/tailor.png", // ✅ should be inside /public/logos/
      name: "Tobbikare PLC",
      description:
        "An agro-processing and distribution company committed to bringing fresh vegetables and farm produce from local farmers to households.",
      location: "📍 Abuja, Owerrinta street",
    },
    {
      image: "/images/vulcaniser.png",
      name: "Danladi Rice PLC",
      description:
        "Specializes in cultivation, milling, and packaging of premium-quality rice, dedicated to improving food security.",
      location: "📍 Abuja, Owerrinta street",
    },
    {
      image: "/images/barber.png",
      name: "Danladi Rice PLC",
      description:
        "Specializes in cultivation, milling, and packaging of premium-quality rice, dedicated to improving food security.",
      location: "📍 Abuja, Owerrinta street",
    },
      {
      image: "/images/plumber.png", // ✅ should be inside /public/logos/
      name: "Tobbikare PLC",
      description:
        "An agro-processing and distribution company committed to bringing fresh vegetables and farm produce from local farmers to households.",
      location: "📍 Abuja, Owerrinta street",
    },
  ];

  return (
    <main className="min-h-screen bg-white flex justify-center p-6">
      <div className="w-full max-w-7xl">
        {/* Render Automobiles */}
        <CardSection title="Automobile" items={automobiles} />

        {/* Render Businesses */}
        <CardSection title="Top Businesses" items={businesses} />
      </div>
    </main>
  );
}
