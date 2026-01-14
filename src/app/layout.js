import Navbar from '@/components/global/Navbar';
import Footer from '@/components/global/Footer';
import SmoothScrollProvider from '@/components/global/SmoothScrollProvider';
import './globals.css';

export const metadata = {
  title: 'Lumina',
  description: 'Minimalist Avant-Garde Lighting',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0A0A0A]">
        <SmoothScrollProvider>
          <Navbar />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
