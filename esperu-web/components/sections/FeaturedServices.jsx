"use client";

import { motion } from "framer-motion";
import { Wrench, Laptop, Globe, Network, KeyRound, Building2 } from "lucide-react";

const services = [
  {
    title: "Mantenimiento de equipos",
    text: "Limpieza, diagnóstico, optimización y mantenimiento preventivo para laptops, PCs e impresoras.",
    tag: "Soporte técnico",
    icon: Wrench,
  },
  {
    title: "Venta de equipos",
    text: "Laptops, computadoras, monitores, impresoras y accesorios seleccionados según la necesidad del cliente.",
    tag: "Equipamiento",
    icon: Laptop,
  },
  {
    title: "Creación de páginas web",
    text: "Diseño y desarrollo de páginas modernas para empresas, profesionales, portafolios y servicios.",
    tag: "Tecnología",
    icon: Globe,
  },
  {
    title: "Redes y cableado",
    text: "Instalación, ordenamiento y mejora de redes, puntos de red, WiFi, switches y cableado estructurado.",
    tag: "Infraestructura",
    icon: Network,
  },
  {
    title: "Licencias y software",
    text: "Instalación y configuración de licencias, herramientas de productividad y software empresarial.",
    tag: "Software",
    icon: KeyRound,
  },
  {
    title: "Soporte empresarial",
    text: "Atención técnica para oficinas, instituciones y negocios que necesitan continuidad y respuesta profesional.",
    tag: "Empresas",
    icon: Building2,
  },
];

export default function FeaturedServices() {
  return (
    <section
      id="servicios"
      className="relative bg-[#F7F7F5] text-[#0A0A0A] py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.13),transparent_35%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-[#D4AF37] uppercase tracking-widest font-mono-accent">
            Servicios destacados
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
            Servicios concretos para resolver necesidades reales.
          </h2>

          <p className="mt-5 text-gray-600 text-lg leading-relaxed">
            Desde mantenimiento técnico hasta desarrollo web y equipamiento,
            ESPERU ofrece soluciones prácticas para hogares, profesionales e instituciones.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group rounded-[2rem] border border-black/10 bg-white p-7 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="h-11 w-11 rounded-xl bg-[#0A0A0A] text-[#D4AF37] flex items-center justify-center">
                    <Icon size={20} />
                  </div>

                  <span className="inline-flex rounded-full bg-[#D4AF37]/10 px-3 py-1 text-xs font-semibold text-[#9A7A18] font-mono-accent">
                    {service.tag}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {service.text}
                </p>

                <a
                  href="#contacto"
                  className="mt-7 inline-flex text-sm font-semibold text-[#0A0A0A] group-hover:text-[#D4AF37] transition"
                >
                  Consultar servicio →
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
