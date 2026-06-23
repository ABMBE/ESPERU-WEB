"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function EducationHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0A0A0A] text-white pt-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,169,91,0.13),transparent_36%),linear-gradient(to_bottom,#0A0A0A,#111111,#0A0A0A)]" />
      <div className="absolute top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#C8A95B]/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-6xl mx-auto px-6 text-center"
      >

<div className="flex justify-center mb-10">
  <Image
    src="/logo/logo-fat.png"
    alt="ESPERU"
    width={30}
    height={18}
    priority
  />
</div>
       <div className="mb-8 flex justify-center">
  <span className="text-sm tracking-[0.25em] uppercase text-[#C8A95B]">
    ESPERU 
   - EDUCACIÓN
  </span>
</div>


        <h1 className="max-w-5xl mx-auto text-4xl md:text-6xl font-semibold tracking-tight leading-tight bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
          Tecnología confiable para instituciones educativas.
        </h1>

        <p className="mt-7 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Ayudamos a instituciones educativas a reducir fallas,
           mantener sus laboratorios operativos y asegurar la
           continuidad de sus actividades académicas.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contacto-educacion"
            className="bg-gradient-to-r from-[#B89B5E] to-[#D3B872] text-black px-7 py-4 rounded-2xl font-semibold hover:scale-105 active:scale-95 transition duration-300 shadow-lg shadow-[#C8A95B]/10"
          >
            Solicitar diagnostico
          </a>

          <a
            href="#problemas"
            className="border border-white/15 bg-white/5 px-7 py-4 rounded-2xl font-semibold hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition duration-300"
          >
            Ver problemas comunes
          </a>
        </div>
      </motion.div>
    </section>
  );
}