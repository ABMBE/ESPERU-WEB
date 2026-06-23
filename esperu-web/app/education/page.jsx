import EducationHero from "@/components/education/EducationHero";
import EducationSolutions from "@/components/education/EducationSolutions";
import EducationProblems from "@/components/education/EducationProblems";
import EducationBenefits from "@/components/education/EducationBenefits";
import EducationCTA from "@/components/education/EducationCTA";

export const metadata = {
  title: "ESPERU Educación | Tecnología para instituciones educativas",
  description:
    "Mantenimiento preventivo, redes, soporte e infraestructura tecnológica para colegios, institutos y academias.",
};

export default function EducationPage() {
  return (
    <main>
      <EducationHero />
      <EducationSolutions></EducationSolutions>
      <EducationProblems/>
      <EducationBenefits/>
      <EducationCTA/>
    </main>
  );
}