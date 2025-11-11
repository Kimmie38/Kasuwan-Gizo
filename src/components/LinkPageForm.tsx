"use client";

import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";

type LinkPageConfig = {
  slug: string;
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  whatsapp?: string;
  facebook?: string;
  instagram?: string;
  ctaText?: string;
  ctaUrl?: string;
};

export default function LinkPageForm() {
  const [slug, setSlug] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [whatsapp, setWhatsapp] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [ctaText, setCtaText] = useState("Buy Now");
  const [ctaUrl, setCtaUrl] = useState("");
  const [generatedUrl, setGeneratedUrl] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    setMessage(null);
  }, [slug, title, subtitle, description]);

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setImagePreview(url);
  };

  const validSlug = (s: string) => {
    return /^[a-zA-Z0-9-_]{3,60}$/.test(s);
  };

  const handleGenerate = (e?: FormEvent) => {
    e?.preventDefault();
    if (!slug || !validSlug(slug)) {
      setMessage("Please enter a valid slug (letters, numbers, -, _; 3-60 chars).");
      setGeneratedUrl(null);
      return;
    }

    // local preview URL - in production this would be your public domain + route
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const url = `${origin}/u/${encodeURIComponent(slug)}`;
    setGeneratedUrl(url);
    setMessage("URL generated. You can save or copy the link.");
  };

  const handleSave = (e?: FormEvent) => {
    e?.preventDefault();
    if (!slug || !validSlug(slug)) {
      setMessage("Invalid slug. Fix it before saving.");
      return;
    }

    const cfg: LinkPageConfig = {
      slug,
      title,
      subtitle,
      description,
      image: imagePreview || undefined,
      whatsapp: whatsapp || undefined,
      facebook: facebook || undefined,
      instagram: instagram || undefined,
      ctaText: ctaText || undefined,
      ctaUrl: ctaUrl || undefined,
    };

    try {
      localStorage.setItem(`linkpage:${slug}`, JSON.stringify(cfg));

      // maintain a simple index of slugs
      const indexRaw = localStorage.getItem("linkpage:index");
      const index = indexRaw ? JSON.parse(indexRaw) as string[] : [];
      if (!index.includes(slug)) index.push(slug);
      localStorage.setItem("linkpage:index", JSON.stringify(index));

      setMessage("Configuration saved locally.");
      setGeneratedUrl(`${typeof window !== "undefined" ? window.location.origin : ""}/u/${encodeURIComponent(slug)}`);
    } catch (err) {
      setMessage("Failed to save configuration locally.");
    }
  };

  const handleCopy = async () => {
    if (!generatedUrl) {
      setMessage("Generate the URL first.");
      return;
    }
    try {
      await navigator.clipboard.writeText(generatedUrl);
      setMessage("Link copied to clipboard.");
    } catch (err) {
      setMessage("Unable to copy. Please copy manually.");
    }
  };

  return (
    <div className="linkpage-container space-y-6">
      <div className="linkpage-header flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Create & Customize Your Share Link</h1>
          <p className="text-sm text-gray-500">Create a unique public landing page link for your business. Preview and customize the content users will see.</p>
        </div>
      </div>

      <form className="linkpage-form grid grid-cols-1 lg:grid-cols-3 gap-6" onSubmit={(e) => { e.preventDefault(); handleGenerate(); }}>
        <div className="form-panel lg:col-span-2 bg-white border rounded-lg p-6 shadow-sm">
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">Public Slug</label>
            <input
              value={slug}
              onChange={(e) => setSlug(e.target.value.trim())}
              placeholder="eg. my-business-name"
              className="w-full border rounded-lg px-4 py-2 text-gray-700"
              required
            />
            <p className="text-xs text-gray-500">Slug is used in the public URL: /u/your-slug. Allowed: letters, numbers, -, _</p>

            <label className="block text-sm font-medium text-gray-700">Page Title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Business name or page title" className="w-full border rounded-lg px-4 py-2 text-gray-700" />

            <label className="block text-sm font-medium text-gray-700">Subtitle</label>
            <input value={subtitle} onChange={(e) => setSubtitle(e.target.value)} placeholder="Short subtitle (e.g. Fashion & Accessories)" className="w-full border rounded-lg px-4 py-2 text-gray-700" />

            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={4} className="w-full border rounded-lg px-4 py-2 text-gray-700" placeholder="A short description about your business..." />

            <div>
              <label className="block text-sm font-medium text-gray-700">Profile Image</label>
              <div className="mt-2 flex items-center gap-3">
                <label className="inline-block bg-emerald-600 text-white px-4 py-2 rounded-lg cursor-pointer">
                  Upload Image
                  <input type="file" accept="image/*" onChange={handleImage} className="hidden" />
                </label>
                {imagePreview && <img src={imagePreview} alt="preview" className="w-24 h-24 object-cover rounded-md border" />}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">WhatsApp</label>
                <input value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} placeholder="https://wa.me/..." className="w-full border rounded-lg px-4 py-2 text-gray-700" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Facebook</label>
                <input value={facebook} onChange={(e) => setFacebook(e.target.value)} placeholder="https://facebook.com/yourpage" className="w-full border rounded-lg px-4 py-2 text-gray-700" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Instagram</label>
                <input value={instagram} onChange={(e) => setInstagram(e.target.value)} placeholder="https://instagram.com/yourpage" className="w-full border rounded-lg px-4 py-2 text-gray-700" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">CTA Text</label>
                <input value={ctaText} onChange={(e) => setCtaText(e.target.value)} placeholder="Call to action (e.g. Shop Now)" className="w-full border rounded-lg px-4 py-2 text-gray-700" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">CTA URL</label>
                <input value={ctaUrl} onChange={(e) => setCtaUrl(e.target.value)} placeholder="https://your-checkout-or-shop" className="w-full border rounded-lg px-4 py-2 text-gray-700" />
              </div>
            </div>

            <div className="flex gap-3 justify-end mt-4">
              <button onClick={handleGenerate} className="px-4 py-2 bg-white border rounded-lg text-gray-800">Preview Link</button>
              <button onClick={handleSave} className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">Save Configuration</button>
            </div>

            {message && <div className="text-sm text-gray-600 mt-2">{message}</div>}
          </div>
        </div>

        <div className="preview-panel bg-white border rounded-lg p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div className="font-semibold text-gray-700">Page Preview</div>
            <div>
              {generatedUrl ? (
                <div className="flex items-center gap-2">
                  <input readOnly value={generatedUrl} className="w-[180px] text-xs px-2 py-1 border rounded text-gray-600" />
                  <button type="button" onClick={handleCopy} className="px-3 py-1 bg-indigo-500 text-white rounded text-sm">Copy</button>
                </div>
              ) : (
                <div className="text-xs text-gray-400">Preview will appear here after generating</div>
              )}
            </div>
          </div>

          <div className="preview-card border rounded-lg overflow-hidden">
            <div className="p-4 text-center">
              {imagePreview ? (
                <img src={imagePreview} alt="profile" className="mx-auto w-24 h-24 object-cover rounded-full" />
              ) : (
                <div className="mx-auto w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">IMG</div>
              )}

              <h3 className="mt-4 text-lg font-semibold text-gray-800">{title || "Sample Business"}</h3>
              <div className="text-sm text-gray-500">{subtitle || "Category"}</div>
              <p className="mt-3 text-sm text-gray-600">{description || "Short description about your business or what you offer."}</p>

              <div className="mt-4">
                <a href={ctaUrl || "#"} className="inline-block px-4 py-2 bg-emerald-600 text-white rounded-lg">{ctaText || "Buy Now"}</a>
              </div>

              <div className="mt-4 flex items-center justify-center gap-3 text-sm text-gray-600">
                {whatsapp && <a href={whatsapp} className="text-emerald-600">WhatsApp</a>}
                {facebook && <a href={facebook} className="text-blue-600">Facebook</a>}
                {instagram && <a href={instagram} className="text-pink-600">Instagram</a>}
              </div>
            </div>
          </div>

          <div className="mt-6 text-xs text-gray-500">Note: This preview is local. To publish a real public page you will need to save and the backend should serve /u/[slug].</div>
        </div>
      </form>
    </div>
  );
}
