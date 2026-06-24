"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Esencial",
    subtitle: "Para pequeñas organizaciones",
    text: "Ideal para negocios, oficinas o instituciones que necesitan soporte periódico y mantenimiento preventivo.",
    items: [
      "Visitas programadas",
      "Revisión tecnológica",
      "Evaluación inicial",
      "Recomendaciones técnicas",
    ],
  },
  {
    name: "Profesional",
    subtitle: "Para instituciones en crecimiento",
    text: "Pensado para organizaciones que requieren seguimiento continuo, mayor cobertura y reportes técnicos.",
    featured: true,
    items: [
      "Visitas periódicas",
      "Mantenimiento preventivo",
      "Revisión de infraestructura",
      "Evaluaciones eléctricas",
      "Reportes técnicos",
    ],
  },
  {
    name: "Empresarial",
    subtitle: "Para operaciones críticas",
    text: "Orientado a empresas e instituciones que buscan continuidad operativa, atención prioritaria y soporte integral.",
    items: [
      "Atención prioritaria",
      "Seguimiento continuo",
      "Soporte tecnológico integral",
      "Revisión eléctrica",
      "Plan de mejora técnica",
    ],
  },
];

export default function ServicePlans() {
  return (
    <section
      id="planes"
      className="relative bg-[#0A0A0A] text-white py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,169,91,0.13),transparent_38%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-[#C8A95B] uppercase tracking-widest font-mono-accent">
            Planes de atención
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
            Adaptamos el servicio según tu operación.
          </h2>

          <p className="mt-5 text-gray-400 text-lg leading-relaxed">
            Cada organización tiene necesidades distintas. Por eso trabajamos
            con modalidades flexibles según el tamaño, la complejidad y el nivel
            de soporte requerido.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              viewport={{ once: true }}
              className={`relative rounded-[2rem] p-8 border transition duration-300 ${
                plan.featured
                  ? "border-[#C8A95B]/70 bg-white/[0.09] shadow-2xl shadow-[#C8A95B]/10 md:-translate-y-4"
                  : "border-white/10 bg-white/[0.045] hover:bg-white/[0.07] hover:-translate-y-2"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C8A95B] text-black text-xs px-4 py-2 rounded-full font-bold tracking-wide font-mono-accent">
                  MÁS RECOMENDADO
                </div>
              )}

              <p className="text-sm text-[#C8A95B] font-semibold font-mono-accent">
                0{index + 1}
              </p>

              <h3 className="mt-5 text-2xl font-semibold">{plan.name}</h3>

              <p className="mt-2 text-[#C8A95B] font-medium">
                {plan.subtitle}
              </p>

              <p className="mt-5 text-gray-400 leading-relaxed">
                {plan.text}
              </p>

              <ul className="mt-8 space-y-4 text-gray-300">
                {plan.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 size={18} className="text-[#C8A95B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`mt-8 block text-center rounded-2xl px-6 py-4 font-semibold transition duration-300 ${
                  plan.featured
                    ? "bg-[#C8A95B] text-black hover:scale-105 active:scale-95"
                    : "border border-white/15 hover:border-[#C8A95B] hover:text-[#C8A95B] hover:scale-105 active:scale-95"
                }`}
              >
                Solicitar propuesta
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}