"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-shadow duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur border-jv-line shadow-sm"
          : "bg-white border-jv-line"
      }`}
    >
      <div className="container-jv flex items-center justify-between h-[68px]">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/brand/logo-jali-vali.png"
            alt="JALIE-VALI Constructora"
            width={180}
            height={120}
            className="h-12 w-auto"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                  active
                    ? "text-jv-green-dark"
                    : "text-jv-ink/70 hover:text-jv-ink hover:bg-jv-bg"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link href="/contacto" className="btn btn-primary text-sm">
            Solicitar propuesta
          </Link>
        </div>

        <button
          aria-label="Abrir menú"
          className="lg:hidden text-jv-ink p-2"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-jv-line">
          <nav className="container-jv py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2.5 rounded-md text-sm font-medium ${
                  pathname === item.href
                    ? "text-jv-green-dark bg-jv-bg"
                    : "text-jv-ink/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contacto" className="btn btn-primary mt-2">
              Solicitar propuesta
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
