"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-[#0A0A0A] text-white pt-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,169,91,0.13),transparent_36%),linear-gradient(to_bottom,#0A0A0A,#111111,#0A0A0A)]" />
      <div className="absolute top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#C8A95B]/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A95B]/40 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-6xl mx-auto px-6 text-center"
      >
        <h1 className="max-w-5xl mx-auto text-4xl md:text-6xl font-semibold tracking-tight leading-tight bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
          Infraestructura tecnológica para organizaciones que no pueden detenerse.
        </h1>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#soluciones"
            className="bg-gradient-to-r from-[#B89B5E] to-[#D3B872] text-black px-7 py-4 rounded-2xl font-semibold hover:scale-105 active:scale-95 transition duration-300 shadow-lg shadow-[#C8A95B]/10"
          >
            Ver soluciones
          </a>

          <a
            href="#contacto"
            className="border border-white/15 bg-white/5 px-7 py-4 rounded-2xl font-semibold hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition duration-300"
          >
            Solicitar evaluación
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-[#C8A95B] text-sm font-semibold">01</p>
            <h3 className="mt-2 font-semibold">Prevención</h3>
            <p className="mt-2 text-sm text-gray-400">
              Detectamos riesgos antes de que afecten tu operación.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-[#C8A95B] text-sm font-semibold">02</p>
            <h3 className="mt-2 font-semibold">Continuidad</h3>
            <p className="mt-2 text-sm text-gray-400">
              Mantenemos estable tu infraestructura tecnológica y eléctrica.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-[#C8A95B] text-sm font-semibold">03</p>
            <h3 className="mt-2 font-semibold">Crecimiento</h3>
            <p className="mt-2 text-sm text-gray-400">
              Impulsamos tu operación con tecnología, soporte y equipamiento.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}