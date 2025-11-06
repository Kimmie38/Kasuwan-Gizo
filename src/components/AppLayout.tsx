"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";
  const noSidebarRoutes = new Set(["/", "/login", "/signup", "/marketplace", "/campaign"]);
  const showSidebar = !noSidebarRoutes.has(pathname);

  useEffect(() => {
    let mounted = true;
    async function checkFetch() {
      const runSuccess = () => {
        if (!mounted) return;
        (window as any).__RSC_OK = true;
        try {
          localStorage.removeItem("forceFullNav");
        } catch (e) {
        }
      };

      const runFailure = (err?: any) => {
        if (!mounted) return;
        (window as any).__RSC_OK = false;
        try {
          localStorage.setItem("forceFullNav", "1");
        } catch (e) {
        }
        console.warn("Client fetch check failed - falling back to full page navigation.", err);
      };
      try {
        const nativeFetch = (globalThis as any).fetch;
        if (typeof nativeFetch === "function") {
          await Promise.resolve().then(() => nativeFetch("/favicon.ico", { method: "HEAD", cache: "no-store", credentials: "same-origin" }));
          runSuccess();
          return;
        }
      } catch (err) {
      }
      await new Promise<void>((resolve) => {
        const img = new Image();
        let settled = false;
        const cleanup = () => {
          img.onload = null;
          img.onerror = null;
        };
        img.onload = () => {
          if (settled) return;
          settled = true;
          cleanup();
          runSuccess();
          resolve();
        };
        img.onerror = (e) => {
          if (settled) return;
          settled = true;
          cleanup();
          runFailure(e);
          resolve();
        };
        img.src = "/favicon.ico?__rsc_check=" + Date.now();
        setTimeout(() => {
          if (settled) return;
          settled = true;
          cleanup();
          runFailure(new Error("timeout"));
          resolve();
        }, 3000);
      });
    }

    checkFetch();

    return () => {
      mounted = false;
    };
  }, []);
  return (
    <div className="min-h-screen flex bg-white">
      {showSidebar && <Sidebar />}
      <div className={`flex-1 min-h-screen ${showSidebar ? 'md:ml-64' : ''}`}>
        { !showSidebar && <Header /> }
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
