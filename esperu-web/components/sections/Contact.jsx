export default function Contact() {
  return (
    <section
      id="contacto"
      className="bg-[#F7F7F5] text-[#0A0A0A] py-24"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">

        <p className="text-sm font-semibold text-[#C8A95B] uppercase tracking-widest font-mono-accent">
          Contacto
        </p>

        <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
          Hablemos sobre tu infraestructura.
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Analizamos tu entorno tecnológico y eléctrico para identificar riesgos,
          oportunidades de mejora y acciones que permitan mantener tu operación
          funcionando sin interrupciones.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <a
            href="https://wa.me/51966366499?text=Hola%20ESPERU,%20quiero%20una%20evaluación%20de%20mi%20infraestructura."
            target="_blank"
            className="bg-[#C8A95B] text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 active:scale-95 transition duration-300"
          >
            Solicitar evaluación
          </a>

          <a
            href="mailto:esperu.scrl@gmail.com"
            className="border border-black/10 bg-white px-8 py-4 rounded-2xl font-semibold hover:bg-black hover:text-white transition duration-300"
          >
            Enviar correo
          </a>

        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3 text-sm">

          <span className="px-4 py-2 rounded-full bg-white border border-black/10">
            Colegios
          </span>

          <span className="px-4 py-2 rounded-full bg-white border border-black/10">
            Empresas
          </span>

          <span className="px-4 py-2 rounded-full bg-white border border-black/10">
            Oficinas
          </span>

          <span className="px-4 py-2 rounded-full bg-white border border-black/10">
            Profesionales
          </span>

        </div>

      </div>
    </section>
  );
}