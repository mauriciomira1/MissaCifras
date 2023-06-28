import { Inter, Quicksand, Roboto, Barlow_Condensed } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const barlow = Barlow_Condensed({
  weight: ["700", "800", "900"],
  variable: "--font-barlow",
});
