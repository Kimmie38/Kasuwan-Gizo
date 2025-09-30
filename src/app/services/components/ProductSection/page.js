import Link from "next/link";
import ProductCard from "../ProductCard/page";

export default function ProductSection({ title, products = [] }) {
  return (
    <section className="bg-white rounded-2xl shadow p-4 mb-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <Link href="/products" className="text-sm text-green-600 font-medium">
          See more
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product, index) => (
            <ProductCard
              key={`${product?.id ?? "no-id"}-${index}`} // ✅ always unique
              product={product}
            />
          ))
        ) : (
          <p className="text-gray-500 text-sm">No products available</p>
        )}
      </div>
    </section>
  );
}

