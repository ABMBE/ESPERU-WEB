"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
{ label: "Soluciones", href: "#soluciones" },
{ label: "Sectores", href: "#sectores" },
{ label: "Servicios", href: "#servicios" },
{ label: "Planes de atención", href: "#planes" },
{ label: "Contacto", href: "#contacto" },
];

export default function Footer() {
const pathname = usePathname();

const isHome = pathname === "/";

const resolveHref = (href) => {
return isHome ? href : `/${href}`;
};

return ( <footer className="bg-[#0A0A0A] text-white border-t border-white/10 py-14"> <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

    <div className="max-w-md">
      <Image
        src="/logo/logo-negro.png"
        alt="ESPERU"
        width={1536}
        height={1024}
        className="h-12 w-auto"
      />

      <p className="mt-5 text-gray-400 leading-relaxed">
        Soluciones en soporte técnico, infraestructura tecnológica
        y continuidad operativa para empresas, instituciones y
        profesionales.
      </p>
    </div>

    <div>
      <h3 className="font-semibold mb-5 text-white">
        Navegación
      </h3>

      <ul className="space-y-3 text-gray-400 text-sm">
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <a
              href={resolveHref(link.href)}
              className="hover:text-[#C8A95B] transition"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div>
      <h3 className="font-semibold mb-5 text-white">
        Contacto
      </h3>

      <ul className="space-y-3 text-gray-400 text-sm">
        <li>Arequipa, Perú</li>

        <li>
          <a
            href="tel:+51966366499"
            className="hover:text-[#C8A95B] transition"
          >
            +51 966 366 499
          </a>
        </li>

        <li>
          <a
            href="mailto:esperu.scrl@gmail.com"
            className="hover:text-[#C8A95B] transition"
          >
            esperu.scrl@gmail.com
          </a>
        </li>
      </ul>

      <div className="flex gap-3 mt-6">

        {/* Facebook */}
        <a
          href="https://www.facebook.com/profile.php?id=61574760004987"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="flex items-center justify-center h-10 w-10 rounded-xl border border-white/10 bg-white/5 text-gray-300 hover:border-[#C8A95B] hover:text-[#C8A95B] transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.02 3.66 9.19 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.77l-.44 2.91h-2.33V22c4.78-.75 8.45-4.92 8.45-9.94z" />
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/e_speru_/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="flex items-center justify-center h-10 w-10 rounded-xl border border-white/10 bg-white/5 text-gray-300 hover:border-[#C8A95B] hover:text-[#C8A95B] transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5Zm8.88 1.13a.88.88 0 1 1 0 1.75.88.88 0 0 1 0-1.75ZM12 6.5A5.5 5.5 0 1 1 6.5 12 5.5 5.5 0 0 1 12 6.5Zm0 1.5A4 4 0 1 0 16 12a4 4 0 0 0-4-4Z" />
          </svg>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/51966366499"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="flex items-center justify-center h-10 w-10 rounded-xl border border-white/10 bg-white/5 text-gray-300 hover:border-[#C8A95B] hover:text-[#C8A95B] transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20.52 3.48A11.85 11.85 0 0 0 12.07 0C5.5 0 .15 5.35.15 11.92c0 2.1.55 4.15 1.6 5.96L0 24l6.29-1.65a11.9 11.9 0 0 0 5.78 1.47h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.48-8.42z" />
          </svg>
        </a>

      </div>
    </div>
  </div>

  <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-sm text-gray-500">
    <p>© 2026 ESPERU. Todos los derechos reservados.</p>

    <p>
      Prevención • Tecnología • Energía • Continuidad
    </p>
  </div>
</footer>

);
}
