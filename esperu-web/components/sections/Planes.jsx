    const plans = [
    {
        name: "Plan Básico",
        subtitle: "Prevención esencial",
        price: "S/ 650",
        featured: false,
        items: [
        "1 visita mensual",
        "Diagnóstico general",
        "Revisión de equipos",
        "Evaluación eléctrica básica",
        "Informe técnico breve",
        ],
    },
    {
        name: "Plan Medio",
        subtitle: "El más recomendado",
        price: "S/ 950",
        featured: true,
        items: [
        "2 visitas mensuales",
        "Mantenimiento preventivo",
        "Revisión de red",
        "Evaluación de tableros eléctricos",
        "Reporte técnico con recomendaciones",
        ],
    },
    {
        name: "Plan Integral",
        subtitle: "Soporte continuo",
        price: "S/ 1400",
        featured: false,
        items: [
        "Atención prioritaria",
        "Auditoría completa",
        "Infraestructura tecnológica + eléctrica",
        "Seguimiento preventivo",
        "Plan de mejora técnica",
        ],
    },
    ];

    export default function Plans() {
    return (
        <section id="planes" className="relative bg-black text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.14),transparent_38%)]"></div>

        <div className="relative max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-yellow-400 uppercase tracking-widest">
                Planes de mantenimiento
            </p>

            <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
                Mantenimiento preventivo para empresas e instituciones
            </h2>

            <p className="mt-5 text-gray-400 text-lg">
                Diseñados para reducir riesgos, prevenir fallas y mantener estable tu infraestructura tecnológica y eléctrica.
            </p>

            <p className="mt-4 text-sm text-gray-500">
                *Los planes se aplican por sede o unidad institucional.
            </p>
            </div>

            <div className="mt-16 grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
                <div
                key={plan.name}
                className={`relative rounded-3xl p-7 border transition duration-300 ${
                    plan.featured
                    ? "border-yellow-500 bg-white/10 shadow-2xl shadow-yellow-500/10 md:-translate-y-4"
                    : "border-white/10 bg-white/5 hover:-translate-y-2"
                }`}
                >
                {plan.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-xs px-4 py-2 rounded-full font-bold tracking-wide">
                    MÁS RECOMENDADO
                    </div>
                )}

                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="mt-2 text-gray-400">{plan.subtitle}</p>

                <div className="mt-8">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-400 text-sm"> / mes</span>
                </div>

                <ul className="mt-8 space-y-4 text-gray-300">
                    {plan.items.map((item) => (
                    <li key={item} className="flex gap-3">
                        <span className="text-yellow-400">✓</span>
                        <span>{item}</span>
                    </li>
                    ))}
                </ul>

                <a
                    href="#contacto"
                    className={`mt-8 block text-center rounded-2xl px-6 py-4 font-semibold transition duration-300 ${
                    plan.featured
                        ? "bg-yellow-500 text-black hover:bg-yellow-400"
                        : "border border-white/20 hover:bg-white hover:text-black"
                    }`}
                >
                    Solicitar este plan
                </a>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
    }