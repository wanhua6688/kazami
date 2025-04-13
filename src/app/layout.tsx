import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/lib/language-context";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Kazami Management Research Institute",
  description: "Management consulting services for business innovation and growth",
};

// Loading components for Suspense fallbacks
function HeaderLoading() {
  return <div className="h-20 bg-white shadow-sm"></div>;
}

function FooterLoading() {
  return <div className="h-40 bg-gray-50"></div>;
}

function MainContentLoading() {
  return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientBody>
        <LanguageProvider>
          <Suspense fallback={<HeaderLoading />}>
            <Header />
          </Suspense>
          <main className="pt-20">
            <Suspense fallback={<MainContentLoading />}>
              {children}
            </Suspense>
          </main>
          <Suspense fallback={<FooterLoading />}>
            <Footer />
          </Suspense>
        </LanguageProvider>
      </ClientBody>
    </html>
  );
}
