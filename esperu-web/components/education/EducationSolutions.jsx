"use client";

import { motion } from "framer-motion";

const solutions = [
{
tag: "Tecnología",
title: "Infraestructura tecnológica",
description:
"Implementamos y mantenemos la infraestructura tecnológica que permite el desarrollo de las actividades académicas y administrativas.",
items: [
"Laboratorios de cómputo",
"Redes y conectividad",
"WiFi institucional",
"Inventario tecnológico",
],
},
{
tag: "Mantenimiento",
title: "Soporte y mantenimiento",
description:
"Reducimos fallas y prolongamos la vida útil de los equipos mediante revisiones periódicas y atención especializada.",
items: [
"Mantenimiento preventivo",
"Diagnóstico técnico",
"Optimización de equipos",
"Soporte correctivo",
],
},
{
tag: "Infraestructura",
title: "Infraestructura eléctrica",
description:
"Ayudamos a mantener instalaciones seguras y preparadas para soportar las necesidades tecnológicas de la institución.",
items: [
"Tableros eléctricos",
"Protección eléctrica",
"Corrección de observaciones",
"Evaluaciones técnicas",
],
},
];

export default function EducationSolutions() {
return ( <section className="relative bg-[#F5F3EF] text-[#111111] py-24 overflow-hidden"> 
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,169,91,0.08),transparent_45%)]" />

  <div className="relative max-w-7xl mx-auto px-6">
    <div className="text-center max-w-2xl mx-auto">
      <p className="text-sm font-semibold text-[#C8A95B] uppercase tracking-widest">
        Soluciones educativas
      </p>

      <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-tight text-[#111111]">
        Soluciones diseñadas para instituciones educativas
      </h2>

      <p className="mt-5 text-gray-600 text-lg leading-relaxed">
        
        Ayudamos a instituciones educativas a mantener sus laboratorios,
         redes e infraestructura tecnológica funcionando 
         de forma estable y segura.
      </p>
    </div>

    <div className="mt-16 grid lg:grid-cols-3 gap-8">
      {solutions.map((solution, index) => (
        <motion.div
          key={solution.title}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: index * 0.12 }}
          viewport={{ once: true }}
          className="rounded-[2rem] border border-[#E8E4DD] bg-white p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-[#C8A95B]/10 border border-[#C8A95B]/20 text-[#C8A95B] text-xs font-semibold tracking-wide">
            {solution.tag}
          </span>

          <h3 className="mt-6 text-2xl font-semibold text-[#111111]">
            {solution.title}
          </h3>

          <p className="mt-4 text-gray-600 leading-relaxed">
            {solution.description}
          </p>

          <ul className="mt-7 space-y-3">
            {solution.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-gray-700"
              >
                <span className="text-[#C8A95B]">•</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </div>
</section>
)
}
