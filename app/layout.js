import "./globals.css";
import Navigation from "./ui/Nav/nav";
import Footer from "./ui/Footer/footer";
import { Titillium_Web } from "next/font/google";
const titillium = Titillium_Web({ weight: ["400", "600"], subsets: ["latin"] });


export const metadata = {
  title: "Apple Vision Pro",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={titillium.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
