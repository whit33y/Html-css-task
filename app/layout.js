import { Titillium_Web } from "next/font/google";
import "./globals.css";
import Navigation from "./ui/Nav/nav";
import Footer from "./ui/Footer/footer";
const titillium = Titillium_Web({ weight: ["400", "600"], subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={titillium.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
