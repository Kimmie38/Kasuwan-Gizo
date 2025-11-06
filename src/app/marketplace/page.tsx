import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    title: 'Ankara Fashion Collection',
    business: 'Amara\'s Fashion Hub',
    location: 'Lagos, Nigeria',
    price: '₦15,000',
    image: 'https://images.unsplash.com/photo-1520975919054-75d2c2f7d5c3?auto=format&fit=crop&w=800&q=60',
    badge: '-25%',
    rating: 4.9,
    reviews: 124,
  },
  {
    id: 2,
    title: 'Organic Honey Collection',
    business: 'Sweet Nature Kenya',
    location: 'Nairobi, Kenya',
    price: 'KSh 800',
    image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=800&q=60',
    badge: null,
    rating: 4.8,
    reviews: 89,
  },
  {
    id: 3,
    title: 'Handwoven Baskets Set',
    business: 'Craft Masters Ghana',
    location: 'Accra, Ghana',
    price: 'GHC 120',
    image: 'https://images.unsplash.com/photo-1585262571956-9e7b2c7e2f0b?auto=format&fit=crop&w=800&q=60',
    badge: '-20%',
    rating: 4.7,
    reviews: 67,
  },
  {
    id: 4,
    title: 'Mobile Repair Services',
    business: 'Tech Solutions Hub',
    location: 'Cape Town, South Africa',
    price: 'R 250',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=800&q=60',
    badge: null,
    rating: 4.9,
    reviews: 156,
  },
  {
    id: 5,
    title: 'Shea Butter Skincare',
    business: 'Natural Glow Beauty',
    location: 'Addis Ababa, Ethiopia',
    price: 'ETB 450',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=60',
    badge: null,
    rating: 4.8,
    reviews: 203,
  },
  {
    id: 6,
    title: 'Coffee Bean Premium',
    business: 'Mountain Coffee Co',
    location: 'Addis Ababa, Ethiopia',
    price: 'ETB 320',
    image: 'https://images.unsplash.com/photo-1510627498534-cf7e9002facc?auto=format&fit=crop&w=800&q=60',
    badge: null,
    rating: 4.9,
    reviews: 89,
  },
  {
    id: 7,
    title: 'Traditional Jewelry Set',
    business: 'Heritage Jewelry',
    location: 'Lagos, Nigeria',
    price: '₦8,500',
    image: 'https://images.unsplash.com/photo-1520975681913-3b671b21b9e1?auto=format&fit=crop&w=800&q=60',
    badge: '-29%',
    rating: 4.6,
    reviews: 94,
  },
  {
    id: 8,
    title: 'Web Design Package',
    business: 'Digital Creators',
    location: 'Nairobi, Kenya',
    price: 'KSh 15,000',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60',
    badge: null,
    rating: 4.9,
    reviews: 178,
  },
];

const categories = ['All Categories', 'Fashion & Accessories', 'Food & Beverages', 'Technology', 'Health & Beauty', 'Arts & Crafts', 'Services'];

export default function MarketplacePage() {
  return (
    <div className="w-full bg-white">
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Discover Amazing Products</h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">Explore thousands of products from verified African businesses across different categories and locations</p>
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-sm">
                <input className="flex-1 px-4 py-3 text-gray-700" placeholder="Search products, businesses, or categories..." />
                <button className="bg-emerald-600 text-white px-4 py-3">Search</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-6 -mt-6">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex flex-wrap gap-3 items-center">
                {categories.map((c, i) => (
                  <button key={c} className={`text-sm ${i===0? 'bg-emerald-600 text-white': 'bg-gray-100 text-gray-700'} px-3 py-2 rounded-full`}>{c}</button>
                ))}
              </div>
            </div>
            <div>
              <label className="sr-only">Location</label>
              <select className="border border-gray-200 rounded-lg px-3 py-2">
                <option>All Locations</option>
                <option>Nigeria</option>
                <option>Kenya</option>
                <option>Ghana</option>
                <option>South Africa</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      
      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">8 Products Found</h2>
          <div className="flex items-center gap-3">
            <label className="text-sm text-gray-600">Sort by:</label>
            <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm">
              <option>Most Popular</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <article key={p.id} className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-44 bg-gray-50">
                {p.badge && <div className="absolute left-3 top-3 bg-red-500 text-white text-xs px-2 py-1 rounded-md">{p.badge}</div>}
                <Image src={p.image} alt={p.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center text-sm font-semibold">{p.business.split(' ').map(s=>s[0]).join('').slice(0,2)}</div>
                  <div className="text-sm text-gray-600">{p.business} <span className="text-xs text-gray-400 block">{p.location}</span></div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{p.title}</h3>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="text-sm text-amber-500">{'★'.repeat(Math.round(p.rating))}</div>
                    <div className="text-xs text-gray-500">{p.rating} ({p.reviews})</div>
                  </div>
                  <div className="text-lg font-bold text-gray-900">{p.price}</div>
                </div>
                <div className="flex gap-2">
                  <Link href="#" className="flex-1 text-center bg-emerald-600 text-white rounded-md px-3 py-2 text-sm">Contact Business</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
