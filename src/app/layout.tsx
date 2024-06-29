import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-gray-950`}>
        <div className="bg-[#cdb2ca] absolute top-[-6rem] right-[11rem] h-[30rem] w-[30rem] rounded-full blur-[10rem]
        sm:w-[68rem]">

        </div>
      
        <div className="bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] h-[30rem] w-[50rem] -z-10 rounded-full blur-[10rem]
        sm:w-[68rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]">

        </div>
      
       
        {children}
      
        </body>
    </html>
  );
}
