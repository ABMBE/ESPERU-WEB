"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Soluciones", href: "#soluciones" },
  { label: "Sectores", href: "#sectores" },
  { label: "Servicios", href: "#servicios" },
  { label: "Planes", href: "#planes" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Anchors only exist on the home page, so from any other route
  // ("/education", etc.) we need to link back to "/#section".
  const resolveHref = (href) => (isHome ? href : `/${href}`);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/logo/logo-fat.png"
            alt="ESPERU"
            width={428}
            height={524}
            priority
            className="h-8 w-auto"
          />

          <div>
            <h1 className="text-white font-bold tracking-[0.18em] text-xl">
              ESPERU
            </h1>

            <p className="text-xs text-[#C8A95B] font-mono-accent">
              Soporte e infraestructura tecnológica
            </p>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8 text-sm text-gray-300">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={resolveHref(link.href)}
              className="hover:text-[#C8A95B] transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={resolveHref("#servicios")}
          className="hidden lg:inline-flex shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-[#B89B5E] to-[#D3B872] text-black px-6 py-3 font-semibold hover:scale-105 active:scale-95 transition duration-300"
        >
          Ver soluciones
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="lg:hidden inline-flex items-center justify-center rounded-xl border border-white/10 p-2 text-white"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={resolveHref(link.href)}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-gray-200 border-b border-white/5 last:border-b-0 hover:text-[#C8A95B] transition"
              >
                {link.label}
              </a>
            ))}

            <a
              href={resolveHref("#servicios")}
              onClick={() => setOpen(false)}
              className="mt-5 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#B89B5E] to-[#D3B872] text-black px-6 py-3 font-semibold transition"
            >
              Ver soluciones
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
