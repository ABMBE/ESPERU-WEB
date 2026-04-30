    export default function Contact() {
    return (
        <section id="contacto" className="bg-white text-black py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
            Solicita una evaluación para tu empresa
            </h2>

            <p className="mt-4 text-gray-600">
            Revisamos tu infraestructura tecnológica y eléctrica para identificar
            riesgos, mejorar la continuidad operativa y prevenir fallas.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
                href="https://wa.me/51966366499?text=Hola%20ESPERU,%20quiero%20una%20evaluación%20de%20mi%20infraestructura."
                target="_blank"
                className="bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
            >
                Escribir por WhatsApp
            </a>

            <a
                href="mailto:contacto@esperu.com"
                className="border border-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
            >
                Enviar correo
            </a>
            </div>

            <p className="mt-6 text-sm text-gray-500">
            Atención a instituciones, colegios, oficinas y empresas en crecimiento.
            </p>
        </div>
        </section>
    );
}