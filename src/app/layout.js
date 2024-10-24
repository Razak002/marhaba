import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Marhaba",
  description: "wedding ceremony of Majidat et Abdullahi",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
          <Head>
        <link rel="icon" href="/msq.png" /> 
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
