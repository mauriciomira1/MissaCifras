// ------ Components ------
import Menu from "@/components/Menu/Menu";
import Submenu from "@/components/Submenu/Submenu";

// ------ CSS global ------
import "./globals.css";

// ------ Fonts ------
import { inter, quicksand, roboto, barlow } from "./fonts";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Missa Cifras - Música católica do jeito certo!",
  description: "Música católica do jeito certo!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.variable} ${quicksand.variable} ${roboto.variable} ${barlow.variable}`}
      >
        <Menu />

        <div className="flex flex-col items-center">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
