import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/store/ReduxProvider";
import HeaderComponent from "@/components/header";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Optional: set a custom CSS variable for the font
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ManuHN | Code Artisan",
  description: "Turning complex ideas into clean, efficient code. View my latest web and software projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth`}>
      <body className={`${inter.className} bg-slate-50 text-gray-950 pt-28 sm:pt-32`} cz-shortcut-listen={"false"} >
        <ReduxProvider>
          <div className="bg-[#cdb2ca] -z-30 absolute top-[-6rem] right-[11rem] h-[30rem] w-[30rem] rounded-full blur-[10rem]
        sm:w-[68rem]">

          </div>

          <div className="bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] h-[30rem] w-[50rem] -z-10 rounded-full blur-[10rem]
        sm:w-[68rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]">

          </div>

          <HeaderComponent />
          {children}
          {/* <Toaster /> */}
        </ReduxProvider>
      </body>
    </html>
  );
}
