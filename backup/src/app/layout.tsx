import "./globals.css";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

//Fonts
import { Quicksand } from "next/font/google";
import { Roboto } from "next/font/google";

const quicksand = Quicksand({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-quicksand",
});
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});


export const metadata = {
  title: "MissaCifras",
  description: "Evangelizando o Brasil!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="pt-br">
      <body
        className={`${quicksand.variable} ${roboto.variable} ${boldfinger.variable}`}
      >
        <Menu />
        <Submenu />
        {children}
      </body>

    </html>
  );
}
