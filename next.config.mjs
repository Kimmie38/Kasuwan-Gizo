/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "picsum.photos",       // example placeholder
      "res.cloudinary.com",  // Cloudinary
      "localhost",           // local dev
      "kasuwa-gizo-backend-1.onrender.com", // your backend
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          "https://kasuwa-gizo-backend-1.onrender.com/kasuwa/:path*",
      },
    ];
  },
};

export default nextConfig;
