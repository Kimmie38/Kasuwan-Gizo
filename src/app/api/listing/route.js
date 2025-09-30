let listings = [
  {
    id: 1,
    title: "Basket of Tomatoes",
    price: 20000,
    category: "Vegetables",
    description: "Freshly harvested tomatoes from the farm",
    image: "/tomatoes.png",
    rating: 4.7,
  },
  {
    id: 2,
    title: "iPhone 13",
    price: 389000,
    category: "Electronics",
    description: "Brand new iPhone 13, 128GB",
    image: "/iphone13.png",
    rating: 4.7,
  },
];

export async function GET() {
  return Response.json(listings);
}

export async function POST(req) {
  try {
    const newListing = await req.json();
    newListing.id = Date.now(); // simple unique ID
    listings.push(newListing);
    return Response.json(newListing, { status: 201 });
  } catch (error) {
    return Response.json({ error: "Invalid data" }, { status: 400 });
  }
}
