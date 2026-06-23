"use client";

import { motion } from "framer-motion";

const problems = [
  {
    title: "Laboratorios lentos 🐢" ,
    text: "Equipos que demoran en iniciar, se congelan o dificultan el desarrollo normal de clases.",
  },
  {
    title: "WiFi inestable 🛜 ",
    text: "Conexiones débiles, cortes frecuentes o zonas sin cobertura dentro de la institución.",
  },
  {
    title: "Equipos sin mantenimiento ⚙️",
    text: "Computadoras, laptops e impresoras que acumulan fallas por falta de revisión preventiva.",
  },
  {
    title: "Riesgos eléctricos⚡",
    text: "Instalaciones, tableros o puntos eléctricos que necesitan revisión para operar con seguridad.",
  },
  {
    title: "Inventario desactualizado 🖥️ ",
    text: "Dificultad para saber qué equipos existen, en qué estado están y cuáles requieren renovación.",
  },
  {
    title: "Interrupciones operativas 🚫",
    text: "Fallas técnicas que afectan clases, administración, atención a padres o procesos internos.",
  },
];

export default function EducationProblems() {
  return (
    <section
      id="problemas"
      className="relative bg-[#0A0A0A] text-white py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,169,91,0.12),transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-[#C8A95B] uppercase tracking-widest">
            Problemas comunes
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
            ¿Tu institución enfrenta alguno de estos problemas?
          </h2>

          <p className="mt-5 text-gray-400 text-lg leading-relaxed">
            Muchas fallas tecnológicas no aparecen de un día para otro. Se acumulan
            con el tiempo hasta afectar clases, administración y continuidad operativa.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 hover:bg-white/[0.08] hover:-translate-y-2 transition duration-300"
            >
              <p className="text-[#C8A95B] text-sm font-semibold">
                0{index + 1}
              </p>

              <h3 className="mt-5 text-xl font-semibold">
                {problem.title}
              </h3>

              <p className="mt-4 text-gray-400 leading-relaxed">
                {problem.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}