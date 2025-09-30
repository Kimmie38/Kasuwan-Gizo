"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PublicProfile() {
  const { slug } = useParams();
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!slug) return;

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data.user);
        setListings(data.listings || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Error fetching profile:", err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!user) return <p className="text-center mt-10">User not found</p>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* User Info */}
      <div className="max-w-3xl mx-auto mb-8 text-center">
        <h1 className="text-2xl font-bold">{user.fullName}</h1>
        <p className="text-gray-600">{user.email}</p>
      </div>

      {/* Listings */}
      <div className="max-w-5xl mx-auto">
        {listings.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {listings.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-3">
                  <h3 className="font-semibold text-gray-800 text-sm">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs">{item.desc}</p>
                  <p className="text-emerald-600 font-bold mt-1 text-sm">
                    ₦{item.price?.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No listings available yet.
          </p>
        )}
      </div>
    </div>
  );
}
