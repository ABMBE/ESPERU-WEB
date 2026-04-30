export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
            <div className="font-bold tracking-widest text-xl">
            ESPERU
            <span className="block text-xs tracking-normal text-yellow-500 font-medium">
                Soporte e infraestructura tecnológica
            </span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a href="#servicios" className="hover:text-yellow-500 transition">Servicios</a>
            <a href="#planes" className="hover:text-yellow-500 transition">Planes</a>
            <a href="#nosotros" className="hover:text-yellow-500 transition">Por qué ESPERU</a>
            <a href="#contacto" className="hover:text-yellow-500 transition">Contacto</a>
            </div>

            <a
            href="#contacto"
            className="hidden md:inline-block bg-yellow-500 text-black px-5 py-2 rounded-xl font-semibold hover:bg-yellow-400 transition"
            >
            Cotizar
            </a>
        </nav>
        </header>
    );
    }