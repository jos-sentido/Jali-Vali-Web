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
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-jv-ink/95 backdrop-blur border-b border-white/10"
          : "bg-jv-ink"
      }`}
    >
      <div className="container-jv flex items-center justify-between h-[68px]">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <span className="bg-white rounded-md p-1.5 flex items-center">
            <Image
              src="/brand/logo-jali-vali.png"
              alt="JALIE-VALI Constructora"
              width={120}
              height={52}
              className="h-9 w-auto"
              priority
            />
          </span>
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
                    ? "text-jv-green"
                    : "text-white/80 hover:text-white hover:bg-white/5"
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
          className="lg:hidden text-white p-2"
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
        <div className="lg:hidden bg-jv-ink border-t border-white/10">
          <nav className="container-jv py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2.5 rounded-md text-sm font-medium ${
                  pathname === item.href
                    ? "text-jv-green bg-white/5"
                    : "text-white/85"
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
