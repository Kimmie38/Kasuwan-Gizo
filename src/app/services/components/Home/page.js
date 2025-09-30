// pages/index.jsx
import TopBusinesses from "../TopBusinesses/page";

export default function Home() {
  const businesses = [
    {
      logo: "/images/tobbi.png",
      name: "Tobbikare PLC",
      description:
        "Tobbikare PLC is an agro-processing and distribution company committed to bringing fresh vegetables and farm produce from local farmers to households.",
      location: "📍 Abuja, Owerrinta street",
    },
    {
      logo: "/logos/danladi.png",
      name: "Danladi Rice PLC",
      description:
        "Danladi Rice PLC specializes in the cultivation, milling, and packaging of premium-quality rice. Dedicated to improving food security.",
      location: "📍 Abuja, Owerrinta street",
    },
    {
      logo: "/logos/drfish.png",
      name: "DR Fish",
      description:
        "DR Fish is a fast-growing aquaculture and seafood brand providing fresh, hygienic, and sustainably farmed fish.",
      location: "📍 Abuja, Owerrinta street",
    },
    {
      logo: "/logos/nana.png",
      name: "NANA Fashions PLC",
      description:
        "Nana Fashion PLC is a contemporary fashion house offering stylish, affordable clothing and accessories for men and women.",
      location: "📍 Abuja, Owerrinta street",
    },
  ];

  return (
    <main className="min-h-screen bg-white flex justify-center p-6">
      <div className="w-full max-w-7xl">
        <TopBusinesses businesses={businesses} />
      </div>
    </main>
  );
}
