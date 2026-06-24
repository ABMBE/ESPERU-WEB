"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const sectors = [
{
title: "Colegios",
subtitle: "Infraestructura educativa estable",
text: "Soluciones para instituciones que dependen de laboratorios, conectividad, equipos informáticos y sistemas eléctricos seguros.",
items: ["Laboratorios", "Redes WiFi", "Equipamiento", "Mantenimiento"],
link: "/education",
},
{
title: "Empresas",
subtitle: "Continuidad operativa",
text: "Servicios orientados a reducir fallas, mejorar productividad y mantener operativa la infraestructura tecnológica y eléctrica.",
items: ["Soporte TI", "Redes", "Electricidad", "Prevención"],
},
{
title: "Profesionales",
subtitle: "Tecnología para crecer",
text: "Herramientas digitales y equipamiento para profesionales independientes, oficinas pequeñas y negocios en crecimiento.",
items: ["Páginas web", "Licencias", "Laptops", "Soporte"],
},
];

export default function Sectors() {
return ( <section
   id="sectores"
   className="relative bg-[#0A0A0A] text-white py-24 overflow-hidden"
 > <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(200,169,91,0.13),transparent_40%)]" />

  <div className="relative max-w-7xl mx-auto px-6">
    <div className="text-center max-w-3xl mx-auto">
      <p className="text-sm font-semibold text-[#C8A95B] uppercase tracking-widest font-mono-accent">
        Sectores que atendemos
      </p>

      <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
        Soluciones adaptadas a cada tipo de organización.
      </h2>

      <p className="mt-5 text-gray-400 text-lg leading-relaxed">
        ESPERU trabaja con instituciones, empresas y profesionales que
        necesitan tecnología confiable, soporte oportuno e infraestructura estable.
      </p>
    </div>

    <div className="mt-16 grid lg:grid-cols-3 gap-8">
      {sectors.map((sector, index) => (
        <motion.div
          key={sector.title}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: index * 0.12 }}
          viewport={{ once: true }}
          className="group rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md hover:bg-white/[0.075] hover:-translate-y-2 transition duration-300"
        >
          <div className="flex items-center justify-between">
            <p className="text-[#C8A95B] text-sm font-semibold font-mono-accent">
              0{index + 1}
            </p>

            <div className="h-px w-16 bg-[#C8A95B]/40"></div>
          </div>

          <h3 className="mt-8 text-2xl font-semibold">
            {sector.title}
          </h3>

          <p className="mt-2 text-[#C8A95B] font-medium">
            {sector.subtitle}
          </p>

          <p className="mt-5 text-gray-400 leading-relaxed">
            {sector.text}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {sector.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-gray-300"
              >
                {item}
              </span>
            ))}
          </div>

          {sector.link ? (
            <Link
              href={sector.link}
              className="mt-8 inline-flex items-center rounded-full border border-[#C8A95B]/30 px-4 py-2 text-sm text-[#C8A95B] font-medium hover:bg-[#C8A95B] hover:text-black transition"
            >
              Ver solución educativa →
            </Link>
          ) : (
            <div className="mt-8 h-10" />
          )}
        </motion.div>
      ))}
    </div>
  </div>
</section>

);
}
