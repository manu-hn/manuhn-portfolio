
import AboutSection from "@/components/about";
import SectionDivider from "@/components/divider";
import Introduction from "@/components/intro";
import ProjectSection from "@/components/projects";
import ReduxProvider from "@/store/ReduxProvider";

export default function Home() {
  return (
    <ReduxProvider>
      <main className=" min-h-screen  flex flex-col justify-center items-center">
        <Introduction />
        <SectionDivider />
        <AboutSection />
        <ProjectSection />
      </main>
    </ReduxProvider>
  );
}
