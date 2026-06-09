export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white border-t border-white/10 py-14">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-bold tracking-[0.18em]">ESPERU</h2>

          <p className="mt-2 text-[#C8A95B] text-sm font-medium">
            Soporte e infraestructura tecnológica
          </p>

          <p className="mt-5 text-gray-400 text-sm leading-relaxed">
            Soluciones en soporte técnico, redes, infraestructura eléctrica,
            desarrollo tecnológico y continuidad operativa para empresas,
            instituciones y profesionales.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-5 text-white">Navegación</h3>

          <ul className="space-y-3 text-gray-400 text-sm">
            <li><a href="#soluciones" className="hover:text-[#C8A95B] transition">Soluciones</a></li>
            <li><a href="#sectores" className="hover:text-[#C8A95B] transition">Sectores</a></li>
            <li><a href="#servicios" className="hover:text-[#C8A95B] transition">Servicios</a></li>
            <li><a href="#planes" className="hover:text-[#C8A95B] transition">Planes de atención</a></li>
            <li><a href="#contacto" className="hover:text-[#C8A95B] transition">Contacto</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-5 text-white">Contacto</h3>

          <ul className="space-y-3 text-gray-400 text-sm">
            <li>Arequipa, Perú</li>
            <li>+51 966 366 499</li>
            <li>esperu.scrl@gmail.com</li>
          </ul>

          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-sm hover:border-[#C8A95B] hover:text-[#C8A95B] transition"
            >
              Facebook
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-sm hover:border-[#C8A95B] hover:text-[#C8A95B] transition"
            >
              Instagram
            </a>

            <a
              href="https://wa.me/51966366499"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-sm hover:border-[#C8A95B] hover:text-[#C8A95B] transition"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-sm text-gray-500">
        <p>© 2026 ESPERU. Todos los derechos reservados.</p>
        <p>Prevención • Tecnología • Energía • Continuidad</p>
      </div>
    </footer>
  );
}