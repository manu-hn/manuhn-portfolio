
import AboutSection from "@/components/about";
import ContactMeSection from "@/components/contact";
import SectionDivider from "@/components/divider";
import ExperienceSection from "@/components/experience";
import Introduction from "@/components/intro";
import ProjectSection from "@/components/projects";
import SkillsSection from "@/components/skills";
import NotistackProvider from "@/components/notice-provider/NotistackProvider";

export default function Home() {
  return (
    <NotistackProvider>
      <main className=" min-h-screen  flex flex-col justify-center items-center w-full scroll-mt-28">
        <Introduction />
        <SectionDivider />
        <AboutSection />
        <ProjectSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactMeSection />
      </main>
    </NotistackProvider>

  );
}

