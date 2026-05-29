import "./globals.css";
import Providers from "./providers";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackButton from "./components/BackButton";
import SBUAssistant from "./components/SBUAssistant";

export const metadata = {
  title: "SBUTreasury",
  description: "Institutional Digital Asset Infrastructure",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Providers>

          <Header />

          <main>
            {children}
          </main>

          <Footer />

          <BackButton />

          <SBUAssistant />

        </Providers>
      </body>
    </html>
  );
}
