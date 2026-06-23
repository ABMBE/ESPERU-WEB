"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    title: "Menos interrupciones de clases",
    text: "Reducimos fallas que afectan laboratorios, aulas, oficinas administrativas y actividades académicas.",
  },
  {
    title: "Mayor vida útil de los equipos",
    text: "El mantenimiento preventivo ayuda a conservar computadoras, laptops e impresoras en mejores condiciones.",
  },
  {
    title: "Mejor conectividad",
    text: "Optimizamos redes y WiFi para mejorar la experiencia de docentes, estudiantes y personal administrativo.",
  },
  {
    title: "Mayor seguridad operativa",
    text: "Revisamos puntos críticos tecnológicos y eléctricos para reducir riesgos dentro de la institución.",
  },
  {
    title: "Mejor control del inventario",
    text: "Ayudamos a identificar el estado de los equipos y priorizar renovaciones o mantenimientos.",
  },
  {
    title: "Decisiones técnicas más claras",
    text: "Entregamos recomendaciones para que la institución pueda planificar mejoras con mayor criterio.",
  },
];

export default function EducationBenefits() {
  return (
    <section className="relative bg-[#F5F3EF] text-[#111111] py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,169,91,0.08),transparent_45%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-[#C8A95B] uppercase tracking-widest">
            Beneficios
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
            Más estabilidad para la institución, docentes y estudiantes.
          </h2>

          <p className="mt-5 text-gray-600 text-lg leading-relaxed">
            Nuestro enfoque preventivo ayuda a mantener la operación académica
            funcionando con mayor seguridad, orden y continuidad.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-[#E8E4DD] bg-white p-7 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <p className="text-[#C8A95B] text-sm font-semibold">
                0{index + 1}
              </p>

              <h3 className="mt-5 text-xl font-semibold text-[#111111]">
                {benefit.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {benefit.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}