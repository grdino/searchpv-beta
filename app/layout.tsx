import "../styles/globals.css";
import Header from "../components/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-gray-800">
        <Header />
        <main className="min-h-screen p-6 max-w-7xl mx-auto space-y-16">
          {children}
        </main>
        <footer className="text-sm text-center py-8 border-t">
          © 2025 SearchPV | Puerto Vallarta Real Estate — All rights reserved
        </footer>
      </body>
    </html>
  );
}
