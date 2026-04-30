    "use client";
    import { motion } from "framer-motion";
    
    export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-black text-white pt-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.18),transparent_35%),linear-gradient(to_bottom,#000000,#0b0b0b,#000000)]"></div>
        <div className="absolute top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-yellow-500/10 blur-3xl"></div>

            <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-5xl mx-auto px-6 text-center"
            >
                
            <p className="inline-flex items-center rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-400 mb-6">
            Soporte • Infraestructura • Redes • Energía
            </p>

            <h1 className="text-4xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
            Infraestructura tecnológica y eléctrica sin fallas
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Evita interrupciones, reduce riesgos y asegura la continuidad operativa
            de tu empresa con soluciones profesionales en tecnología, redes y electricidad.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
                href="#contacto"
                className="bg-yellow-500 text-black px-7 py-4 rounded-2xl font-semibold hover:bg-yellow-400 hover:-translate-y-1 hover:scale-105 active:scale-95 transition duration-300"
            >
                Solicitar evaluación
            </a>

            <a
                href="#servicios"
                className="border border-white/20 bg-white/5 px-7 py-4 rounded-2xl font-semibold hover:bg-white hover:text-black hover:-translate-y-1 hover:scale-105 active:scale-95 transition duration-300"
            >
                Ver servicios
            </a>
            </div>

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                <p className="text-yellow-400 font-semibold">01</p>
                <h3 className="mt-2 font-bold">Prevención</h3>
                <p className="mt-2 text-sm text-gray-400">
                Detectamos riesgos antes de que afecten tu operación.
                </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                <p className="text-yellow-400 font-semibold">02</p>
                <h3 className="mt-2 font-bold">Continuidad</h3>
                <p className="mt-2 text-sm text-gray-400">
                Mantenemos tus sistemas tecnológicos y eléctricos estables.
                </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                <p className="text-yellow-400 font-semibold">03</p>
                <h3 className="mt-2 font-bold">Confianza</h3>
                <p className="mt-2 text-sm text-gray-400">
                Servicio profesional para instituciones, colegios y empresas.
                </p>
            </div>
            </div>
            </motion.div>
        </section>
    );
    }