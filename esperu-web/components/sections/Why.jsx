    "use client";

    import { motion } from "framer-motion";

    const items = [
    {
        title: "Enfoque en prevención",
        text: "No esperamos a que falle. Detectamos riesgos antes de que afecten tu operación.",
    },
    {
        title: "Tecnología + electricidad",
        text: "Integramos infraestructura tecnológica y sistemas eléctricos en una sola solución.",
    },
    {
        title: "Continuidad operativa",
        text: "Nuestro objetivo es que tu empresa nunca se detenga por fallas técnicas.",
    },
    {
        title: "Servicio profesional",
        text: "Atendemos colegios, empresas e instituciones con enfoque técnico real.",
    },
    ];

    export default function Why() {
    return (
        <section id="nosotros" className="relative bg-black text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(234,179,8,0.12),transparent_40%)]"></div>

        <div className="relative max-w-7xl mx-auto px-6">
            
            <div className="max-w-3xl">
            <p className="text-sm font-semibold text-yellow-400 uppercase tracking-widest">
                Por qué ESPERU
            </p>

            <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
                No solo damos soporte, protegemos tu operación
            </h2>

            <p className="mt-5 text-gray-400 text-lg">
                ESPERU nace para brindar soluciones reales en infraestructura tecnológica y eléctrica, 
                con enfoque en prevención, estabilidad y crecimiento empresarial.
            </p>
            </div>

            <div className="mt-16 grid md:grid-cols-2 gap-8">
            {items.map((item, index) => (
                <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md"
                >
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-4 text-gray-400">{item.text}</p>
                </motion.div>
            ))}
            </div>

        </div>
        </section>
    );
    }