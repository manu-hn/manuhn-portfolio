
import AboutSection from "@/components/about";
import SectionDivider from "@/components/divider";
import ExperienceSection from "@/components/experience";
import FooterSection from "@/components/footer";
import Introduction from "@/components/intro";
import ProjectSection from "@/components/projects";
import SkillsSection from "@/components/skills";


export default function Home() {
  return (
    
    <main className=" min-h-screen  flex flex-col justify-center items-center w-full scroll-mt-28">
      <Introduction />
      <SectionDivider />
      <AboutSection />
      <ProjectSection />
      <SkillsSection />
      <ExperienceSection/>
      <FooterSection />
    </main>
   
  );
}

