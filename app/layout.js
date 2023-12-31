import "./globals.css";
import { Inter } from "next/font/google";
import Setup from "@/components/utils/setup";
import CustomProvider from "@/redux/proviider";
import Navbar from "@/components/common/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MediAid App",
  description: "MediAid is medical reminder App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomProvider>
          <Setup />
          <Navbar/>
          {children}
        </CustomProvider>
      </body> 
    </html>
  );
}
