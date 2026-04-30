    "use client";
    import { motion } from "framer-motion";
    
    const services = [
    {
        number: "01",
        title: "Soporte técnico integral",
        text: "Diagnóstico, mantenimiento preventivo y correctivo de equipos informáticos para asegurar rendimiento, estabilidad y continuidad.",
    },
    {
        number: "02",
        title: "Infraestructura de red",
        text: "Cableado estructurado, conectividad, switches, routers, puntos de red y optimización de infraestructura empresarial.",
    },
    {
        number: "03",
        title: "Sistemas eléctricos",
        text: "Evaluación de carga, tableros eléctricos, interruptores y puesta a tierra para reducir riesgos operativos.",
    },
    {
        number: "04",
        title: "Venta e instalación de equipos",
        text: "Computadoras, laptops, impresoras, routers, switches y equipamiento tecnológico de calidad para empresas.",
    },
    {
        number: "05",
        title: "Automatización y PLC",
        text: "Soluciones orientadas a procesos industriales, automatización básica y soporte en entornos operativos.",
    },
    {
        number: "06",
        title: "Auditoría preventiva",
        text: "Revisión técnica de infraestructura tecnológica y eléctrica para detectar puntos críticos antes de una falla.",
    },
    ];

    export default function Services() {
    return (
        <section id="servicios" className="relative bg-white text-black py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(234,179,8,0.12),transparent_35%)]"></div>

        <div className="relative max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
            <p className="text-sm font-semibold text-yellow-600 uppercase tracking-widest">
                Servicios ESPERU
            </p>

            <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
                Soluciones técnicas para que tu operación no se detenga
            </h2>

            <p className="mt-5 text-gray-600 text-lg">
                Integramos soporte tecnológico, redes, electricidad e infraestructura
                para empresas que necesitan estabilidad, prevención y respuesta profesional.
            </p>
            </div>

            <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
                <div
                key={service.number}
                className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300"
                >
                <div className="flex items-center justify-between">
                    <span className="text-yellow-600 font-bold">
                    {service.number}
                    </span>

                    <div className="h-10 w-10 rounded-full bg-black text-yellow-400 flex items-center justify-center group-hover:scale-110 transition">
                    +
                    </div>
                </div>

                <h3 className="mt-8 text-xl font-bold">
                    {service.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                    {service.text}
                </p>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
    }