
import AboutSection from "@/components/about";
import Introduction from "@/components/intro";
import ReduxProvider from "@/store/ReduxProvider";

export default function Home() {
  return (
    <ReduxProvider>
      <main className=" min-h-screen  ">
        <Introduction />
      </main>
    </ReduxProvider>
  );
}
