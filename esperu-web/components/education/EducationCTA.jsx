"use client";

import { motion } from "framer-motion";

export default function EducationCTA() {
return ( <section
   id="contacto-educacion"
   className="relative bg-[#0A0A0A] text-white py-28 overflow-hidden"
 > <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,91,0.14),transparent_45%)]" />

  <div className="relative max-w-4xl mx-auto px-6 text-center">
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <p className="text-sm font-semibold text-[#C8A95B] uppercase tracking-widest font-mono-accent">
        Evaluación institucional
      </p>

      <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
        Conozcamos las necesidades de tu institución.
      </h2>

      <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
        Revisamos la infraestructura tecnológica y eléctrica de tu
        institución para identificar oportunidades de mejora,
        prevenir fallas y fortalecer la continuidad de las actividades
        académicas.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="https://wa.me/51966366499?text=Hola%20ESPERU,%20quiero%20información%20para%20mi%20institución."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-[#B89B5E] to-[#D3B872] text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 active:scale-95 transition duration-300"
        >
          Hablar con ESPERU
        </a>

        <a
          href="/"
          className="border border-white/15 bg-white/5 px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-black transition duration-300"
        >
          Conocer ESPERU
        </a>
      </div>
    </motion.div>
  </div>
</section>

);
}