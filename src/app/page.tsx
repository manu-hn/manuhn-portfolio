
import AboutSection from "@/components/about";
import ReduxProvider from "@/store/ReduxProvider";
import Image from "next/image";

export default function Home() {
  return (
    <ReduxProvider>
      <main className=" min-h-screen border-2 ">
        {/* <AboutSection /> */}
      </main>
    </ReduxProvider>
  );
}
