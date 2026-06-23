import Image from "next/image";
export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <Image
            src="/logo/logo-fat.png"
            alt="ESPERU"
            width={30}
            height={30}
            priority
          />

          <div>
            <h1 className="text-white font-bold tracking-[0.18em] text-xl">
              ESPERU
            </h1>

            <p className="text-xs text-[#C8A95B]">
              Soporte e infraestructura tecnológica
            </p>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-8 text-sm text-gray-300">
          <a href="#soluciones" className="hover:text-[#C8A95B] transition">
            Soluciones
          </a>
          <a href="#sectores" className="hover:text-[#C8A95B] transition">
            Sectores
          </a>
          <a href="#servicios" className="hover:text-[#C8A95B] transition">
            Servicios
          </a>
          <a href="#planes" className="hover:text-[#C8A95B] transition">
            Planes
          </a>
          <a href="#contacto" className="hover:text-[#C8A95B] transition">
            Contacto
          </a>
        </div>

        <a
          href="#servicios"
          className="hidden lg:inline-flex shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-[#B89B5E] to-[#D3B872] text-black px-6 py-3 font-semibold hover:scale-105 active:scale-95 transition duration-300"
        >
          Ver soluciones
        </a>

        <a
          href="#contacto"
          className="lg:hidden inline-flex rounded-xl border border-white/10 px-4 py-2 text-sm text-white"
        >
          Contacto
        </a>
      </nav>
    </header>
  );
}