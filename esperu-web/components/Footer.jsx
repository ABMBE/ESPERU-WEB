    export default function Footer() {
    return (
        <footer className="bg-black text-white border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            <div>
            <h2 className="text-2xl font-bold tracking-widest">ESPERU</h2>
            <p className="mt-2 text-yellow-400 text-sm">
                Soporte e infraestructura tecnológica
            </p>
            <p className="mt-4 text-gray-400 text-sm">
                Soluciones en soporte técnico, redes, infraestructura eléctrica y continuidad operativa.
            </p>
            </div>

            <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
                <li>Soporte técnico</li>
                <li>Infraestructura de red</li>
                <li>Sistemas eléctricos</li>
                <li>Automatización y PLC</li>
            </ul>
            </div>

            <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
                <li>Arequipa, Perú</li>
                <li>WhatsApp: +51 966 366 499</li>
                <li>Correo: esperu.scrl@esperu.com</li>
            </ul>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-white/10 text-sm text-gray-500 flex flex-col md:flex-row justify-between gap-3">
            <p>© 2026 ESPERU. Todos los derechos reservados.</p>
            <p>Prevención • Tecnología • Energía • Continuidad</p>
        </div>
        </footer>
    );
    }