"use client";

import { motion } from "framer-motion";

const items = [
  {
    number: "01",
    title: "Prevención antes que reacción",
    text: "Identificamos riesgos técnicos antes de que se conviertan en fallas, interrupciones o gastos mayores.",
  },
  {
    number: "02",
    title: "Solución integral",
    text: "Unimos soporte tecnológico, redes, sistemas eléctricos y equipamiento en una misma visión operativa.",
  },
  {
    number: "03",
    title: "Atención profesional",
    text: "Trabajamos con criterio técnico, comunicación clara y recomendaciones pensadas para cada organización.",
  },
  {
    number: "04",
    title: "Continuidad operativa",
    text: "Nuestro objetivo es que tus equipos, redes e infraestructura funcionen de forma estable y segura.",
  },
];

export default function Why() {
  return (
    <section
      id="nosotros"
      className="relative bg-[#0A0A0A] text-white py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(200,169,91,0.13),transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-sm font-semibold text-[#C8A95B] uppercase tracking-widest font-mono-accent">
              Por qué ESPERU
            </p>

            <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
              No solo resolvemos fallas, ayudamos a prevenirlas.
            </h2>

            <p className="mt-6 text-gray-400 text-lg leading-relaxed">
              ESPERU combina soporte técnico, infraestructura, electricidad y
              soluciones digitales para que empresas, instituciones y profesionales
              trabajen con mayor estabilidad y confianza.
            </p>

            <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <p className="text-[#C8A95B] font-semibold">
                Nuestro enfoque
              </p>
              <p className="mt-3 text-gray-400 leading-relaxed">
                Menos improvisación. Más diagnóstico, prevención y continuidad.
              </p>
            </div>
          </div>

          <div className="grid gap-5">
            {items.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-md hover:bg-white/10 hover:-translate-y-1 transition duration-300"
              >
                <div className="flex gap-5">
                  <span className="text-[#C8A95B] font-semibold font-mono-accent">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-gray-400 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}