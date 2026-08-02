import type { Metadata } from 'next';
import './globals.css';
import { ToastProvider } from '@/context/ToastContext';
import { AuthProvider } from '@/context/AuthContext';
import { SplashScreen } from '@/components/SplashScreen';

export const metadata: Metadata = {
  title: 'Oakridge School Library | Book Registration & Public Catalog',
  description: 'Search, browse, and manage physical book registrations for Oakridge School Library.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased selection:bg-amber-500/30 selection:text-amber-200 min-h-screen flex flex-col bg-[#050814]">
        <ToastProvider>
          <AuthProvider>
            <SplashScreen />
            {children}
          </AuthProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
