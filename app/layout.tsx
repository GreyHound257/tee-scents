import { Playfair_Display, Montserrat } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const serif = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-serif' 
});

const sans = Montserrat({ 
  subsets: ['latin'], 
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700'] 
});

export const metadata = {
  title: {
    default: 'Tee Scents | Luxury Campus Fragrance',
    template: '%s | Tee Scents',
  },
  description: 'Premium curated scents for the modern student.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${serif.variable} ${sans.variable} font-sans bg-[var(--background)] text-[var(--foreground)] min-h-screen flex flex-col transition-colors duration-500`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Navbar />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}