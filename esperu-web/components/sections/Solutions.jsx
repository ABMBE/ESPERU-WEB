"use client";

import { motion } from "framer-motion";

const solutions = [
  {
    title: "Infraestructura",
    subtitle: "Operación estable y segura",
    text: "Soporte técnico, redes, cableado estructurado, sistemas eléctricos, mantenimiento preventivo y automatización.",
    items: ["Soporte técnico", "Redes empresariales", "Sistemas eléctricos"],
  },
  {
    title: "Tecnología",
    subtitle: "Soluciones digitales para crecer",
    text: "Páginas web, licencias, sistemas empresariales, seguridad informática, inventarios y consultoría tecnológica.",
    items: ["Páginas web", "Licencias", "Sistemas empresariales"],
  },
  {
    title: "Equipamiento",
    subtitle: "Herramientas confiables",
    text: "Venta e instalación de laptops, PCs, monitores, impresoras, accesorios y equipamiento corporativo.",
    items: ["Laptops y PCs", "Impresoras", "Accesorios"],
  },
];

export default function Solutions() {
  return (
    <section
      id="soluciones"
      className="relative bg-[#F7F7F5] text-[#0A0A0A] py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.14),transparent_35%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-[#D4AF37] uppercase tracking-widest font-mono-accent">
            Soluciones ESPERU
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
            Tres pilares para mantener tu operación funcionando.
          </h2>

          <p className="mt-5 text-gray-600 text-lg leading-relaxed">
            Organizamos nuestros servicios en áreas claras para ayudarte a encontrar
            la solución correcta según la necesidad de tu empresa, institución o proyecto.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-7">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="group rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="h-12 w-12 rounded-2xl bg-[#0A0A0A] text-[#D4AF37] flex items-center justify-center font-bold font-mono-accent">
                {index + 1}
              </div>

              <h3 className="mt-8 text-2xl font-semibold">
                {solution.title}
              </h3>

              <p className="mt-2 text-[#D4AF37] font-medium">
                {solution.subtitle}
              </p>

              <p className="mt-5 text-gray-600 leading-relaxed">
                {solution.text}
              </p>

              <div className="mt-7 space-y-3">
                {solution.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-gray-700"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                    {item}
                  </div>
                ))}
              </div>

              <a
                href="#contacto"
                className="mt-8 inline-flex items-center text-sm font-semibold text-[#0A0A0A] group-hover:text-[#D4AF37] transition"
              >
                Solicitar información →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}