import { Playfair_Display, Montserrat } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const serif = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });
const sans = Montserrat({ subsets: ['latin'], variable: '--font-sans', weight: ['300', '400', '600', '700'] });

export const metadata = {
  title: 'Tee Scents | Luxury Campus Fragrance Curation',
  description: 'Premium scents curated for the modern student.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${serif.variable} ${sans.variable} font-sans bg-[#F9F6F2] text-[#2D2926] min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}