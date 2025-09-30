"use client";
import { useState } from "react";
import Image from "next/image";

export default function AddListingModal({ isOpen, onClose, onAdded }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Category");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file); // store file itself
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("description", description);
      if (image) {
        formData.append("image", image); // actual file
      }

      const res = await fetch(
        "https://kasuwa-gizo-backend.onrender.com/kasuwa/product",
        {
          method: "POST",
          body: formData, // no JSON.stringify here
        }
      );

      const data = await res.json();
      console.log("📦 Product response:", data);

      if (res.ok && data.success) {
        alert("✅ Product added successfully!");
        onAdded?.(data.product);
        onClose();
      } else {
        alert(`❌ Error: ${data.message || "Something went wrong"}`);
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("⚠️ Failed to reach the server");
    } finally {
      setLoading(false);
      // reset form
      setName("");
      setPrice("");
      setCategory("Category");
      setDescription("");
      setImage(null);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl p-6 overflow-y-auto max-h-[90vh]">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-bold">Add New Listing</h1>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Product/Service Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500"
              required
            />
            <input
              type="number"
              placeholder="Price (₦)"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500"
            required
          >
            <option value="Category" disabled>
              Select Category
            </option>
            <option>Products</option>
            <option>Services</option>
          </select>

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500"
            required
          />

          {/* Upload */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <p className="text-gray-500">Drop your product pictures here</p>
            <p className="text-gray-400 text-sm mb-4">OR</p>
            <label className="inline-block bg-emerald-600 text-white px-4 py-2 rounded-lg cursor-pointer">
              Upload file
              <input type="file" onChange={handleImageUpload} className="hidden" />
            </label>
         {image && (
        <Image
          src={URL.createObjectURL(image)}
          alt="preview"
          width={400}
          height={200}
          className="mt-4 w-full h-32 object-cover rounded-md"
        />
      )}
                </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            <button
              type="submit"
              disabled={loading}
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700"
            >
              {loading ? "Adding..." : "Add Listing"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
