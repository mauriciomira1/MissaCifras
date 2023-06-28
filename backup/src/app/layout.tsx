import "./globals.css";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

//Fonts
import { quicksand, roboto, barlow } from '../../../src/app/fonts'


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
        className={`${} ${roboto.variable} ${barlow.variable}`}
      >
        <Menu />
        <Submenu />
        {children}
      </body>

    </html>
  );
}
