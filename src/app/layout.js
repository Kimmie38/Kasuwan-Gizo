import "./globals.css";

export const metadata = {
  title: "My Project",
  description: "Next.js App Router project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {/* Navbar will go here later */}
        {children}
        {/* Footer will go here later */}
      </body>
    </html>
  );
}
