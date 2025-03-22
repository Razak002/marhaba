import React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { InitAnimationsComponent } from "./componenets/InitAnimationsComponent"


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AI Models for Business Solutions",
  description: "Leverage the power of AI to automate, analyze, and optimize your workflows.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <InitAnimationsComponent />
      </body>
    </html>
  )
}



